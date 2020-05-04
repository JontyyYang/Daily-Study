# 严格模式

1. 在 es5 中，严格模式需要在文件顶部写 'use strict'
2. 在 es6 中，默认采用严格模式，严格模式有部分限制
   - 变量必须声明后再使用【可以联想临时性死区】
   - 函数的参数不能同名 【鬼才会写同名属性】
   - 不能使用 with 语句【会改变原型链。 估计没人愿意用】
   - 不能对只读属性赋值。 【proxy 拦截一些体验更佳】
   - 不能使用前缀 0 表示八进制数【几乎不用】
   - 不能删除不可删除属性【原先也不能，只不过返回成功而已】
   - 不能删除变量 **delete prop**，只能删除属性。 **delete global[prop]**
   - eval 不会在它的外层作用域引入变量
   - eval 和 arguments 不能被重新复制
   - arguments 不会自动反映函数参数的变化
   - 不能使用 arguments.caller arguments.callee
   - this 不再指向全局对象
   - 不能使用 fn.caller fn.arguments
   - 增加部分保留字
