// Strings centralizados (PT-BR por padrão). i18n opcional.
// Para futura tradução, adicione 'es' neste objeto e um seletor de idioma.
(function () {
  const STRINGS = {
    'pt-BR': {
      'app.title': 'Cartões de Enfrentamento',
      'app.subtitle': 'Ajuda prática e acolhedora para momentos de ansiedade.',
      'cta.primary': 'Baixar para Android',
      'cta.secondary': 'Saiba mais',
      'video.title': 'Demonstração do aplicativo Cartões de Enfrentamento',
      'video.altLink': 'Assistir no YouTube',
      'resources.title': 'Recursos do app',
      'cta.final.title': 'Pronto para respirar melhor?',
      'cta.final.body': 'Baixe e tenha suporte prático sempre à mão.',
      'privacy.note': 'Este app não substitui acompanhamento médico/psicológico. Use de forma responsável.'
    }
    // 'es': { ... } // Exemplo para futura tradução
  };

  // Expor dicionário padrão
  window.APP_STRINGS = STRINGS['pt-BR'];
})();

