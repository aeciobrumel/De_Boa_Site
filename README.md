# Dboa — Cartões de Enfrentamento (Landing Page)

Landing Page do app “Cartões de Enfrentamento (Dboa)”. O repositório agora contém:
- Site original estático em HTML/CSS (raiz) — preservado.
- Nova implementação em React + TypeScript + Tailwind (pasta `frontend/`).

## Visão Geral
- Foco em clareza e acesso rápido ao CTA “Baixar para Android”.
- Vídeo do YouTube com privacy-enhanced (`youtube-nocookie.com`), acessível e responsivo.
- Seção de recursos curtos (respiração guiada, 5-4-3-2-1, afirmações, narração+música, vibração, modo offline, acessibilidade).
- Acessibilidade, SEO e performance revisados (Lighthouse alvo ≥ 90).

## Stack
- Vite + React + TypeScript + Tailwind CSS em `frontend/`.
- ESLint + Prettier configurados (lint/format scripts).
- Fonte: Inter (Google Fonts).
- OBS: Lemondrop possui licença comercial pendente — NÃO embutir (ver TODOs).

## Estrutura
Site estático (legado):
- `index.html`, `style/style.css`, `js/*.js`, `img/` — versão anterior preservada.

App React (novo) em `frontend/`:
- `index.html` — metadados básicos + fonte Inter + modo escuro padrão.
- `src/main.tsx` e `src/App.tsx` — montagem e layout principal.
- `src/components/` — componentes: `Header`, `Hero`, `VideoSection`, `Highlights`, `Features`, `Privacy`, `CtaDownload`, `Footer`, `SkipToContent`.
- `src/config.ts` — define `ANDROID_URL`, `YOUTUBE_URL` e extrai `YOUTUBE_ID`.
- `tailwind.config.ts`, `postcss.config.js`, `src/index.css` — Tailwind configurado.
- `public/` — assets públicos. Copie logo/imagens necessárias para `frontend/public/img`.

## Rodando Localmente (React)
Pré‑requisitos: Node.js 18+ e npm.

Passo a passo rápido:
- Entre na pasta do app: `cd frontend`
- Instale dependências: `npm install`
- Copie os assets essenciais (ou ajuste os caminhos nos componentes):
  - `cp ../img/logo-horizontal-white.png public/img/`
  - `cp ../img/celularApp.png public/img/`
- Inicie em modo dev: `npm run dev` (geralmente em `http://localhost:5173`)

Build e preview de produção:
- `npm run build`
- `npm run preview` (geralmente em `http://localhost:4173`)

Versão estática (legado):
- Abrir `index.html` direto no navegador, ou servir via `python3 -m http.server 8080`.

Configurar links (opcional):
- Edite `frontend/src/config.ts` para trocar:
  - `ANDROID_URL` → URL real da Play Store/APK (// TODO: {{ANDROID_URL}})
  - `YOUTUBE_URL` → URL real do vídeo (// TODO: {{YOUTUBE_URL}} — o `VIDEO_ID` é extraído automaticamente)

Site em produção: domínio via `CNAME` (`dboa.com.br`).

## Desenvolvimento
- Branchs: feature → `feat/…`, correções → `fix/…`.
- Commits: Conventional Commits (ex.: `feat(landing): ...`, `fix(a11y): ...`).

### Padrões e Tema
- Paleta:
  - Primária `#36507D`
  - Secundárias `#A6B3C8`, `#B4B1C6`
  - Acento `#F8DBD8`
- Tokens: ver `:root` em `style/style.css` (modo escuro padrão).
- Alvos mínimos de toque: 44×44 px (ver `.btn`, `.menu-open`, `.menu-close`).

### Conteúdo dinâmico (React)
- `src/config.ts` contém:
  - `ANDROID_URL` — link do Play Store/APK. Padrão: `https://play.google.com/store/apps/details?id=com.dboa.dboa`. TODO: substitua por {{ANDROID_URL}} real.
  - `YOUTUBE_URL` — URL do vídeo. Padrão: `https://www.youtube.com/watch?v=iBRxq5Pqt_k`. TODO: substitua por {{YOUTUBE_URL}} real.
  - `YOUTUBE_ID` — extraído automaticamente de `YOUTUBE_URL`.

### SEO/Performance/A11y
- SEO: `title`, `description`, OG/Twitter, `canonical` e `theme-color` presentes em `index.html`.
- Vídeo: `youtube-nocookie.com`, `loading="lazy"`, `title` acessível, `allow` seguro, `referrerPolicy` estrito, link alternativo “Assistir no YouTube”.
- Imagens: `loading="lazy"` para conteúdo abaixo da dobra e textos alternativos descritivos.
- A11y:
  - Skip link: “Pular para o conteúdo”.
  - Foco visível (`:focus-visible`).
  - Navegação overlay com ARIA e botão de fechar.
  - Estrutura semântica de headings.

## Parâmetros de Conteúdo
- Android: `{{ANDROID_URL}}` — ver `frontend/src/config.ts`.
- YouTube: `{{YOUTUBE_URL}}`/`{{VIDEO_ID}}` — ver `frontend/src/config.ts`.

## Checklist de validação
- Tab → “Pular para o conteúdo” → foco no main → Tab → foco no botão “Baixar para Android” (Hero).
- Vídeo `youtube-nocookie`, responsivo 16:9, `title` correto e link “Assistir no YouTube”.
- Contraste AA/AAA; alvos 44×44; foco visível.
- Build `npm run build` e `npm run preview` funcionam em `frontend/`.

## Como contribuir
- Crie uma branch a partir de `main` (ex.: `feat/...` ou `fix/...`).
- Commits seguindo Conventional Commits.
- Abra um PR descrevendo claramente as mudanças e screenshots quando visual.

## Licença
MIT — veja `LICENSE`.
