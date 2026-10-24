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

## Assets

As logos fornecidas foram preservadas em `public/images/`. As fotos ilustrativas foram baixadas da [Unsplash](https://unsplash.com/license), sob a licença Unsplash, e seus nomes/URLs de origem estão registrados no histórico do terminal de implementação. Antes de produção, substitua todos os projetos demonstrativos e imagens ilustrativas por fotos licenciadas da Tavares, com créditos e permissões verificados.

## Publicação na Vercel

Importe o repositório na Vercel. O preset Vite detecta automaticamente `npm run build` e publica a pasta `dist`. Configure o SPA fallback no provedor, se necessário, para que as rotas internas carreguem diretamente.
