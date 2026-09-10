import http from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { gzipSync } from "node:zlib";
const root = path.resolve("dist/andre/browser");
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".webp": "image/webp",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".woff2": "font/woff2",
  ".txt": "text/plain",
  ".xml": "application/xml",
};
http
  .createServer(async (req, res) => {
    try {
      const pathname = decodeURIComponent(
        new URL(req.url, "http://localhost").pathname,
      );
      let file = path.resolve(root, `.${pathname}`);
      if (file !== root && !file.startsWith(root + path.sep)) {
        res.writeHead(403).end();
        return;
      }
      if ((await stat(file)).isDirectory())
        file = path.join(file, "index.html");
      let data = await readFile(file);
      const extension = path.extname(file);
      const compress =
        /\b gzip\b|^gzip\b/.test(req.headers["accept-encoding"] || "") &&
        [".html", ".css", ".js", ".xml", ".txt"].includes(extension);
      if (compress) data = gzipSync(data);
      res.writeHead(200, {
        "Content-Type": types[extension] || "application/octet-stream",
        Vary: "Accept-Encoding",
        "Cache-Control":
          extension === ".html" ? "no-cache" : "public, max-age=31536000",
        ...(compress ? { "Content-Encoding": "gzip" } : {}),
      });
      res.end(data);
    } catch {
      res.writeHead(404).end("Not found");
    }
  })
  .listen(4173, "127.0.0.1", () =>
    console.log("Prévia: http://127.0.0.1:4173"),
  );
