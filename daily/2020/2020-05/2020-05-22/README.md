<!--
 * @Author: jontyy
 * @Date: 2020-05-23 14:00:04
 * @Description:
-->

tslint 相关配置，参照文档

缘起
之前使用 tslint 校验代码格式，后来发现 ts 官方已经放弃这个转而使用 eslint，研究了一下把相应配置调整了一下。

目标：

使用 eslint、prettier 格式化 TypeScript 代码
使用 husky、lint-staged 在提交代码到 git 的时候自动格式化代码（按需启用）
使用 commitlint 校验 git commit message（按需启用）
关于 1 做个简单说明，eslint、prettier 配合使用的方式是后者先按其规则格式化代码，然后使用 eslint --fix 再次格式化，从而达到代码兼容二者格式的目的。

依赖
npm i -D eslint prettier
npm i -D eslint-config-prettier eslint-plugin-prettier
npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser

npm i -D husky lint-staged
npm i -D @commitlint/cli @commitlint/config-conventional

配置
package.json 同级目录下配置如下文件

eslint
采用 .eslintrc.js(对于这些配置，优先选择 js 格式，不说别的，一个注释就比 json 格式强的多)。

module.exports = {
root: true,
parser: '@typescript-eslint/parser',
extends: [
'plugin:@typescript-eslint/recommended',
// Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
'prettier/@typescript-eslint',
// Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
// 此行必须在最后
'plugin:prettier/recommended',
],
env: {
es6: true,
node: true,
},
parserOptions: {
// 支持最新 JavaScript
ecmaVersion: 2018,
sourceType: 'module',
},
rules: {
// 如果有不适合的规则，可以在此调整
// ...
},
};
当然，上面是单纯的 node 下使用 TypeScript 的配置，如果是 react 之类的，可以再加上相应配置。

prettier
配置文件为：.prettierrc.js

module.exports = {
// 箭头函数只有一个参数的时候可以忽略括号
arrowParens: 'avoid',
// 括号内部不要出现空格
bracketSpacing: false,
// 行结束符使用 Unix 格式
endOfLine: 'lf',
// true: Put > on the last line instead of at a new line
jsxBracketSameLine: false,
// jsx 属性使用双引号
jsxSingleQuote: false,
// 行宽
printWidth: 100,
// 换行方式
proseWrap: 'preserve',
// 分号
semi: true,
// 使用单引号
singleQuote: true,
// 缩进
// tabWidth: 4,
// 使用空格缩进
useTabs: false,
// 后置逗号，多行对象、数组在最后一行增加逗号
trailingComma: 'es5',
// parser: 'babylon',
};
如果某些代码不需要格式化，可以在 .prettierignore 中配置，格式类似 .gitignore

git 提交时候的代码格式化
.huskyrc.js
module.exports = {
hooks: {
// git message 格式控制，参见下面的 git commit message 校验部分，如果不需要可删除
'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',

    // commit 之前执行的命令
    'pre-commit': 'lint-staged',

},
};
lint-staged.config.js
ts、js 之类代码使用 eslint 格式化，md、css 之类则用 prettier。

module.exports = {
linters: {
'_.{ts,tsx}': ['eslint --fix', 'git add'],
'_.{js,jsx}': ['eslint --fix', 'git add'],
'_.{md,html,json}': ['prettier --write', 'git add'],
'_.{css,scss,less}': ['prettier --write', 'git add'],
},
};
git commit message 格式控制
这个用来控制 git 提交信息是否符合规范，我一般使用 ，具体可参见说明。

简单来说，git 提交信息需符合如下规则：

type(scope?): subject
body?
footer?
.commitlintrc.js

此文件在 .huskyrc.js 中配置 commit-msg 后启用。

module.exports = {
extends: ['@commitlint/config-conventional'],
};

快捷方式
为方便检查代码格式是否存在错误，或者直接格式化所有代码，可以在 package.json 的 script 中配置如下命令：

"lint": "eslint 'src/**/\*.{js,ts,tsx}'",
"format": "eslint --fix 'src/**/\*.{js,ts,tsx}'",
前者用来检查代码是否存在格式问题。后者用来修正代码格式。

[http://www.fly63.com/article/detial/3445](http://www.fly63.com/article/detial/3445)

注意 lint-staged.config 和文档不完全一样，需要删除 linter
