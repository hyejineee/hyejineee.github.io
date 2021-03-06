module.exports = {
  pathPrefix: '',
  siteUrl: 'https://hyejineee.github.io',
  siteTitle: 'hello, hyejineee!',
  siteDescription: '',
  author: 'hyejineee',
  postsForArchivePage: 3,
  defaultLanguage: 'ko',
  disqusScript: process.env.DISQUS_SCRIPT || 'https://rolwinreevan.disqus.com/embed.js',
  pages: {
    home: '/',
    blog: 'blog',
    contact: 'contact',
    resume: 'resume',
    tag: 'tags',
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
      description: '이게 왜 안돼',
      color: '#f9c646',
    },
  },
};
