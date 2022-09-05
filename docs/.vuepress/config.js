module.exports = {
    title: "景天",
    description: "景天带你上王者",
    port: "80",
    head: [
        ["link", {rel: "icon", href: "/logo.jpg"}]
    ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        nav: [
			{text: "首页", link: "/"},
            {text: "组件", link: "/xd/"},
            {text: "组件2", link: "/componentDocs/"},
			{text: "碎碎念", link: "/life/"},
			{text: "PAT", link: "/pat/basic/"},
            {text: "剑指offer", link: "/offer/"},
            {text: "LeeCode", link: "/leeCode/"},
            {text: "专栏", link: "/column/"},
            {text: "时光轴", link: "/timeaxle/"}
		],
        sidebar: {
            "/xd/": [
                "",
                "card"
            ],
            "/componentDocs/": [
                "",
                "card"
            ],
            "/life/": [
                "",
                "魔都折叠",
                "莎翁的智慧"
            ],
            "/pat/basic/": [
                "",
                "1001",
                "1002"
            ],
            "/timeaxle/": ["","",""]
        }

    }
}

