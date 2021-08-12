module.exports = {
  pathPrefix: '',
  siteUrl: 'https://hyejineee.github.io',
  siteTitle: 'hello, hyejineee!',
  siteDescription: '',
  author: 'hyejineee',
  postsForArchivePage: 3,
  defaultLanguage: 'ko',
  disqusScript: process.env.DISQUS_SCRIPT || 'https://hyejineee-github-io.disqus.com/embed.js',
  pages: {
    home: '/',
    blog: 'blog',
    contact: 'contact',
    resume: 'resume',
    tag: 'tags',
    project: 'projects',
  },
  social: {
    github: 'https://github.com/hyejineee',
    facebook: 'https://www.facebook.com/hyejin.hyun.562',
    instagram: 'https://www.instagram.com/active_hyejineee/',
    rss: '/rss.xml',
  },
  contactFormUrl: process.env.CONTACT_FORM_ENDPOINT || 'https://getform.io/f/f0bd4451-25da-4354-ae36-363df3273afa',
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || '',
  tags: {
    Android: {
      name: 'Android',
      description: '안드로이드에 대해 공부한 내용을 정리합니다.',
      color: '#4E4E4E',
    },
    TIL: {
      name: 'TIL',
      description: '하루하루 공부한 내용들을 정리합니다.',
      color: '#4E4E4E',
    },
    Kotlin: {
      name: 'Kotlin',
      description: 'Kotlin에 대해 공부한 내용을 정리합니다.',
      color: '#4E4E4E',
    },
    DSAndAlgorithm: {
      name: 'DSAndAlgorithm',
      description: '자료구조와 알고리즘에 대해 공부한 내용을 정리합니다.',
      color: '#4E4E4E',
    },
    Reading: {
      name: 'Reading',
      description: '독서한 내용을 정리합니다.',
      color: '#4E4E4E',
    },

    OO: {
      name: 'OO',
      description: '객체 지향 프로그래밍에 대해서 학습한 내용을 정리합니다.',
      color: '#4E4E4E',
    },

    DDD: {
      name: 'DDD',
      description: '도메인 주도 설계에 대해서 학습한 내용을 정리합니다.',
      color: '#4E4E4E',
    },

    Git: {
      name: 'Git',
      description: 'git에 대해서 학습한 내용을 정리합니다.',
      color: '#4E4E4E',
    },

    TDD: {
      name: 'TDD',
      description: 'TDD에 대해서 학습한 내용을 정리합니다.',
      color: '#4E4E4E',
    },

  },
};
