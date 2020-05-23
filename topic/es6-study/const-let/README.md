# const-let 一些细节

1. var 声明的变量函数是挂载在全局作用域下的，也就是说

```javascript
var a = 1;
window.a;
var b = function () {};
window.b;
```

都是可以取到的

但是，const，let 声明的函数变量在 window 下是找不到的， 因为他们具有块级作用域

下面是 proxy 里面的例子

第一套代码可以执行，第二套代码就需要转换才能执行

```javascript
var double = n => n * 2;
var pow = n => n * n;
var reverseInt = n => n.toString().split('').reverse().join('') | 0;

const pipe = (() => {
  // value === 3
  return value => {
    let funcStack = [];
    let oproxy = new Proxy(
      {},
      {
        get: (pipeObject, fnName) => {
          // get进入到这里
          if (fnName === 'get') {
            console.log(funcStack);
            // 挨个执行，限制性double
            return funcStack.reduce((val, fn) => {
              return fn(val);
              // 下面的value是初始值，也就是reduce的第一个参数，val
            }, value);
          }
          // 第一次塞进去的是，double， 然后是pow，然后是reversInt，然后到了if里面
          // const let是块级作用域， 如果把上面的函数改为const。 那么下面的window[fnName]就取不到值， 因为window下面没有这个属性
          // 如果只用fnName ，那么就是个字符串，eval才能调用，这样不合理。而且， const 和 let就是为了解决这种作用域不合理的问题的，
          // 所以这段代码主要是为了演示，而不是为了实践
          funcStack.push(window[fnName]);
          return oproxy;
        },
      }
    );

    return oproxy;
  };
})();

console.log(pipe(3).double.pow.reverseInt.get); // 63
```

```javascript
const double = n => n * 2;
const pow = n => n * n;
const reverseInt = n => n.toString().split('').reverse().join('') | 0;

const pipe = (() => {
  // value === 3
  return value => {
    let funcStack = [];
    let oproxy = new Proxy(
      {},
      {
        get: (pipeObject, fnName) => {
          // get进入到这里
          if (fnName === 'get') {
            console.log(funcStack);
            // 挨个执行，限制性double
            return funcStack.reduce((val, fn) => {
              console.log(fn);
              return eval(fn + '(' + val + ')');
              // 下面的value是初始值，也就是reduce的第一个参数，val
            }, value);
          }
          // 第一次塞进去的是，double， 然后是pow，然后是reversInt，然后到了if里面
          // const let是块级作用域， 如果把上面的函数改为const。 那么下面的window[fnName]就取不到值， 因为window下面没有这个属性
          // 如果只用fnName ，那么就是个字符串，eval才能调用，这样不合理。而且， const 和 let就是为了解决这种作用域不合理的问题的，
          // 所以这段代码主要是为了演示，而不是为了实践
          funcStack.push(fnName);
          return oproxy;
        },
      }
    );

    return oproxy;
  };
})();

console.log(pipe(3).double.pow.reverseInt.get); // 63
```
