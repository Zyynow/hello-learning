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
          { text: 'Japanese', link: '/language/japanese/' },
        ],
      },
    ],

    sideBar:[
      {
        title: 'Data Structures',   // 必要的
        path: '/data-structures/',   
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
            title: 'Queues',
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

         ]
      }
    ]
  }
}
