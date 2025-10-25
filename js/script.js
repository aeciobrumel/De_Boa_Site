// Menu toggle + ARIA state
(function () {
  const menuOpen = document.querySelector('.menu-open');
  const menu = document.querySelector('.menu');
  const menuClose = document.querySelector('.menu-close');
  if (menuOpen && menu && menuClose) {
    menuOpen.addEventListener('click', () => {
      menu.classList.add('menu--active');
      menuOpen.setAttribute('aria-expanded', 'true');
    });
    menuClose.addEventListener('click', () => {
      menu.classList.remove('menu--active');
      menuOpen.setAttribute('aria-expanded', 'false');
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        menu.classList.remove('menu--active');
        menuOpen.setAttribute('aria-expanded', 'false');
      }
    });
  }
})();

// Simple string injection for future i18n
(function applyStrings() {
  const dict = (window.APP_STRINGS) || {};
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (!key) return;
    const val = dict[key];
    if (typeof val === 'string') {
      el.textContent = val;
    }
  });
})();

// Ensure skip-link focuses the main content
(function () {
  const skip = document.querySelector('.skip-link');
  const main = document.getElementById('main');
  if (skip && main) {
    skip.addEventListener('click', () => {
      setTimeout(() => main.focus(), 0);
    });
  }
})();
