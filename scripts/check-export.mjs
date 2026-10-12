import assert from "node:assert/strict";
import path from "node:path";
import { readdir, readFile, stat } from "node:fs/promises";

const root = path.resolve("out");
async function htmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (entry.name === "_next") continue;
    const full = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await htmlFiles(full)));
    else if (entry.name.endsWith(".html")) files.push(full);
  }
  return files;
}
const pages = await htmlFiles(root);
let checked = 0;
for (const file of pages) {
  const html = await readFile(file, "utf8");
  const route =
    "/APAAI/" +
    path
      .relative(root, file)
      .split(path.sep)
      .join("/")
      .replace(/index\.html$/, "");
  for (const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    const href = match[1].replace(/&amp;/g, "&");
    if (/^(?:mailto:|tel:|data:|https?:)/.test(href)) continue;
    const url = new URL(href, "http://localhost" + route);
    assert(
      url.pathname === "/APAAI" || url.pathname.startsWith("/APAAI/"),
      `Wrong base path: ${href} in ${route}`,
    );
    let target = path.join(root, decodeURIComponent(url.pathname.slice(6)));
    if ((await stat(target)).isDirectory())
      target = path.join(target, "index.html");
    const source = await readFile(target);
    if (url.hash && target.endsWith(".html")) {
      const id = decodeURIComponent(url.hash.slice(1));
      assert(
        source.toString().includes(`id="${id}"`),
        `Missing anchor ${href} in ${route}`,
      );
    }
    checked++;
  }
}
const pt = await readFile(path.join(root, "pt/index.html"), "utf8");
assert(pt.includes("appaigeral@gmail.com"));
assert(pt.includes('name="subject"'));
for (const obsolete of [
  "IPDJ",
  "Comité Olímpico",
  "ANDI",
  "aikidoadaptado@gmail.com",
  "5+ Anos",
  "+50 Participações",
])
  assert(!pt.includes(obsolete), `Obsolete content: ${obsolete}`);
const photos = [...pt.matchAll(/<img\b[^>]*src="([^"]+)"/g)]
  .map((match) => match[1])
  .filter((src) => src.includes("/media/project/"));
assert.equal(new Set(photos).size, photos.length, "Duplicate project photos");
for (const locale of ["pt", "en"])
  for (const slug of locale === "pt"
    ? [
        "orgaos-sociais",
        "equipa",
        "documentacao-institucional",
        "programa-tecnico-pedagogico",
        "noticias",
      ]
    : [
        "governance",
        "team",
        "institutional-documents",
        "technical-pedagogical-programme",
        "news",
      ])
    await stat(path.join(root, locale, slug, "index.html"));
console.log(
  `PASS: ${pages.length} HTML pages, ${checked} internal references, ${photos.length} unique project photos and both languages.`,
);
