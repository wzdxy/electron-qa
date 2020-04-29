# 使用 Electron 需要哪些知识

Electron 是一个非常综合的技术框架 , 在使用 Electron 开发之前需要掌握很多前置知识 , 下面的知识不分先后.

## HTML , CSS , JavaScript

上面提到过 , 使用 Electron 开发 , 大部分工作都在 Web , 所以前端技术非常重要.

如果你还没有掌握前端开发的基础知识 , 建议先到 [学习 Web 开发(MDN)](https://developer.mozilla.org/zh-CN/docs/Learn) 学习.

## 浏览器和 HTTP

Electron 的渲染进程就是一个浏览器内核 , 所以在实现一些需求时, 你会用到浏览器相关的知识 , 如 BOM API , Cookie , LocalStorage 等.

## MVVM 框架

学习框架不是必须的 , 使用原始的技术 (如原生 JS 或 jQuery) , 也可以开发出简单的功能.

但使用现代化的框架 , 可以获得更快的开发效率和可维护性, 并且在工程化上得到更好的支持 , 如果你的项目具有复杂的 UI 和交互逻辑 , 或者是一个长期大型的项目 , 建议使用框架.

2020 年比较主流的 MVVM 框架是 React , Vue , Angular.

学习了框架的基础之后 , 就可以使用以及基于它们的 UI 库快速开发产品了, 如 Ant-Design , Element-UI.

## 前端工程化

现代前端开发中 , 有很多工程化工具 , 提供开发 , 调试 , 打包 , 发布 等多种功能 , 这些工具可以提高你的开发效率和质量.

最常用的工具是 npm 和 webpack , 前者是搭建开发环境必备的 , 后者可以为你的项目提供自动刷新 , 热重载等功能.

## Node.js

Node.js 和浏览器中的 JavaScript 语法是相同的 , 不同的是 Node.js 一般运行在服务器等环境 (v8 引擎).

但在 Electron 中 , Node.js 和 浏览器被结合到了一起 (渲染进程) , 即你可以同时使用这两个部分的 API , 如果你仅仅掌握浏览器的部分 , 在开发时会遇到很多困难 , 比如 模块系统和 fs , path 等功能.
