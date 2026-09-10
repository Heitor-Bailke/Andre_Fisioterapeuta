import lighthouse from "lighthouse";
import { chromium } from "@playwright/test";
import { mkdir, writeFile } from "node:fs/promises";
const browser = await chromium.launch({
  channel: "chrome",
  headless: true,
  args: ["--remote-debugging-port=9222"],
});
try {
  const result = await lighthouse("http://127.0.0.1:4173/", {
    port: 9222,
    output: ["json", "html"],
    logLevel: "error",
    onlyCategories: ["performance", "accessibility", "best-practices", "seo"],
  });
  await mkdir(".runtime/reports", { recursive: true });
  await writeFile(".runtime/reports/lighthouse-mobile.json", result.report[0]);
  await writeFile(".runtime/reports/lighthouse-mobile.html", result.report[1]);
  console.log(
    JSON.stringify(
      Object.fromEntries(
        Object.entries(result.lhr.categories).map(([key, value]) => [
          key,
          Math.round(value.score * 100),
        ]),
      ),
      null,
      2,
    ),
  );
  console.log(
    "CLS:",
    result.lhr.audits["cumulative-layout-shift"].displayValue,
  );
} finally {
  await browser.close();
}
