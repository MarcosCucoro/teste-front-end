# Teste Front-end — Econverse

Projeto de e-commerce desenvolvido com **React**, **TypeScript**, **Vite** e **SCSS**.

## Pré-requisitos

- [Node.js](https://nodejs.org/) v18 ou superior
- npm v9 ou superior (já incluso no Node.js)

---

## Instalação

Clone o repositório e instale as dependências:

```bash
git clone <url-do-repositorio>
cd teste-front-end
npm install
```

---

## Rodando em desenvolvimento

Inicia o servidor local:

```bash
npm run dev
```

Acesse em: [http://localhost:5173](http://localhost:5173)

---

## Build para produção

Compila o TypeScript e gera os arquivos otimizados na pasta `dist/`:

```bash
npm run build
```

---

## Pré-visualização do build

Serve o conteúdo da pasta `dist/` localmente para validar o build antes de publicar:

```bash
npm run preview
```

Acesse em: [http://localhost:4173](http://localhost:4173)

---

## Lint

Verifica o código com ESLint:

```bash
npm run lint
```

---

## Estrutura do projeto

```
src/
├── assets/          # Imagens e recursos estáticos
├── components/      # Componentes reutilizáveis
├── environments/    # Variáveis de ambiente
├── pages/           # Páginas da aplicação
├── services/        # Chamadas à API
├── styles/          # Variáveis, mixins e estilos globais SCSS
└── types/           # Tipos TypeScript
```

---

## Tecnologias

| Tecnologia | Versão |
|---|---|
| React | 19 |
| TypeScript | 6 |
| Vite | 8 |
| SCSS (Sass) | 1.99 |
| Lucide React | 1.11 |
