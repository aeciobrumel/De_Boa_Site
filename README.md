# Dboa — Cartões de Enfrentamento (Landing Page)

Landing Page estática para divulgar o aplicativo “Cartões de Enfrentamento (Dboa)”.

## Visão Geral
- Foco em clareza e acesso rápido ao CTA “Baixar para Android”.
- Vídeo do YouTube com privacy-enhanced (`youtube-nocookie.com`), acessível e responsivo.
- Seção de recursos curtos (respiração guiada, 5-4-3-2-1, afirmações, narração+música, vibração, modo offline, acessibilidade).
- Acessibilidade, SEO e performance revisados (Lighthouse alvo ≥ 90).

## Stack
- HTML + CSS + JavaScript (site estático). Sem build step.
- CSS com tokens de tema (modo escuro por padrão, alto contraste).
- Fonte: Inter (Google Fonts). OBS: Lemondrop possui licença comercial pendente (TODO em código; não embutir).

## Estrutura
- `index.html` — página principal com Header, Hero, Vídeo, Recursos e CTA final.
- `style/style.css` — estilos + tokens (`--color-*`) e regras de acessibilidade.
- `js/script.js` — comportamento do menu e suporte a foco/skip-link.
- `js/i18n.js` — centralização de strings (PT-BR padrão), preparado para futura ES.
- `img/` e `style/img/` — imagens e ícones.

## Rodando Localmente
Opção 1 (abrir direto):
- Abra `index.html` no navegador.

Opção 2 (servidor estático recomendado):
- Python: `python3 -m http.server 8080`
- Node: `npx http-server -p 8080`

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

### i18n (opcional)
- PT-BR é padrão em `js/i18n.js` via `window.APP_STRINGS`.
- As strings no HTML usam `data-i18n`. Para ES, adicione um bloco `es` em `js/i18n.js` e um seletor de idioma.

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
- Android: `{{ANDROID_URL}}` — atualmente usando Play Store real `https://play.google.com/store/apps/details?id=com.dboa.dboa`.
- YouTube: `{{VIDEO_ID}}` — atualmente usando `iBRxq5Pqt_k`. Substitua no `iframe` em `index.html` se necessário.

## Checklist de validação
- Teclado: Tab → “Pular para o conteúdo” → Enter → foco no “Baixar para Android” do Hero.
- Vídeo `youtube-nocookie`, responsivo 16:9, `title` correto e link “Assistir no YouTube”.
- Contraste AA/AAA; alvos 44×44; foco visível.
- Strings centralizadas e prontas para i18n.
- Lighthouse ≥ 90 (Performance, A11y, SEO, Best Practices).
