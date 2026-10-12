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
      const credit = [...document.querySelectorAll("footer p")]
        .find((p) => p.textContent?.includes("Bruno Correia"))!
        .getBoundingClientRect();
      const button = document
        .querySelector(".whatsapp-float")!
        .getBoundingClientRect();
      return (
        credit.left < button.right &&
        credit.right > button.left &&
        credit.top < button.bottom &&
        credit.bottom > button.top
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
    if (pt === "orgaos-sociais")
      await expect(page.locator("main dd")).toHaveCount(9);
    if (pt === "equipa")
      await expect(page.locator("main article")).toHaveCount(10);
    await page.getByRole("link", { name: "EN", exact: true }).click();
    await expect(page).toHaveURL(new RegExp(`/en/${en}/$`));
    await expect(page.locator("html")).toHaveAttribute("lang", "en");
  }
});
