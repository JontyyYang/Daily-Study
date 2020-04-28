### 构造函数模式

1. 构造函数是有 prototype 的，指向原型对象
2. 构造函数和实例都共享原型上的属性和方法
3. prototype 中有一个 constructor 属性，是一个指针，指向构造函数

**构造函数和普通函数的区别**

```JavaScript
function Person(name) {
  this.name=name
}
var person = new Person('jontyy')
```

this 指向 Person

```javascript
function Person(name) {
  console.log(this);
}
```

this 指向 window， 其实就是 this 的指向问题，谁调用 this，this 指向谁。
new 出来的实例 this 就是当前实例



**构造函数的缺点**

每个new出来的实例里面的方法都需要重新创建一边， 比如代码里面的sleep方法， 我第一个new出来的实例和第二个new出来的实例里面的都是不同的， 每个实例方法都是不相等的，原型模式就是为了解决这个问题