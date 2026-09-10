# André Nunes Ladislau — Fisioterapia e Pilates

Landing page em Angular, TypeScript e CSS, com páginas pré-renderizadas em HTML estático. Sem backend, cadastro ou banco de dados.

## Executar

Requer Node.js 24.15 ou superior compatível com Angular 22.

```sh
npm ci
npm start
```

Abra http://localhost:4200. Para gerar a versão de produção:

```sh
npm run build
```

O site pronto para hospedagem fica em **dist/andre/browser**. A página inicial e `/privacidade/` são pré-renderizadas, inclusive para visitantes sem JavaScript.

## Configuração e conteúdo

- `src/app/core/site.config.ts`: nome, CREFITO, `whatsappNumber`, mensagens de contato, domínio e campos opcionais de formação. O WhatsApp informado foi configurado como `5527997854696`.
- `src/app/core/content.ts`: serviços, faixas etárias, etapas, benefícios, FAQ e depoimentos tipados.
- `src/app/pages/home/home.html`: textos de apresentação e seções principais.
- `src/styles.css`: cores, tipografia, componentes compartilhados e regras de acessibilidade.
- `src/app/pages/home/home.css`: composição e responsividade das seções.
- `assets/`: arquivos originais fornecidos, preservados.
- `public/media/`: versões otimizadas das fotos e marca. Para regerar: `npm run prepare:assets`.

As fontes são locais. Os vídeos originais não são carregados pela página. A seção Pilates usa uma ilustração vetorial, pois não foi identificada uma foto específica de Pilates entre as imagens examinadas. Os depoimentos estão vazios, com um espaço reservado claramente identificado. Não há títulos, cidades, resultados ou avaliações inventados.

## Domínio e publicação

**Hospedagem escolhida: GitHub Pages, sem domínio próprio.** O workflow em `.github/workflows/pages.yml` obtém automaticamente o endereço do site pelo GitHub e configura os caminhos das imagens, fontes e páginas. Também gera canonical, Open Graph com URLs absolutas, `robots.txt`, `sitemap.xml` e dados estruturados Schema.org. Não é necessário preencher `siteUrl` para essa publicação.

### Publicar no GitHub Pages

Repositório: https://github.com/Heitor-Bailke/Andre_Fisioterapeuta

Endereço previsto para o site: https://heitor-bailke.github.io/Andre_Fisioterapeuta/

Sitemap: https://heitor-bailke.github.io/Andre_Fisioterapeuta/sitemap.xml

1. Crie um repositório no GitHub e envie os arquivos deste projeto para a branch `main`, incluindo a pasta `.github`. A pasta `node_modules` e o build `dist` não precisam ser enviados.
2. No repositório, abra **Settings → Pages → Build and deployment → Source** e selecione **GitHub Actions**.
3. Na aba **Actions**, abra **Publicar no GitHub Pages** e clique em **Run workflow**. Os próximos envios à branch `main` publicarão as alterações automaticamente.
4. Ao concluir, o endereço aparecerá em **Settings → Pages** e no resultado do deploy. Normalmente será `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`; esses nomes são exemplos para substituição, não dados configurados no site.

O sitemap estará nesse endereço seguido de `sitemap.xml`. A página `/privacidade/` também é gerada como arquivo estático, permitindo acesso direto e atualização do navegador. Se a branch principal tiver outro nome, ajuste `branches` no workflow.

Em sites de projeto publicados em uma subpasta, o `robots.txt` dessa subpasta não controla os rastreadores do domínio inteiro; o sitemap continua disponível pelo endereço completo.

Referência: [configurar a publicação pelo GitHub Actions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

### Outras hospedagens

Preencha `siteUrl` no arquivo de configuração ou a variável de ambiente `SITE_URL`, com HTTPS e sem barra final. Execute o build novamente. No build local sem endereço configurado, o sitemap mantém um comentário de configuração pendente.

- **Vercel:** configuração incluída em `vercel.json`; cadastrar `SITE_URL`.
- **Netlify:** configuração incluída em `netlify.toml`; cadastrar `SITE_URL`.
- **Hostinger:** enviar o conteúdo de `dist/andre/browser` para a pasta pública do domínio.

Não é necessário servidor Node em produção. Para novos caminhos, adicionar rotas ao Angular Router e verificar a pré-renderização no build.

## Verificações

```sh
npm run build
npm run test:e2e
```

Os testes usam Playwright com Chrome instalado, verificam desktop e celular, ausência de rolagem horizontal, menu, FAQ, links, imagens, dados de contato, navegação à privacidade e acessibilidade com axe. O servidor de arquivos de teste atende somente `dist/andre/browser`.

Validação realizada: **6 testes aprovados**, em telas de 320 a 1920 px. Na medição local com Lighthouse mobile: **91 em performance e 100 em acessibilidade, boas práticas e SEO**. Essas pontuações são de laboratório; a hospedagem e a conexão influenciam os resultados publicados. O servidor de prévia usa compressão gzip e cache de arquivos estáticos, como uma hospedagem configurada para produção.

Para abrir a versão compilada, execute `node scripts/serve.mjs` e acesse http://127.0.0.1:4173. Com essa prévia em execução, `node scripts/audit.mjs` gera relatórios Lighthouse em `.runtime/reports/`.

Antes de publicar, revisar os conteúdos profissionais e a política de privacidade conforme o uso real do atendimento. O endereço do GitHub Pages será preenchido automaticamente durante a publicação.
