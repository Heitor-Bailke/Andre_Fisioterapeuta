import { test, expect } from "@playwright/test";

test("âncoras preservam o espaço abaixo do cabeçalho", async ({
  page,
}, testInfo) => {
  await page.goto("/");
  await page.evaluate(() => document.fonts.ready);
  const menu = page.getByRole("navigation", { name: "Navegação principal" });
  const items = [
    ["Sobre", "sobre"],
    ["Serviços", "servicos"],
    ["Galeria", "galeria"],
    ["Atendimento", "atendimento"],
    ["Pilates", "pilates"],
    ["FAQ", "faq"],
    ["Contato", "contato"],
    ["Início", "inicio"],
  ];
  const clickMenu = async (label: string) => {
    if (testInfo.project.name === "mobile")
      await page.getByRole("button", { name: "Abrir menu" }).click();
    await menu.getByRole("link", { name: label, exact: true }).click();
  };
  const expectAligned = async (id: string) => {
    await expect
      .poll(
        () =>
          page.evaluate((sectionId) => {
            const section = document.getElementById(sectionId)!;
            const header = document.querySelector("header.site-header")!;
            const top = section.getBoundingClientRect().top;
            const remainingPageHeight =
              document.documentElement.scrollHeight - (top + scrollY);
            // Near the footer, the browser stops at the end of the document.
            const expectedTop = Math.max(
              header.getBoundingClientRect().bottom,
              innerHeight - remainingPageHeight,
            );
            return Math.abs(top - expectedTop);
          }, id),
        { timeout: 5000 },
      )
      .toBeLessThan(3);
  };
  for (const [label, id] of items) {
    await clickMenu(label);
    await expectAligned(id);
  }
  await expect.poll(() => page.evaluate(() => scrollY)).toBeLessThan(2);
  // The URL still has #inicio when the visitor scrolls away and clicks it again.
  await page.evaluate(() => scrollTo({ top: 1800, behavior: "instant" }));
  await clickMenu("Início");
  await expect.poll(() => page.evaluate(() => scrollY)).toBeLessThan(2);

  await page
    .getByRole("link", { name: "Conhecer os serviços", exact: true })
    .click();
  await expectAligned("servicos");
  await page
    .getByRole("link", { name: "Política de Privacidade", exact: true })
    .click();
  await clickMenu("Sobre");
  await expectAligned("sobre");
  await page.reload();
  await page.evaluate(() => document.fonts.ready);
  await expectAligned("sobre");
});
