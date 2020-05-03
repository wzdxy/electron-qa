module.exports = {
  title: "大白话Electron",
  description: "Electron入门指南",
  theme: "../../../theme-wzdxy",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "Github", link: "https://github.com/wzdxy" },
    ],
    sidebarDepth: 2,
    sidebar: [
      {
        title: "框架介绍",
        collapsable: false,
        children: ["/guide/", "/guide/prepare", "/guide/theory"],
      },
      {
        title: "搭建开发环境",
        collapsable: false,
        children: ["/env/", "env/debug"],
      },
    ],
  },
  head: [
    // 百度统计
    [
      "script",
      {},
      `var _hmt = _hmt || [];(function() {var hm = document.createElement("script");hm.src = "https://hm.baidu.com/hm.js?b76bb9ba6c96f0fc7d6fc1edf2baecdb";var s = document.getElementsByTagName("script")[0];s.parentNode.insertBefore(hm, s);})();`,
    ],
  ],
};
