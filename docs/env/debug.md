# 调试技巧

## 调试主进程 (使用 VSCode)

根据[官网文档](https://www.electronjs.org/docs/tutorial/debugging-main-process-vscode), 操作很简单 , 在项目根目录创建 `.vscode/launch.json` 后按 `F5` 即可启动 debug 模式.

操作方法和其他 Node 程序无异 , 单击编辑器的行号前面即可添加断点.

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Debug Main Process",
      "type": "node",
      "request": "launch",
      "cwd": "${workspaceFolder}",
      "runtimeExecutable": "${workspaceFolder}/node_modules/.bin/electron",
      "windows": {
        "runtimeExecutable": "${workspaceFolder}/node_modules/.bin/electron.cmd"
      },
      "args": ["."]
    }
  ]
}
```

在编辑器底部的 `DEBUG CONSOLE` 面板 , 会显示主进程中用 `console.log` 输出的内容以及主进程中的代码报错.

::: warning 注意
一般情况下 , VSCode 只能调试主进程的代码 , 也只能显示主进程的 log 输出

渲染进程的调试操作需要在各自窗口的 DevTools 中进行.
:::

## 调试渲染进程

渲染进程可以看做一个 Chrome 浏览器 TAB 页 , Electron 也内置了 Chrome DevTools , 所以调试渲染进程和在浏览器中调试网页一样.

启动 DevTools , 可以用快捷键 `Ctrl + Shift + I` 或在代码中调用 `win.webContents.openDevTools()`.

关于调试工具的使用技巧 , 可以用 Chrome DevTools 为关键字搜索.

![20200430024313](https://static.wzdxy.com/img/20200430024313.png)

## 调试 IPC 和事件

[Devtron](https://www.electronjs.org/devtron) 是 Electron 提供的 DevTools 扩展 , 提供了很多方便的功能.

个人比较常用的功能是 IPC , 用于验证通信消息是否正确被发送和接收. 下面是安装和启动的方法.

```bash
npm i --save-dev devtron
require('devtron').install()
```

安装后即可在渲染进程的 Devtools 中找到 `Devtron` 的面板.

![20200430024623](https://static.wzdxy.com/img/20200430024623.png)

## 调试 Vue 和 React 等框架

在使用 MVVM 框架开发普通网页时 , 我们通常会用框架提供的 `DevTools 扩展` 来提高调试的效率 , 比如 [Vue DevTools Extension](https://github.com/vuejs/vue-devtools#vue-devtools) 和 [React Devtools Extension](https://reactjs.org/tutorial/tutorial.html#developer-tools)

在 Electron 中的安装方法可以参考[官方文档](https://www.electronjs.org/docs/tutorial/devtools-extension)

安装成功后即可在 DevTools 中找到对应的面板 (只有当前页面用到了对应框架的开发版本时才会出现)

![20200430025006](https://static.wzdxy.com/img/20200430025006.png)
