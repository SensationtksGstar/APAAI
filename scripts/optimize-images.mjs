import { createHash } from "node:crypto";
import { mkdir, readFile, readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = fileURLToPath(new URL("../", import.meta.url));
const publicRoot = path.join(root, "public");
const manifestPath = path.join(root, "data/image-manifest.json");
const widths = [48, 64, 96, 128, 192, 256, 360, 480, 640, 800, 1024, 1280, 1600];
const quality = 80;
let previous = {};
try {
  previous = JSON.parse(await readFile(manifestPath, "utf8"));
} catch (error) {
  if (error.code !== "ENOENT") throw error;
}

async function imageFiles(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (entry.name === "optimized") continue;
    const full = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await imageFiles(full)));
    else if (entry.isFile() && /\.(jpe?g|png|webp|avif)$/i.test(entry.name))
      files.push(full);
  }
  return files.sort();
}

const manifest = {};
for (const filename of await imageFiles(publicRoot)) {
  const original =
    "/" + path.relative(publicRoot, filename).split(path.sep).join("/");
  const input = await readFile(filename);
  const isPhoto = original.startsWith("/media/project/");
  const version = createHash("sha256")
    .update(input)
    .update(
      JSON.stringify({
        widths,
        quality,
        max: isPhoto ? 1600 : 640,
        format: "webp-v1",
      }),
    )
    .digest("hex")
    .slice(0, 12);
  const cached = previous[original];
  if (cached?.version === version && cached.variants.length) {
    const available = await Promise.all(
      cached.variants.map(async (variant) => {
        try {
          return (await stat(path.join(publicRoot, variant.src))).size === variant.bytes;
        } catch (error) {
          if (error.code === "ENOENT") return false;
          throw error;
        }
      }),
    );
    if (available.every(Boolean)) {
      manifest[original] = cached;
      continue;
    }
  }

  const metadata = await sharp(input).metadata();
  const swapped = metadata.orientation >= 5;
  const width = swapped ? metadata.height : metadata.width;
  const height = swapped ? metadata.width : metadata.height;
  if (!width || !height) throw new Error(`Missing image dimensions: ${original}`);
  const max = Math.min(width, isPhoto ? 1600 : 640);
  const candidates = widths.filter(
    (value) => value <= max && (!isPhoto || value >= 360),
  );
  if (!candidates.includes(max)) candidates.push(max);
  const directory = path.join(path.dirname(filename), "optimized");
  await mkdir(directory, { recursive: true });
  const stem = path.basename(filename).replace(/\./g, "-");
  const variants = [];
  for (const targetWidth of candidates) {
    const output = path.join(directory, `${stem}-w${targetWidth}.webp`);
    const info = await sharp(input)
      .rotate()
      .resize({ width: targetWidth, withoutEnlargement: true })
      .webp({ quality, effort: 4, smartSubsample: true })
      .toFile(output);
    variants.push({
      src: "/" + path.relative(publicRoot, output).split(path.sep).join("/"),
      width: info.width,
      height: info.height,
      bytes: info.size,
    });
  }
  manifest[original] = { width, height, originalBytes: input.length, version, variants };
}

await writeFile(manifestPath, JSON.stringify(manifest, null, 2) + "\n");
const entries = Object.values(manifest);
console.log(
  `Images: ${entries.length} originals, ${entries.reduce((sum, image) => sum + image.variants.length, 0)} responsive WebP variants.`,
);
for (const key of ["/media/project/apaai-hero-cover.jpg", "/logo-apaai.jpeg"]) {
  const image = manifest[key];
  const variant = image?.variants.find(
    (item) => item.width === (key.includes("hero") ? 800 : 96),
  );
  if (variant) {
    console.log(
      `${key}: ${Math.round(image.originalBytes / 1024)} KB original -> ${Math.round(variant.bytes / 1024)} KB at ${variant.width}px.`,
    );
  }
}
