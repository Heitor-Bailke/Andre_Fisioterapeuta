import sharp from "sharp";
import { mkdir } from "node:fs/promises";
await mkdir("public/media", { recursive: true });
await Promise.all([
  sharp("assets/Dr.andrefisio.jpg")
    .resize(720, 900)
    .webp({ quality: 84 })
    .toFile("public/media/andre-hero.webp"),
  sharp("assets/andre-figuerense-tratamento.jpeg")
    .resize(591, 760, { fit: "cover", position: "centre" })
    .webp({ quality: 82 })
    .toFile("public/media/andre-atendimento.webp"),
  sharp("assets/andre-logo.jpeg")
    .resize(144, 144)
    .webp({ quality: 90 })
    .toFile("public/media/andre-logo.webp"),
  sharp("assets/andre-logo.jpeg")
    .resize(64, 64)
    .png()
    .toFile("public/favicon.png"),
  sharp("assets/Dr.andrefisio.jpg")
    .resize(1200, 630, { fit: "contain", background: "#3e5969" })
    .jpeg({ quality: 85 })
    .toFile("public/media/andre-social.jpg"),
]);
console.log(
  "Fotos otimizadas em public/media. Os arquivos originais foram preservados.",
);
