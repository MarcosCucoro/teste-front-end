# Teste Econverse - Desenvolvedor Front-End

## Tecnologias

- React 18
- TypeScript
- Vite
- Sass (CSS Modules)

## Como rodar o projeto

### Pré-requisitos

- Node.js >= 18
- npm ou yarn

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:5173](http://localhost:5173) no navegador.

### Build para produção

```bash
npm run build
```

### Preview do build

```bash
npm run preview
```

## Estrutura do projeto

```
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── src/
    ├── assets/
    ├── components/
    │   ├── Header/          # Cabeçalho da aplicação
    │   ├── ProductCard/     # Card individual de produto
    │   ├── ProductModal/    # Modal de detalhes do produto
    │   └── ProductShelf/    # Vitrine com grid de produtos
    ├── hooks/
    │   └── useProducts.ts   # Hook para consumo da API
    ├── styles/
    │   ├── _reset.scss
    │   ├── _variables.scss
    │   └── global.scss
    ├── types/
    │   └── product.ts       # Tipagens TypeScript
    ├── App.tsx
    ├── App.module.scss
    ├── main.tsx
    └── vite-env.d.ts
```

## Funcionalidades

- Vitrine de produtos consumindo API REST da Econverse
- Modal de detalhes ao clicar em um produto
- Layout responsivo (desktop, tablet e mobile)
- SEO semântico com HTML5 (`<header>`, `<main>`, `<section>`, `<article>`)
- Acessibilidade: `role="dialog"`, `aria-modal`, `aria-label`, tecla Escape para fechar modal
