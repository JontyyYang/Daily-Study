```javascript
{
"name":"如何模拟实现 Array.prototype.splice #384",
"url":"https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/384"
}
```

**简单的说**

1. 一个参数， 就是从当前开始截断到最后， 如果参数是负数， 就从后往前
2. 两个参数 就是从当前截断 第二个参数的数量。
3. 多个参数， 就是第二条最后，添加这些数据

**不需要函数重载的场景**

1. 函数重载的意义在于让你知道传入不同的参数能得到不同的结果， 如果传入的参数不同，但是返回的结果（类型相同， 就没必要重组改了）

```typescript
function func(a: number): number;
function func(a: number, b: number): number;

// 像这样的是参数个数的区别，我们可以使用可选参数来代替函数重载的定义

function func(a: number, b?: number): number;

// 注意第二个参数在类型前边多了一个`?`

// 亦或是一些参数类型的区别导致的
function func(a: number): number;
function func(a: string): number;

// 这时我们应该使用联合类型来代替函数重载
function func(a: number | string): number;
```
