# Tavares Construção — Modelo 02 / Signature Edition

Website demonstrativo em React, Vite, TypeScript, React Router e Motion for React. O conceito une uma grade editorial assimétrica, imagens de arquitetura, serifas de alto contraste e detalhes em bronze.

## Rodar localmente

```bash
npm install
npm run dev
npm run build
```

## Rotas

- `/` — Home com manifesto, projetos, detalhes, processo e CTA
- `/projetos` — Portfólio com filtros
- `/projetos/:slug` — Detalhe demonstrativo de cada projeto
- `/sobre`, `/servicos`, `/contato` — Páginas institucionais

## Motion e acessibilidade

As revelações usam Motion for React e respeitam `prefers-reduced-motion`. O menu móvel, filtros, links, formulário com validação local e rota 404 estão implementados.

## SEO e rotas

`index.html` fornece metadados estáticos de fallback e `src/useRouteMeta.ts` atualiza título, descrição e metadados sociais durante a navegação em cada rota. Como esta é uma SPA Vite, rastreadores que não executam JavaScript verão apenas os metadados padrão; para SEO de produção, a recomendação é pré-renderizar as rotas públicas ou migrar a renderização para SSR.

O arquivo `vercel.json` reescreve URLs para `index.html`, permitindo acesso direto às rotas internas e à página 404 do React Router na Vercel.

## Assets

As logos fornecidas foram preservadas em `public/images/`. As fotos ilustrativas foram baixadas da [Unsplash](https://unsplash.com/license), sob a licença Unsplash. Os nomes e URLs de origem estão versionados em [ASSET_CREDITS.md](./ASSET_CREDITS.md). Antes de produção, substitua todos os projetos demonstrativos e imagens ilustrativas por fotos licenciadas da Tavares, com créditos e permissões verificados.

## Publicação na Vercel

Importe o repositório na Vercel. O preset Vite detecta automaticamente `npm run build` e publica a pasta `dist`. Configure o SPA fallback no provedor, se necessário, para que as rotas internas carreguem diretamente.
