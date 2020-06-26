# 开发方式

## 环境安装

**默认已经安装好 yarn**

1. yarn global add typescript
2. yarn global add ts-node

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
