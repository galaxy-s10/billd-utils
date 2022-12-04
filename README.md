<p align="center">
  <a href="">
    <img
      width="200"
      src="https://resource.hsslive.cn/image/1613141138717Billd.webp"
      alt="Billd-Utils logo"
    />
  </a>
</p>

<h1 align="center">
  Billd-Utils
</h1>

<p align="center">
  基于rollup + pnpm + esbuild搭建的Billd-Utils
</p>

<div align="center">
<a href="https://www.npmjs.com/package/billd-utils"><img src="https://img.shields.io/npm/v/billd-utils.svg" alt="Version"></a>
<a href="https://www.npmjs.com/package/billd-utils"><img src="https://img.shields.io/npm/dw/billd-utils.svg" alt="Downloads"></a>
<a href="https://www.npmjs.com/package/billd-utils"><img src="https://img.shields.io/npm/l/billd-utils.svg" alt="License"></a>
</div>

# 简介

积累常用的 js 方法

# 安装

```sh
npm install billd-utils
```

# 文档

[http://project.hsslive.cn/billd-utils/](http://project.hsslive.cn/billd-utils/)

# 使用

> 该库尚未发布 1.0 版本，api 可能会随时发生变化，请勿用于生产环境！

```ts
import { isBrowser } from 'billd-utils';

console.log(isBrowser());
```

# 在浏览器使用

> 该库尚未发布 1.0 版本，api 可能会随时发生变化，请勿用于生产环境！

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      http-equiv="X-UA-Compatible"
      content="IE=edge"
    />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />
    <title>Document</title>
  </head>
  <body>
    <script src="https://unpkg.com/billd-utils/index.min.js"></script>
    <script>
      console.log(BilldUtils.isBrowser());
    </script>
  </body>
</html>
```

# VSCode 提示

新建一个.d.ts 文件，如：billd-utils.d.ts（或者使用项目原有的.d.ts 文件），添加以下代码：

```ts
declare global {
  // eslint-disable-next-line
  import utils from 'billd-utils';
}
```

然后 vscode 里输入 billd-uitls 的方法，如 `isBrowser`，vscode 就会提示是否从 billd-utils 导入 `isBrowser`了~

# 本地调试

> 本地调试不会构建 umd

```sh
pnpm run dev
```

# 本地构建

```sh
pnpm run build
```

# 生成文档

> 使用 [typedoc](https://typedoc.org/) 生成，文档会生成在项目根目录的 doc 目录

```sh
pnpm run doc
```

# 发版

## 0.确保 git 工作区干净

即确保本地的修改已全部提交（git status 的时候会显示：`nothing to commit, working tree clean` ），否则会导致执行 `release:local` 脚本失败

## 1.执行本地发版脚本

```sh
pnpm run release:local
```

> 该脚本内部会做以下事情：

1. 根据用户选择的版本，更新 package.json 的 version
2. 开始构建
3. 对比当前版本与上个版本的差异，生成 changelog
4. 提交暂存区到本地仓库：git commit -m 'chore(release): v 当前版本'
5. 生成当前版本 tag：git tag v 当前版本

## 2.执行线上发版脚本

```sh
pnpm run release:online
```

> 该脚本内部会做以下事情：

1. 提交当前版本：git push
2. 提交当前版本 tag：git push origin v 当前版本
3. 发布到 npm

# 源码

[https://github.com/galaxy-s10/billd-utils](https://github.com/galaxy-s10/billd-utils)
