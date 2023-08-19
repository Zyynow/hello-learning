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
    sidebar: [
      {
        title: 'Group 1',   // 必要的
        path: '/docs/data-structures/DataStructures.md',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/'
        ]
      },
      {
        title: 'Group 2',
        children: [ /* ... */ ],
        initialOpenGroupIndex: -1 // 可选的, 默认值是 0
      }
    ],

    // sidebar: {
    //   '/data-structures/': [
    //     '',     /* /foo/ */
    //     'Arrays',  /* /foo/one.html */
    //     'Linked Lists',   /* /foo/two.html */
    //     'Queues',
    //     'Stacks', 
    //     'Trees',
    //     'Hash Tables',
    //     'Graphs',
    //   ],
    // }
    // sideBar:[
    //   {
    //     title: 'Data Structures',   // 必要的
    //     path: '/',   
    //     // children: [ 
    //     //   {
    //     //     title: 'Arrays',
    //     //     path: '/data-structures/Arrays.md',
    //     //   },
    //     //   {
    //     //     title: 'Linked Lists',
    //     //     path: '/data-structures/Linked List.md',
    //     //   },
    //     //   {
    //     //     title: 'Queues',
    //     //     path: '/data-structures/Queues.md',
    //     //   },
    //     //   {
    //     //     title: 'Stacks',
    //     //     path: '/data-structures/Stacks.md',
    //     //   },
    //     //   {
    //     //     title: 'Trees',
    //     //     path: '/data-structures/Trees.md',
    //     //   },
    //     //   {
    //     //     title: 'Hash Tables',
    //     //     path: '/data-structures/Hash Tables.md',
    //     //   },
    //     //   {
    //     //     title: 'Graphs',
    //     //     path: 'docs/data-structures/Graphs.md',
    //     //   },

    //     //  ],
    //   },
    //   {
    //     title: 'Group 2',
    //   },
    // ],
  // },
  }
}
