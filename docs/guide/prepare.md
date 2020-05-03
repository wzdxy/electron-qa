# 使用 Electron 需要哪些知识

Electron 是一个非常综合的技术框架 , 在使用 Electron 开发之前需要掌握很多前置知识 , 下面的知识不分先后.

## HTML , CSS , JavaScript

上面提到过 , 使用 Electron 开发 , 大部分工作都在 Web , 所以前端技术非常重要.

**HTML** : 超文本标记语言 , 是网页 UI 的骨架 , 负责网页的内容和结构.

**CSS** : 层叠样式表 , 是网页的皮肤 , 负责网页站的外观 , 如样式、动效.

**JavaScript** : 前端开发的主流编程语言 , 负责网页的逻辑部分.

**浏览器知识** : DOM , BOM , Cookie , LocalStorage 等.

如果你还没有掌握前端开发的基础知识 , 建议先到 [学习 Web 开发(MDN)](https://developer.mozilla.org/zh-CN/docs/Learn) 学习.

## MVVM 框架

学习框架不是必须的 , 使用原始的技术 (如原生 JS 或 jQuery) , 也可以开发出简单的功能.

但使用现代化的框架 , 可以获得**更高的开发效率和可维护性**, 并且在工程化上得到更好的支持 , 如果你的项目具有复杂的 UI 和交互逻辑 , 或者是一个长期大型的项目 , 建议使用框架.

2020 年比较主流的 MVVM 框架是 [React](https://reactjs.org) , [Vue](https://cn.vuejs.org) , [Angular](https://angular.io/).

学习了框架的基础之后 , 就可以使用以及基于它们的 UI 库快速开发产品了, 如 [Ant-Design](https://ant.design/) , [Element-UI](https://element.eleme.cn/#/zh-CN).

## 开发和调试工具

[VSCode](https://code.visualstudio.com/) 是前端开发中最流行的编辑器之一 , 具有很好用的 Node.js 程序调试功能 , 同时也是用 Electron 开发.

[Chrome DevTools](https://www.jetbrains.com/webstorm/) 是前端最常用的调试工具 , 可以用来调试代码逻辑 , 页面显示 , 还可以查看网络请求 , 本地存储 , 分析性能优化等 , 配合 DevTools Extension , 还可以对[前端框架和 Electron 内部的事件和 IPC 进行调试](/env/debug).

## 前端工程化

现代前端开发中 , 有很多工程化工具 , 提供开发 , 调试 , 打包 , 发布 等多种功能 , 这些工具可以提高你的开发效率和质量.

最常用的工具是 [NPM](http://npmjs.com/) 和 [Webpack](https://webpack.js.org/) , 前者用于搭建开发环境 , 安装依赖库 , 管理项目的开发流程 , 后者可以为你的项目提供自动刷新 , 热重载等功能.

如果用的是 MVVM 框架 , 还可以用框架提供的 CLI 工具代替 Webpack , 如 [Vue CLI](https://cli.vuejs.org/zh/guide/)

## Node.js

Node.js 是一个基于 V8 引擎 的 JavaScript 运行时 , 是 Electron 的重要组成部分.

Node.js 和浏览器中的 JavaScript 语法是相同的 , 不同的是 Node.js 一般运行在服务器等环境 (v8 引擎).

但在 Electron 中 , Node.js 和 浏览器被结合到了一起 (渲染进程) , 即你可以同时使用这两个部分的 API , 如果你仅仅掌握浏览器的部分 , 在开发时会遇到很多困难 , 比如 `模块系统` , `fs` , `path` 等功能.

[Node 入门教程](https://www.liaoxuefeng.com/wiki/1022910821149312/1023025235359040)
