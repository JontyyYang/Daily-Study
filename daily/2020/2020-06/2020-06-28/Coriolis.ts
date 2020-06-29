// 函数柯理化
// 如果一个函数可以接受多个函数， 可以把它分为多次接受同一个函数，这就是柯理化吧。 大概吧

const addWithoutCoriolis = (a: number, b: number, c: number): number => a + b + c;
console.log('无柯理化', addWithoutCoriolis(1, 2, 3));

const addWithCorilis = (a: number) => (b: number) => (c: number): number => a + b + c;

// 等同于上面
const addWithCorilisEs5 = function (a: number) {
  return function (b: number) {
    return function (c: number) {
      return a + b + c;
    };
  };
};

console.log('柯理化展开', addWithCorilis(1)(2)(3));
const a = addWithCorilis(1);
console.log('柯理化不展开', a(2)(4));
console.log('柯理化不展开', a(2)(6));

console.log('柯理化ES5写法', addWithCorilisEs5(9)(8)(7));

// 美业给的代码演示1  感觉 真没啥必要，无非就是返回一个新的函数  https://segmentfault.com/a/1190000010878974

// example2

const match = (reg: RegExp) => (str: string) => str.match(reg);

console.log('正则匹配', match(/\d{1}/)('3'));

const hasSpace = match(/\s+/);

const filter = (fn: any) => (arr: string[]) => arr.filter(fn);

const findSpace = filter(hasSpace);

const result = findSpace(['hi num', 'test']);

console.log(result);

// exanple
// react-redux的connect方法，就是使用了柯里化增加代码的可读性:

// let Container = connect(mapStateToProps, mapDispatchToProps)(Component);
// 在这里，connect的作用就是将Component要用到的state切面和action注入到它的property中，达到展示型组件和容器组件分离的目的。如果将这个方法的定义改为:

// let Container = connect(mapStateToProps, mapDispatchToProps, Component);
// 就没那么好理解了。而且，mapStateToProps和mapDispatchToProps实际上也是可选参数，在不传它们的情况下传入Component会显得很恶心: connect(null, null, Component)。

export {};
