import { chromium } from "@playwright/test";
import sharp from "sharp";
import { mkdir, copyFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

await mkdir("public/media/gallery", { recursive: true });
await mkdir("public/media/videos", { recursive: true });
const photos = [
  ["andre-figuerense-tratamento.jpeg", "atendimento"],
  ["andre-figuerense5.jpeg", "figueirense"],
  ["andre-fisioesporte.jpeg", "esporte"],
];
for (const [file, name] of photos)
  await sharp(resolve("assets", file))
    .resize({ width: 1000, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(`public/media/gallery/${name}.webp`);
const videos = [
  ["video1.mp4", "futebol"],
  ["video2.mp4", "domiciliar"],
  ["video4.mp4", "campo"],
  ["video5.mp4", "acompanhamento"],
  ["video6.mp4", "grupo"],
  [process.env.FEATURED_VIDEO || "LazaroSantos.mp4", "cuidado-individualizado"],
];
const browser = await chromium.launch({ channel: "chrome", headless: true });
try {
  const page = await browser.newPage({
    viewport: { width: 600, height: 1000 },
  });
  for (const [file, name] of videos) {
    const source = resolve("assets", file);
    await page.goto(pathToFileURL(source).href);
    const video = page.locator("video");
    await video.evaluate(async (element) => {
      element.muted = true;
      element.pause();
      element.controls = false;
      if (element.readyState < 1)
        await new Promise((resolve) =>
          element.addEventListener("loadedmetadata", resolve, { once: true }),
        );
      const seek = new Promise((resolve) =>
        element.addEventListener("seeked", resolve, { once: true }),
      );
      element.currentTime = Math.min(2, element.duration / 2);
      await seek;
    });
    const poster = await video.screenshot();
    await sharp(poster)
      .resize({ width: 478 })
      .webp({ quality: 80 })
      .toFile(`public/media/gallery/${name}.webp`);
    await copyFile(source, `public/media/videos/${name}.mp4`);
    console.log(`Preparado: ${name}`);
  }
} finally {
  await browser.close();
}
