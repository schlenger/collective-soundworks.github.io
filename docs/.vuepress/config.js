module.exports = {
  title: 'soundworks',
  description: 'Full-stack JavaScript framework for distributed WebAudio and multimedia applications',
  themeConfig: {
    logo: '/logo-200x200.png',
    lastUpdated: 'Last Updated',
    // displayAllHeaders: true,
    nav: [
      { text: 'Getting Started', link: '/getting-started' },
      { text: 'Tutorials', link: '/tutorials/' },
      { text: 'Services', link: '/services' },
      { text: 'Misc', link: '/misc/' },
      { text: 'API', link: 'http://google.com' },
    ],

    sidebar: [
      ['', ' '], // dirty hack to have the "next" arrow on the homepage...
      '/introduction',
      '/getting-started',
      {
        title: 'Tutorials',      // required
        path: '/tutorials/',     // optional, which should be a absolute path.
        collapsable: false,  // optional, defaults to true
        sidebarDepth: 2,    // optional, defaults to 1
        children: [
          // '/tutorials/',
          '/tutorials/state-manager',
        ]
      },
      '/services',
      {
        title: 'Misc',      // required
        path: '/misc/',     // optional, which should be a absolute path.
        collapsable: false,  // optional, defaults to true
        sidebarDepth: 2,    // optional, defaults to 1
        children: [
          '/misc/setting-up-environment',
          '/misc/local-deployment',
          '/misc/contributing-to-this-site',
        ]
      },
    ],
  },
};
