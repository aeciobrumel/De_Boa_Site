// Strings centralizados (PT-BR por padrão). i18n opcional.
// Para futura tradução, adicione 'es' neste objeto e um seletor de idioma.
(function () {
  const STRINGS = {
    'pt-BR': {
      'app.title': 'App para ajudar em crises de ansiedade e pânico',
      'app.subtitle': 'Use respiração guiada, cartões personalizados e áudio para seguir um passo a passo quando pensar demais fica difícil.',
      'cta.primary': 'Baixar app para Android',
      'cta.secondary': 'Ver como funciona',
      'video.title': 'Demonstração do aplicativo Cartões de Enfrentamento',
      'video.altLink': 'Assistir no YouTube',
      'resources.title': 'O essencial para usar na hora da crise',
      'cta.final.title': 'Tenha seu plano de apoio no bolso',
      'cta.final.body': 'Baixe o app para Android e prepare seus cartões com calma antes do próximo momento difícil.',
      'privacy.note': 'Este app não substitui acompanhamento médico/psicológico. Use de forma responsável.'
    }
    // 'es': { ... } // Exemplo para futura tradução
  };

  // Expor dicionário padrão
  window.APP_STRINGS = STRINGS['pt-BR'];
})();
