import { test as base, expect } from "@playwright/test";

const test = base.extend<{ networkChecks: void }>({
  networkChecks: [
    async ({ page }, use) => {
      const failures: string[] = [];
      page.on("pageerror", (error) => failures.push(error.message));
      page.on("response", (response) => {
        if (response.status() >= 400)
          failures.push(`${response.status()} ${response.url()}`);
      });
      await use();
      expect(failures, "No script errors or missing static resources").toEqual([]);
    },
    { auto: true },
  ],
});

test("navigation, images and responsive footer", async ({ page }) => {
  await page.goto("./pt/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "O Aikido é para todos.",
  );
  await expect(page.locator("footer")).not.toContainText("Bruno Correia");
  const images = page.locator("img");
  await images.evaluateAll((elements) =>
    Promise.all(
      (elements as HTMLImageElement[]).map((img) => {
        img.loading = "eager";
        return img.decode();
      }),
    ),
  );
  expect(
    await images.evaluateAll((imgs) =>
      (imgs as HTMLImageElement[]).every((img) => img.naturalWidth > 0),
    ),
  ).toBe(true);
  for (const width of [360, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    const gallery = await page.locator(".project-gallery img").evaluateAll(
      (elements) =>
        (elements as HTMLImageElement[]).map((img) => {
          const style = getComputedStyle(img);
          const frame = img.parentElement!.getBoundingClientRect();
          return {
            fit: style.objectFit,
            portrait: frame.height > frame.width,
            loaded: img.naturalWidth > 0,
          };
        }),
    );
    expect(gallery.length).toBeGreaterThanOrEqual(2);
    for (const photo of gallery) {
      expect(photo).toEqual({ fit: "contain", portrait: true, loaded: true });
    }
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    await page.evaluate(() =>
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "instant",
      }),
    );
    const overlap = await page.evaluate(() => {
      const button = document
        .querySelector(".whatsapp-float")!
        .getBoundingClientRect();
      return [...document.querySelectorAll(".footer-bottom p")].some(
        (element) => {
          const text = element.getBoundingClientRect();
          return (
            text.left < button.right &&
            text.right > button.left &&
            text.top < button.bottom &&
            text.bottom > button.top
          );
        },
      );
    });
    expect(overlap, `Footer clearance at ${width}px`).toBe(false);
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.locator(".mobile-menu > summary").click();
  await page.locator(".mobile-menu .institutional-menu > summary").click();
  await expect(
    page.locator(".mobile-menu").getByRole("link", { name: "Órgãos Sociais" }),
  ).toBeVisible();
  await page
    .locator(".mobile-menu")
    .getByRole("link", { name: "Órgãos Sociais" })
    .click();
  await expect(page).toHaveURL(/\/pt\/orgaos-sociais\/$/);
  await page.locator("header a").first().click();
  await expect(page).toHaveURL(/\/pt\/$/);
});

test("contact intents and required fields", async ({ page }) => {
  await page.goto("./pt/");
  await page
    .getByRole("link", { name: "Solicitar apresentação", exact: true })
    .click();
  await expect(page.locator("[name=subject]")).toHaveValue("presentation");
  await page.getByRole("link", { name: "Quero apoiar", exact: true }).click();
  await expect(page.locator("[name=subject]")).toHaveValue("support");
  await page.getByRole("link", { name: "Propor colaboração", exact: true }).click();
  await expect(page.locator("[name=subject]")).toHaveValue("partnership");
  expect(
    await page
      .locator("#contact-form")
      .evaluate((form) => (form as HTMLFormElement).checkValidity()),
  ).toBe(false);
  await page.locator("[name=name]").fill("Teste local");
  await page.locator("[name=email]").fill("teste@example.com");
  await page.locator("[name=message]").fill("Validacao sem enviar email.");
  expect(
    await page
      .locator("#contact-form")
      .evaluate((form) => (form as HTMLFormElement).checkValidity()),
  ).toBe(true);
  await page.goto("./pt/?assunto=training#contactos");
  await expect(page.locator("[name=subject]")).toHaveValue("training");
  await page.goto("./pt/?assunto=invalid#contactos");
  await expect(page.locator("[name=subject]")).toHaveValue("");
});

test("institutional routes, archive and language switching", async ({
  page,
}) => {
  for (const [pt, en] of [
    ["orgaos-sociais", "governance"],
    ["equipa", "team"],
    ["documentacao-institucional", "institutional-documents"],
    ["programa-tecnico-pedagogico", "technical-pedagogical-programme"],
    ["noticias", "news"],
  ]) {
    const response = await page.goto(`./pt/${pt}/`);
    expect(response?.status()).toBe(200);
    await expect(page.getByRole("heading", { level: 1 })).not.toBeEmpty();
    await expect(page.locator("footer")).not.toContainText("Bruno Correia");
    if (pt === "orgaos-sociais")
      await expect(page.locator("main dd")).toHaveCount(9);
    if (pt === "equipa")
      await expect(page.locator("main article")).toHaveCount(10);
    await page.getByRole("link", { name: "EN", exact: true }).click();
    await expect(page).toHaveURL(new RegExp(`/en/${en}/$`));
    await expect(page.locator("html")).toHaveAttribute("lang", "en");
    await expect(page.locator("footer")).not.toContainText("Bruno Correia");
  }
});

test.describe("mobile image performance", () => {
  test.use({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    isMobile: true,
  });

  test("responsive WebP, shared preload and deferred photos", async ({ page }) => {
    await page.goto("./pt/", { waitUntil: "networkidle" });
    const cover = page.locator(
      'img[data-image-source="/media/project/apaai-hero-cover.jpg"]',
    );
    await expect(cover).toHaveAttribute("loading", "eager");
    await expect(cover).toHaveAttribute("fetchpriority", "high");
    await expect(cover).toHaveAttribute("srcset", /800w/);
    await cover.evaluate((element) => (element as HTMLImageElement).decode());
    const chosen = await cover.evaluate((element) => {
      const image = element as HTMLImageElement;
      return { src: image.currentSrc, width: image.naturalWidth };
    });
    expect(chosen.src).toMatch(/apaai-hero-cover-jpg-w800\.webp\?v=/);

    const preload = page.locator(
      'link[rel="preload"][as="image"][fetchpriority="high"]',
    );
    await expect(preload).toHaveCount(1);
    expect(await preload.getAttribute("imagesrcset")).toBe(
      await cover.getAttribute("srcset"),
    );
    expect(await preload.getAttribute("imagesizes")).toBe(
      await cover.getAttribute("sizes"),
    );

    const photos = page.locator(
      'img[data-image-source^="/media/project/"]:not([fetchpriority="high"])',
    );
    await expect(photos).toHaveCount(6);
    expect(
      await photos.evaluateAll((elements) =>
        (elements as HTMLImageElement[]).every(
          (image) => image.loading === "lazy" && image.width > 0 && image.height > 0,
        ),
      ),
    ).toBe(true);

    const resources = await page.evaluate(() =>
      (performance.getEntriesByType("resource") as PerformanceResourceTiming[])
        .filter((entry) => /\.(?:jpe?g|png|webp)(?:\?|$)/.test(entry.name))
        .map((entry) => ({ url: entry.name, bytes: entry.encodedBodySize })),
    );
    expect(resources.every((entry) => new URL(entry.url).pathname.endsWith(".webp"))).toBe(true);
    const coverRequests = resources.filter((entry) => entry.url.includes("apaai-hero-cover"));
    expect(coverRequests, "Preload and image must share a single download").toHaveLength(1);
    expect(coverRequests[0].url).toBe(chosen.src);
    expect(coverRequests[0].bytes).toBeGreaterThan(0);
    expect(coverRequests[0].bytes).toBeLessThan(60 * 1024);
    const logoRequests = resources.filter((entry) => entry.url.includes("logo-apaai"));
    expect(logoRequests).toHaveLength(1);
    expect(logoRequests[0].url).toMatch(/logo-apaai-jpeg-w96\.webp\?v=/);
    expect(logoRequests[0].bytes).toBeLessThan(4 * 1024);
  });
});
