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
            text: 'Arrays',
            link: '/data-structures/Arrays.md',
          },
          {
            text: 'Linked Lists',
            link: '/data-structures/Linked List.md',
          },
          {
            text: 'Queue',
            link: 'docs/data-structures/Queues.md',
          },
          {
            text: 'Stacks',
            link: 'docs/data-structures/Stacks.md',
          },
          {
            text: 'Trees',
            link: 'docs/data-structures/Trees.md',
          },
          {
            text: 'Hash Tables',
            link: 'docs/data-structures/Hash Tables.md',
          },
          {
            text: 'Graphs',
            link: 'docs/data-structures/Graphs.md',
          },

         ],
      },
      {
        title: 'Group 2',
      }
    ],
  }
  
}
