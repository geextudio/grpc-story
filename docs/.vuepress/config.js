module.exports = {

    title: 'gRPC Stories',
    description: 'Just learn something about gRPC',
    dest: 'public',
    
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
          lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
          title: '《gRPC 那些事儿》',
          description: '搞清楚 gRPC 的那些事儿是怎么回事儿.'
        },

        '/en/': {
          lang: 'en-US',
          title: 'The gRPC Stories!',
          description: 'Just learn something about gRPC.'
        }
      },

      themeConfig: {
        logo: 'https://grpc.io/img/logos/grpc-logo.png',
/* 
        nav: [
          { text: 'Home', link: '/' },
          
          { text: 'Guide', link: 'https://identityserver4.readthedocs.io/en/latest/' },
        ],

        // sidebar: https://www.vuepress.cn/theme/default-theme-config.html#%E4%BE%A7%E8%BE%B9%E6%A0%8F
        sidebar: [
          '/',
          '/page-a',
          ['/page-b', 'Explicit link text']
        ], */

        locales: {

            '/': {
                lang: 'zh-CN',

                // 多语言下拉菜单的标题
                selectText: '选择语言',

                // 该语言在下拉菜单中的标签
                label: '简体中文',

                // 编辑链接文字
                editLinkText: '在 GitHub 上编辑此页',

                // Service Worker 的配置
                serviceWorker: {
                  updatePopup: {
                    message: "发现新内容可用.",
                    buttonText: "刷新"
                  }
                },

                // 当前 locale 的 algolia docsearch 选项
                algolia: {},

                // 导航菜单
                nav: [
                  { text: '首页', link: '/' },          
                  //{ text: '官方文档', link: 'https://identityserver4.readthedocs.io/en/latest/' },
                  { text: '代码落地', link: 'https://github.com/geextudio/grpc-story/tree/master/code' },
                ],

                //侧边栏
                /* sidebar: [
                  {
                    title: '基本常识',   // 必要的
                    //path: '/introduction/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                    collapsable: true, // 可选的, 默认值是 true,
                    sidebarDepth: 2,    // 可选的, 默认值是 1
                    children: [
                      '/introduction/',
                      '/introduction/big_picture',
                      '/introduction/terminology'
                    ]
                  },

                  {
                    title: '快速入门',
                    path: '/quickstart/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                    collapsable: true, // 可选的, 默认值是 true,
                    sidebarDepth: 2,    // 可选的, 默认值是 1
                    children: [
                      '/quickstart/',
                      '/quickstart/addjsclient'
                    ]
                  } 
                ] */

              },  
            

            '/en/': {
                lang: 'en-US', 
                selectText: 'Languages',
                label: 'English',
                ariaLabel: 'Languages',
                editLinkText: 'Edit this page on GitHub',
                serviceWorker: {
                    updatePopup: {
                        message: "New content is available.",
                        buttonText: "Refresh"
                    }
                },
                algolia: {},

                // navigator
                nav: [
                  { text: 'Home', link: '/en/' },          
                  { text: 'Origin Guide', link: 'https://identityserver4.readthedocs.io/en/latest/' },
                  { text: 'Code Ready', link: 'https://github.com/geextudio/IdentityServer4.Chinese/tree/master/code' },
                ],

                /* sidebar: [
                  {
                    title: 'INTRODUCTION',   // 必要的
                    //path: '/en/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                    collapsable: true, // 可选的, 默认值是 true,
                    sidebarDepth: 1,    // 可选的, 默认值是 1
                    children: [
                      '/en/introduction/',
                      '/en/introduction/big_picture',
                      '/en/introduction/terminology'
                    ]
                  },

                  {
                    title: 'QUICKSTART',
                    path: '/en/quickstart/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                    collapsable: true, // 可选的, 默认值是 true,
                    sidebarDepth: 2,    // 可选的, 默认值是 1
                    children: [
                      '/en/quickstart/',
                      '/en/quickstart/addjsclient'
                    ]
                  } 
                ] */
            }
            
        }
      }
  };