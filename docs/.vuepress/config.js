module.exports = {
  title: 'Hello Learning',
  description: 'Just a livelone learning',
  base: "/hello-learning/",
  
  
  plugins: ['@vuepress/back-to-top'],

  themeConfig: {
    nav: [
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' }
        ]
      }
    ],
    sidebar: [
      {
        title: 'Data Structures',   // 必要的
        path: '/data-structures/Data Structures.md',   
      },
      {
        title: 'Group 2',
      }
    ],
  }
  
}
