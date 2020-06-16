### 模块

1. 在默认情况下， 当在一个新的 ts 文件里写代码的时候，他是处于全局命名空间当中的，比如在 foo.ts 中写以下代码

   ```javascript
   const foo = 123;
   ```

2. 如果在相同的项目中创建了一个新的文件 bar.ts, Typescript 系统允许你使用变量 foo，就像你在全局声明一样。

   ```javascript
   const bar = foo;
   console.log(bar); //123
   ```

3. 这是一个很危险的事情，因为会和文件内的代码命名冲突，所以要使用文件模块

   ```javascript
   export const foo = 123;
   ```

4. 调用的时候，通过

   ```javascript
   import {foo} from './foo.ts';
   ```

5. 使用 import 的时候， 不仅允许使用从其它文件导入的内容， 在文件内声明的定义也不会污染全局空间。

### 模块化的区别

1. AMD： 不要使用 AMD， 因为这个只能在浏览器工作
2. SystemJs： 不错的实验， 已经被 ES 取代
3. ES 模块， 还没准备好
4. commonjs，目前再用

### 模块化代码示例

```javascript
export const foo = 123

或者

const foo = 123；
export {foo};

这里是可以重命名的

const foo = 123;
 export {otherName as foo};
```

导入代码

```javascript
import {xxx} from 'xxx'

或者

import {xxx as yyy} from 'xxx'

或者

import * from 'xxx'
x.funcName()

或者 直接导出

export * from 'xxx'

或者 部分导出

export {xxx} from 'xxx
```

### declare

在项目中，可以使用 **declare module 'somePath'**声明一个全局模块的方式来解决查找模块路径的问题

```typescript
//global.d.ts
declare module 'foo' {
  export var bar: number;
}
```

```typescript
// another ts file in you project
import '*' as foo from 'foo'
// ts 会在假设没有做其他查找的情况下，， 认为foo是 {bar:number}
```

### import/require

**仔细看了下， 这好像是个好东西， 用来做懒加载的**

```typescript
import foo = require('foo');
```

1. 导入 foo 模块的所有类型信息
2. 确定 foo 模块运行时候的依赖关系

例 1

```typescript
import foo = require('foo');
```

这里不会报错，的按时会被编译成一个不含有任何代码的 js 文件，而且这是正确的， ，一个没有被使用的空文件

例 2

```typescript
import foo = require('foo');

var bar: foo;
```

这里会被编译成下面的样子

```typescript
let bar;
```

这里是因为 foo 并没有被使用到

例 3

```typescript
import foo = require('foo');
let bar = foo;
```

这里会被编译成

```typescript
import foo = require('foo');
const bar = foo;
```

这里用到了

**使用实例--懒加载**

类型腿短需要提前完成，这意味着，如果想在 bar 文件里使用其他文件 foo 导出的类型， 不得不这样使用

```typescript
import foo = require('foo');
let bar: foo.barType;
```
