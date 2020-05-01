# 安装 Electron

Electron 使用 npm 和来安装 , 按照文档和教程操作就行了 , 这里只写一下安装的过程中遇到的坑.

## 配置国内镜像

因为网络原因 , 在安装和打包过程中会遇到下载额外文件失败的问题 , 所以需要使用国内的镜像源.

配置镜像有多种方法 , 这里推荐使用配置文件.

创建项目后 , 在项目根目录创建一个文件 `.npmrc` 即可:

```js
ELECTRON_MIRROR = "https://npm.taobao.org/mirrors/electron/";
```

`npmrc` 是 NPM 项目的配置文件之一 , 详细信息可以参考 [NPM 官网的说明](https://docs.npmjs.com/configuring-npm/npmrc.html)

## 修复安装失败 (启动时报错 `Electron failed to install correctly`)

这是一个挺久的 bug 了, 使用某些版本的 Electron 会出现这个错误 , 可以选择安装较早的版本 , 也用下面的方法解决

1. 在 `node_modules\electron` 目录下创建一个 `path.txt` 文件.
2. 编辑内容为 `electron.exe`.
3. 手动下载 electron 的包.
4. 将压缩包解压至 `node_modules\electron\dist`.
5. 启动项目
