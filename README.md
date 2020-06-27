# 开发方式

## 环境安装

**默认已经安装好 yarn**

1. yarn global add typescript
2. yarn global add ts-node
3. yarn global add sass
4. yarn global add commitizen

## node 版本

1. 建议 > 12.14.1

## 安装依赖

1. yarn

## 运行

目前主要采用的方式是

1. 编写 ts 文件，直接 ts-node 运行该文件

为了解决编写一些代码用在 leetCode 等地方,所以可以

1. 在 daily-study 下 运行 tsc 文件名【避免全部文件都生成】，生成 js 文件
2. 在对应文件夹下运行 node xxx.js

## 代码

1. yarn leet-code 新建 leet-code 文件夹和文件。
2. yarn daily 新建 daily 文件夹和文件
3. yarn test 执行单测代码
4. yarn coverage 获取单测覆盖率生成单测文件
5. sass 当前目录下文件，将 scss 文件转成 css 文件
6. tsc 当前目录下文件，将 ts 文件转成 js 文件
7. ts-node 当前目录下文件，执行该 ts 文件
8. node 当前目录下文件，执行该 js 文件
