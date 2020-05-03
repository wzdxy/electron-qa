# Electron 简介

## 什么是 Electron

其实官方的说法就很明确:

> Electron 是一个使用 JavaScript, HTML 和 CSS 等 Web 技术创建原生程序的框架，它负责比较难搞的部分，你只需把精力放在你的应用的核心上即可

如果不理解 , 可以看一下这个图:

![20200428231139](https://static.wzdxy.com/img/20200428231139.png)

一个原子的结构 . 为啥这里有一个原子呢 ? 因为 Electron 名为"电子".

那电子有什么特点?

一. **包裹在原子外层** , 围绕原子核运动

二. **重量占比极小** , 原子的主要重量都在原子核中.

啥是原子核 ? 就是你用 JavaScript, HTML , CSS 创建的 Web.

所以 Electron 可以被看做一个包裹在网站之外的壳 , 而且在多数项目中 , 你的大部分开发工作也会被 Web 占据.

![(真是强行解释)](<https://static.wzdxy.com/img/(真是强行解释).png>)

## Electron 的结构

![20200428232059](https://static.wzdxy.com/img/20200428232059.png)

Chromium 用于提供大部分 UI 界面 (除了少量功能, 如菜单/托盘) , 所以在 Electron 中运行的界面和浏览器中是基本一样的.

Node 用于提供浏览器之外的能力.

再将两者结合到一起 , 并提供原生接口 , 就组成了 Electron.
