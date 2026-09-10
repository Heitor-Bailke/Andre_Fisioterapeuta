import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("conteúdo, imagens, links de contato e acessibilidade", async ({
  page,
}, testInfo) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    /Movimento, cuidado/,
  );
  await page.waitForFunction(() => document.fonts.status === "loaded");
  const contactLinks = await page
    .locator('a[href^="https://wa.me/"]')
    .evaluateAll((links) =>
      links.map((link) => (link as HTMLAnchorElement).href),
    );
  expect(contactLinks.length).toBeGreaterThan(10);
  for (const href of contactLinks) {
    const url = new URL(href);
    expect(url.pathname).toBe("/5527997854696");
    expect(url.searchParams.get("text")).toMatch(/^Olá, André!/);
  }
  const pilatesUrl = await page
    .locator('#pilates a[href^="https://wa.me/"]')
    .getAttribute("href");
  expect(new URL(pilatesUrl!).searchParams.get("text")).toContain("Pilates");
  const brokenAnchors = await page
    .locator('a[href^="#"]')
    .evaluateAll((links) =>
      links
        .map((a) => a.getAttribute("href")!)
        .filter((href) => !document.getElementById(href.slice(1))),
    );
  expect(brokenAnchors).toEqual([]);
  for (const width of testInfo.project.name === "mobile"
    ? [320, 375, 390, 540, 768]
    : [1024, 1280, 1440, 1920]) {
    await page.setViewportSize({ width, height: 1000 });
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
      `overflow em ${width}px`,
    ).toBe(true);
  }
  await page.setViewportSize(
    testInfo.project.name === "mobile"
      ? { width: 390, height: 844 }
      : { width: 1440, height: 1000 },
  );
  for (const img of await page.locator("img").all()) {
    await img.scrollIntoViewIfNeeded();
    await expect
      .poll(() =>
        img.evaluate(
          (el: HTMLImageElement) => el.complete && el.naturalWidth > 0,
        ),
      )
      .toBe(true);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);
  const audit = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  expect(
    audit.violations.map((v) => ({
      id: v.id,
      nodes: v.nodes.map((n) => n.target),
    })),
  ).toEqual([]);
  expect(errors).toEqual([]);
  await page.screenshot({
    path: `test-results/${testInfo.project.name}-home.png`,
    fullPage: true,
  });
});

test("FAQ, navegação e menu responsivo", async ({ page }, testInfo) => {
  await page.goto("/");
  if (testInfo.project.name === "mobile") {
    const toggle = page.locator('button[aria-controls="main-navigation"]');
    await toggle.click();
    await expect(toggle).toHaveAttribute("aria-expanded", "true");
    await page
      .getByRole("navigation", { name: "Navegação principal" })
      .getByRole("link", { name: "Serviços", exact: true })
      .click();
    await expect(toggle).toHaveAttribute("aria-expanded", "false");
    await expect(page).toHaveURL(/#servicos$/);
    await toggle.click();
    await page.keyboard.press("Escape");
    await expect(toggle).toBeFocused();
    await expect(toggle).toHaveAttribute("aria-expanded", "false");
  }
  const first = page.locator("#faq details").first();
  await first.locator("summary").click();
  await expect(first).toHaveAttribute("open", "");
  await expect(first.locator("p")).toBeVisible();
  const second = page.locator("#faq details").nth(1);
  await second.locator("summary").click();
  await expect(second).toHaveAttribute("open", "");
  await expect(first).not.toHaveAttribute("open", "");
  await page
    .getByRole("link", { name: "Política de Privacidade", exact: true })
    .click();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Política de Privacidade",
  );
  await page.reload();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Política de Privacidade",
  );
  await page.getByRole("link", { name: "Voltar para o início" }).click();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    /Movimento, cuidado/,
  );
});

test("HTML estático inclui conteúdo e dados estruturados sem JavaScript", async ({
  browser,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:4173/");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    /Movimento, cuidado/,
  );
  const schema = JSON.parse(
    (await page.locator('script[type="application/ld+json"]').textContent()) ||
      "{}",
  );
  expect(schema.name).toBe("André Nunes Ladislau");
  expect(schema.identifier.value).toBe("421269-F");
  await page.locator("#faq summary").first().click();
  await expect(page.locator("#faq details").first()).toHaveAttribute(
    "open",
    "",
  );
  await context.close();
});
