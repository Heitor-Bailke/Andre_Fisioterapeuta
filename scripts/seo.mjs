import { readFile, writeFile, readdir } from "node:fs/promises";
import { siteConfig } from "../src/app/core/site.config.ts";
const configuredUrl = process.env.SITE_URL || siteConfig.siteUrl;
let siteUrl = "";
if (configuredUrl) {
  const parsed = new URL(configuredUrl);
  if (parsed.protocol !== "https:")
    throw new Error("SITE_URL deve usar HTTPS.");
  siteUrl = parsed.href.replace(/\/$/, "");
}
const output = "dist/andre/browser";
const fontPreloads = (await readdir(`${output}/media`))
  .filter((file) => /^(dm-sans|cormorant-garamond).*\.woff2$/.test(file))
  .map(
    (file) =>
      `<link rel="preload" href="media/${file}" as="font" type="font/woff2" crossorigin>`,
  )
  .join("");
const escapeXml = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: "Fisioterapeuta",
  identifier: {
    "@type": "PropertyValue",
    propertyID: "CREFITO",
    value: siteConfig.registration,
  },
  telephone: `+${siteConfig.whatsappNumber}`,
  knowsAbout: ["Fisioterapia", "Pilates"],
  ...(siteUrl
    ? { url: `${siteUrl}/`, image: `${siteUrl}/media/andre-hero.webp` }
    : {}),
};
for (const route of ["", "privacidade/"]) {
  const file = `${output}/${route}index.html`;
  let html = await readFile(file, "utf8");
  html = html.replace(/(<base[^>]*>)/, `$1${fontPreloads}`);
  const metadata = [];
  if (route) {
    html = html.replace(
      /<title>.*?<\/title>/,
      "<title>Política de Privacidade | André Nunes Ladislau</title>",
    );
  } else {
    metadata.push(
      `<script type="application/ld+json">${JSON.stringify(person).replaceAll("<", "\\u003c")}</script>`,
    );
  }
  if (siteUrl) {
    const canonical = escapeXml(`${siteUrl}/${route}`);
    metadata.push(
      `<link rel="canonical" href="${canonical}"><meta property="og:url" content="${canonical}">`,
    );
    html = html.replace(
      'content="media/andre-social.jpg"',
      `content="${escapeXml(siteUrl)}/media/andre-social.jpg"`,
    );
  }
  html = html.replace("</head>", `${metadata.join("")}\n</head>`);
  await writeFile(file, html);
}
await writeFile(
  `${output}/robots.txt`,
  `User-agent: *\nAllow: /\n${siteUrl ? `Sitemap: ${siteUrl}/sitemap.xml\n` : "# PENDENTE: configurar SITE_URL para informar o sitemap.\n"}`,
);
await writeFile(
  `${output}/sitemap.xml`,
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${siteUrl ? ["", "privacidade/"].map((route) => `\n  <url><loc>${escapeXml(`${siteUrl}/${route}`)}</loc></url>`).join("") : "\n  <!-- PENDENTE: configurar SITE_URL e executar npm run build. -->"}\n</urlset>\n`,
);
console.log(
  siteUrl
    ? `SEO configurado para ${siteUrl}.`
    : "Domínio ainda não informado: canonical, og:url e URLs do sitemap serão gerados ao configurar SITE_URL.",
);
