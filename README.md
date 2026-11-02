# Portfólio — Fabricio Ripardo

Feito com **Next.js (App Router)**, TypeScript, Tailwind CSS v4, GSAP e Framer Motion.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Editar o conteúdo

Tudo fica em **`data/portfolio.ts`**: textos, links, experiências, projetos, stack e formação.
Procure por `TODO` para ver o que ainda falta preencher (usuário do GitHub e domínio final).

### Adicionar imagens a um projeto

1. Salve a imagem em `public/projetos/` (ex.: `public/projetos/landing.png`).
2. No item do projeto, adicione `cover: "/projetos/landing.png"`.
3. Opcional: `gallery: ["/projetos/landing-2.png", "/projetos/landing-3.png"]` mostra mais imagens na página do case.
4. Opcional: `links: [{ label: "Ver site", href: "https://..." }, { label: "Código", href: "https://github.com/..." }]`.

Sem `cover`, o site gera uma capa tipográfica automaticamente.

## Estrutura

```
app/
  layout.tsx              layout global, SEO, loader, cursor, animações
  page.tsx                página inicial
  projeto/[slug]/         página de cada projeto
  trabalho/[slug]/        página de cada experiência
  opengraph-image.tsx     imagem de preview para LinkedIn/WhatsApp
components/
  sections/               Intro, Trabalho/Projetos, Stack, Educação, Contato, CaseDetail
  effects/                PageLoader, ScrollAnimations, CustomCursor
  layout/                 Navigation, Footer
  ui/                     Wrapper, AnimatedWords, CaseCover
data/portfolio.ts         TODO o conteúdo
```

## Deploy

Recomendado: [Vercel](https://vercel.com) — importe o repositório do GitHub e clique em Deploy.
Depois, atualize `site.url` em `data/portfolio.ts` com o domínio final.
