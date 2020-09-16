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
3. yarn topic = "xxx" 新建 topic 文件
4. yarn ver 生成项目实际依赖的版本文件 【huskyrc 会处理格式问题】
5. yarn test 执行单测代码
6. yarn coverage 获取单测覆盖率生成单测文件
7. tsc 当前目录下文件，将 ts 文件转成 js 文件
8. ts-node 当前目录下文件，执行该 ts 文件
9. node 当前目录下文件，执行该 js 文件
10. sass --watch alert(路劲/你的文件名).scss:alert(转换后的文件名).css
11. sass index.scss index.css --style compressed 或者 expanded
12.
