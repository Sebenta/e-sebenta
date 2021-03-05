const { description } = require('../../package')

module.exports = {

  locales: {
    '/': {
      lang: 'pt-PT',
      title: 'E-Sebenta',
      description: 'Caderno de exercícios e apontamentos de conteúdos Académicos.'
    },
    '/en/': {
      lang: 'en-US',
      title: 'E-Sebenta',
      description: 'Exercise book and notes of academic content.'
    }
  },

  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: true,
    smoothScroll: true, //ver 
    locales: {
      '/': {
        label: 'Portuguese',
        selectText: 'Idiomas',
        ariaLabel: 'Selecione o idioma',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: require('./nav/pt'),
        sidebar: {
          '/power_electronics/': getPowerElectronicSidebar('Eletrônica de Potência', 'Exercícios'),
        }
      }, '/en/': {
        label: 'English',
        selectText: 'Languages',
        ariaLabel: 'Select language',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: require('./nav/en'),
        sidebar: {
          '/en/power_electronics/': getPowerElectronicSidebar('Power electronics', 'Exercises'),
        }
      },

    },
    plugins: [
      '@vuepress/plugin-back-to-top',
      '@vuepress/plugin-medium-zoom',
    ]
  }
}

function getPowerElectronicSidebar(groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        '',
      ]
    },
    {
      title: groupB,
      collapsable: false,
      children: [
        'multiple_choice',
      ]
    }
  ]
}