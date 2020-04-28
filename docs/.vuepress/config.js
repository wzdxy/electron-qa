module.exports = {
  title: "大白话Electron",
  description: "Electron入门指南",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "Github", link: "https://github.com/wzdxy" },
    ],
    sidebarDepth: 2,
    sidebar: [
      {
        title: "框架介绍12",
        collapsable: false,
        children: ["/guide/", "/guide/theory"],
      },
      {
        title: "搭建开发环境",
        collapsable: false,
        children: ["/env/"],
      },
      {
        title: "调试代码",
        collapsable: false,
        children: ["/debug/"],
      },
    ],
    // sidebar: {
    //   // "/": [
    //   //   {
    //   //     title: "首页",
    //   //   },
    //   // ],
    //   "/guide/": [
    //     {
    //       title: "简介",
    //       collapsable: false,
    //       children: ["/what/"],
    //     },
    //   ],
    //   "/theory/": [
    //     {
    //       title: "原理",
    //       collapsable: false,
    //       children: ["/node/"],
    //     },
    //   ],
    // },
  },
};
