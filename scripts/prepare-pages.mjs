import { copyFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const files = [
  "index.html",
  "style.css",
  "app.js",
  "context-menu.js",
  "links-handler.js",
  "sidebar-handler.js",
  "convex/_generated/api.js",
];

const outputDir = resolve("deploy");

for (const file of files) {
  const destination = resolve(outputDir, file);
  await mkdir(dirname(destination), { recursive: true });
  await copyFile(resolve(file), destination);
}

console.log(`Prepared ${files.length} files in ${outputDir}`);
