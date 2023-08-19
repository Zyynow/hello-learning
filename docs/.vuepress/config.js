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
        children: [ 
          {
            title: 'Arrays',
            path: '/data-structures/Arrays.md',
          },
          {
            title: 'Linked Lists',
            path: '/data-structures/Linked List.md',
          },
          {
            title: 'Queue',
            path: '/data-structures/Queues.md',
          },
          {
            title: 'Stacks',
            path: '/data-structures/Stacks.md',
          },
          {
            title: 'Trees',
            path: '/data-structures/Trees.md',
          },
          {
            title: 'Hash Tables',
            path: '/data-structures/Hash Tables.md',
          },
          {
            title: 'Graphs',
            path: 'docs/data-structures/Graphs.md',
          },

         ],
      },
      {
        title: 'Group 2',
      }
    ],
  }
  
}
