# Changelog

项目的更改记录在该文件中。

格式基于 [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)，
遵守 [Semantic Versioning](https://semver.org/spec/v2.0.0.html)。

## [Unreleased]

- :feat:

- :fix:

- :change:

## 2020-09-22

- :feat: vscode 增加插件 markLint，本地 setting 增加配置， 配置文件见 markdownLint 插件 Readme[Jontyy]
- :feat: 了解性能瓶颈的解决方案， 本质是通过 performance 或者 lightHouse 去找到问题，针对资源，代码，等做优化[Jontyy]
- :feat: 二进制转字符串， 字符串转二进制， 主要是 String.formCharCode 和 charCodeAt，了解 formCharCode 参数[Jontyy]

## 2020-09-19

- :feat: 增加机器人推送能力，见 publish-question.ts [Jontyy]
- :change: 修改 README，更加容易看懂 [Jontyy]
- :fix: 修复错误的 changelog 日期 [Jontyy]

## 2020-09-18

- :feat: v-if/v-show/v-html 区别
- :feat: computed 和 watch 的区别

## 2020-09-17

- :feat: 增加 0917 学习，两分法找左右边界
- :feat: 学习 loader 和 plugin 的区别
- :change: 删除多余文案
- :change: 修改创建日常代码的逻辑

## 2020-09-16

- :feat: 完成评分 rate 的纯 css 实现， 开心
- :change: 修改 README 中 sass 文件的生成和实时编译文档

## 2020-09-15

- :feat: 序列化字符串
- :feat: 实现一个自己的 indexOf， 本质是前后双指针， 或者循环遍历， 或者正则匹配

## 2020-09-09

- :feat: 学习 flex flex-shrink 和 flex-grow
- :feat: 实现一个批量请求函数 multiRequest(urls, maxNum)
- :feat: promise.then 测试

## 2020-09-08

- :feat: 实现一个 splice [index1.ts, index3.ts]
- :feat: 学习 ts 重载【index2.ts】

## 2020-09-07

- :feat: 写一个 promise.retry

## 2020-08-25

- :feat: 每隔固定时间输出一个数的方案 【强推 reduce】

## 2020-07-29

- :feat: daily ，整理新人培训文档

## 2020-07-28

- :feat: 处理 changelog 的逻辑 [processOn](https://www.processon.com/diagraming/5f211b0df346fb5cdcaaed52)

## 2020-07-27

- :feat: 学习 dns

## 2020-07-22

- :feat: 原生实现 isEqual 和 pick 函数
- :feat: 增加 pkg 版本比对，处理 shared 每次 yarn 需要 make dev 的逻辑

## 2020-07-17

- :feat: 过滤数组中空元素

## 2020-07-10

- :feat: 测试固定高度到不确定高度的滚动效果

## 2020-07-08

- :feat: 增加处理 changelog 的代码。【不打算接入 daily】

## 2020-06-30

- :feat: 学习 cli 教程

## 2020-06-29

- :feat: 增加生成 topic 函数，学习 process.argv
- :feat: 学习 sass 相关内容

## 2020-06-27

- :feat: 增加算法题两道
- :feat: 增加新建 code-xxx scripts 代码 执行 yarn leet-code 即可新建文件夹及文件
- :feat: 增加新建 daily scripts 代码 执行 yarn daily 即可新建文件夹及文件
- :feat: 增加 yarn-lock 转对象，以及 pck 实际依赖版本解析

## 2020-06-26

- :feat: 增加单测功能，具体见 package.json/jest.config.js 和 jest 目录下文件
- :feat: 增加 commitizen
- :feat: 增加 changelog 打标

## 2020-06-20

- :feat: 增加 ts 基础代码,可以看 asserts 里面的 foo1 代码， 利用【key:string】:any 声明一些可能不存在的字段

## 2020-06-16

- :feat: 增加 ts 基础代码【6.2 declare，6.3 @types 很有趣】

## 2020-06-08

- :feat: 初步完成 promise 的相关代码
- :feat: 增加 async await 简单代码 【第一次出现返回值是 Promise 的】

## 2020-06-07

- :feat: 增加观察者模式相关代码
- :feat: 增加发布订阅模式简单代码【不太熟，但是这种模式思想非常好】
- :feat: 增加限制返回值为 undefined 的示例，增加返回一个可能为 undefined 的示例【2020-06-07】
- :feat: 增加 class 相关代码
- :feat: 增加箭头函数相关代码
- :feat: 引入@types/node 否则不能正常的引用 node 代码

## 2020-05-27

- :feat: 增加代理模式【这模式不太懂，没感觉出来模式的优点】
- :change: 修改 TODO.md

## 2020-05-26

- :feat: 增加外观模式，本质感觉是拆分代码，多处复用
- :feat: 增加策略模式表单 demo
- :feat: 增加代理模式基础的解释
- :feat: 增加多端同时编辑一个页面的冲突问题

## 2020-05-25

- :feat: 增加策略模式 demo

## 2020-05-24

- :feat: 增加简单工厂模式，本质是根据条件返回不同的对象

## 2020-05-23

- :feat: 增加简单工厂模式
- :feat: 增加配置 tslint、prettier 等教程
- :feat: 迁移 ES6 代码
- :feat: 迁移 LeetCode 代码

## 2020-05-20

- :feat: 增加 ts Debug 支持
- :feat: 增加 ts Debug 支持方法
- :feat: 增加 0520 demo，promise 的几个小栗子

## 2020-05-19

- :feat: 增加模块模式
- :change: 修改 README.md

## 2020-05-18

- :feat: 增加工厂函数模式
- :change: 增加混合模式解决的问题知识

## 2020-05-16

- :feat: 增加 TS，代码全部 TS 化。【处理 this 问题，见原型模式和混合模式】
- :feat: 增加原型模式代码
- :feat: 增加混合模式代码

## 2020-05-16 之前

- :feat: 增加严格模式相关知识
- :feat: 增加 http cors 相关知识
- :feat: 增加 http post 和 get 区别相关知识
- :feat: 增加单例模式相关知识
- :feat: 增加构造函数模式
