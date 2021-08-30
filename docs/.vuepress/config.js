module.exports = {
    title: "小飞的组件库",
    description: "Vue 驱动的静态网站生成器",
    base: "/",
    themeConfig: {
        nav: [
            {
                text: "指南",
                link: "/guide/",
            },
            {
                text: "手册",
                link: "/handbook/",
            },
            {
                text: "工具",
                items: [{ text: "代码生成器", link: "/" }],
            },
        ],
        sidebar: [

            {
                title: 'Group 1',   // 必要的
                path: '/info/test',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    '/',
                    '123112321'
                ]
            },
            {
                title: '看板',
                path: '/board/',
            }
        ],


    },
    chainWebpack: config => {
        config.resolve.alias.set('core-js/library/fn', 'core-js/features')
    }
}