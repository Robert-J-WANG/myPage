import { mkdir, readdir, stat } from "node:fs/promises";
import { basename, extname, join, relative, resolve } from "node:path";
import sharp from "sharp";

const imageGroups = [
  { name: "profile", maxWidth: 960, maxWidths: { avatar: 512 } },
  { name: "projects", maxWidth: 960 },
];
const sourceRoot = resolve("src/assets/source");
const outputRoot = resolve("src/assets");
const sourceExtensions = new Set([".jpg", ".jpeg", ".png", ".webp"]);

async function getImages(directory) {
  try {
    const entries = await readdir(directory, { withFileTypes: true });
    return entries
      .filter((entry) => entry.isFile() && sourceExtensions.has(extname(entry.name).toLowerCase()))
      .map((entry) => join(directory, entry.name));
  } catch (error) {
    if (error.code === "ENOENT") {
      return [];
    }

    throw error;
  }
}

async function isCurrent(inputPath, outputPath) {
  try {
    const [input, output] = await Promise.all([stat(inputPath), stat(outputPath)]);
    return output.mtimeMs >= input.mtimeMs;
  } catch (error) {
    if (error.code === "ENOENT") {
      return false;
    }

    throw error;
  }
}

for (const group of imageGroups) {
  const sourceDirectory = join(sourceRoot, group.name);
  const outputDirectory = join(outputRoot, group.name);
  const images = await getImages(sourceDirectory);

  await mkdir(outputDirectory, { recursive: true });

  for (const inputPath of images) {
    const filename = basename(inputPath, extname(inputPath));
    const outputPath = join(outputDirectory, `${filename}.webp`);

    if (await isCurrent(inputPath, outputPath)) {
      console.log(`${relative(process.cwd(), outputPath)} is current`);
      continue;
    }

    const result = await sharp(inputPath)
      .rotate()
      .resize({ width: group.maxWidths?.[filename] ?? group.maxWidth, withoutEnlargement: true })
      .webp({ quality: 82, effort: 6, chromaSubsampling: "4:4:4" })
      .toFile(outputPath);

    console.log(`${relative(process.cwd(), inputPath)} → ${relative(process.cwd(), outputPath)} (${result.size} bytes)`);
  }
}
