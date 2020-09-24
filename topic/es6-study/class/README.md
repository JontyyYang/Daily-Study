### 类的定义

1. 定义类的第一种方式

```javascript
class User {}
```

2. 定义类的另一种方式

```javascript
const otherUser = class {};
```

_简单的说，像不像， function_

```javascript
function func() {}

const func2 = function () {};
```

_其实类就是对函数的封装，或者说，语法糖， 所以，对于函数的一些基本能力， 比如 export_

```javascript
// export function testExport() {}

// export class testExportClass {}

// export default class testExportClass2 {}
```

_所以， 对于函数可以 new，那么对于类 ， 以上面 class 为例子_

_本来这里应该传参的， 用来初始化，但是这里我们还没有写构造函数_

```javascript
const user = new User();
```

### 初始化

初始化， 也就是构造函数，如果不写的话是有默认构造函数的，但是是一个空函数、不会修改任何值\*

_一个类最多有一个构造函数_

```javascript
class Info {
  constructor(name) {
    this.name = name;
  }
}
const info1 = new Info('jontyy');
```

`到了这里，正常就要测试了，发现不支持es6的export，node只支持 module.export`

`惆怅，算了，看下面的`

### 字段

类字段是用来保存信息的变量， 字段可以附加到两个实体

1. 类本身的字段，也就是静态字段
2. 类实例上的字段， 一般这个比较多

类是有两种访问性的， 一种是私有， 一种是公开， 也就是 public 和 private， 可以看 es2020 文件中的内容

比如上面的 info1，当我访问, 就可以直接打印出来

```javascript
console.log(info1.name);
```

_在 es6 中， function 可以设置默认值，那么类的字段也自然可以设置默认值_

```javascript
class Info2 {

 name='yjd',

 constructor(name) {

  this.name = name

 }

}
const info2 = new Info2('jjj')
```

_私有变量可以详细的看 es2020 中的内容_

_这里就简单自我复习下， 哈哈哈_

_私有字段只能在类中访问，在类的外面访问一律报错_

```javascript
class User {
  #name,
  constructor(name) {
    this.#name = name
  }
getName() {
  return this.#name
}
}
const user = new User('yjd')
user.getName()
// 可以获取name值，但是如果是
user.#name 会直接 报错的
```

_公共静态字段_

_其实就是绑定在类本身上的额字段， 用来定义常量或者存储特定于该类的信息_

_要在类上创建静态变量，需要使用关键字 static_

```javascript
class User {
  static author = 'yjd';
  static email = 'jontyy@163.com';
  name;
  type;

  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
}

const admin = new User('jontyy', 'handsome');
console.log(User.author, User.email);
```

_私有静态字段_

```JavaScript
class User {
  static #maxNum = 2;
  static #flag = 0;

  name;
  constructor(name) {
    User.#flag++;
    if (User.#flag> User.#maxNum) {
        throw new Error('wrong')
    }
    this.name = name
  }
}
const name1 = new User('name1')
const name2 = new User('name2')
const name3 = new User('name3')   // 这里就开始报错了
```

### 方法

_实例方法_

```javascript
class User {
  name;
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}
const user = new User('jontyy');
user.getName();
// 这里可以说一句， 断点调试比console更好
```

_私有方法_

字段可以设置为私有的， 方法也可以设置为私有的

```JavaScript
class User {
  #name;
  constructor(name) {
    this.#name = name
  }
 #getName() {
   return this.#name
 }
  #outPutName() {
   return this.#getName().includes('jo')
 }
}

const user = new User('jontyy')
user.outPutName('jo'); //true
user.outPutName('ooo') //false
user.#getName()  // 直接报错
```

_getters 和 setters_

_这是为了模仿常规字段，在尝试获取字段值的时候触发 getter，设置值的时候触发 setter，感觉很像 proxy 的 get 和 set，就是拦截器，这些代码都是可以直接 node 运行看效果的，我现在用的是 12.14.2_

```JavaScript
class User {
  #name;
  age;
  constructor(name, age) {
    this.#name = name;
    this.age = age;
  }

  get name() {
    console.log("触发了getname函数");
    return this.#name;
  }

  set name(name) {
    if (Object.is(name, "")) {
      console.log("设置名字不可以为空");
    } else {
      console.log("设置名字成功");
      this.#name = name;
    }
  }
}

const user = new User("jontyy", 18);
console.log(user.name);
user.name = "";
console.log(user);
user.name = "jjj";
console.log(user);
user.name;
```

_测试静态方法_

_重要的知识点 有_

1. 静态方法可以访问静态字段
2. 静态方法不可以访问实例字段

```JavaScript
class User {
  static #takenName = [];

  static isNameRaken(name) {
    return User.#takenName.includes(name);
  }

  name;

  constructor(name) {
    this.name = name;
    User.#takenName.push(name);
  }
}

const user = new User("jontyy");
console.log(User.isNameRaken("jontyy"));
console.log(User.isNameRaken("jonty"));
```

### 继承 extends

_继承不管在哪个语言里都很重要的吧_

```javascript
class User {
  name;

  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

class Writer extends User {
  posts = [];
}

const jontyy = new Writer('jontyy');
console.log(jontyy.getName());
console.log(jontyy.name);
console.log(jontyy.posts);
```

_这里需要注意的是， 父类的私有属性方法不会被继承_

_如果需要在子类中调用父类的构造函数，那么就需要使用子构造函数中的 super 函数_

```JavaScript
class User {
  name;

  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

class Writer extends User {
  posts = [];

  constructor(name, posts) {
    // 必须限制性 super，要不其它命令都不能执行
    super(name);
    this.posts = posts;
  }
}

const jontyy = new Writer("jd", [1, 2]);
console.log(jontyy.name);
console.log(jontyy.posts);
```

_子类调用父类的方法_

```JavaScript
class User {
  name;

  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

class Jontyy extends User {
  posts = [];

  constructor(name, posts) {
    super(name);

    this.posts = posts;
  }

  getName() {
    const name = super.getName();
    if (name === "") {
      return "nothing";
    } else {
      return "something" + name;
    }
  }
}

const test = new Jontyy("jontyy", [1, 23]);
console.log(test.getName());
const test2 = new Jontyy("", [1]);
console.log(test2.getName());
```

_这种可以简称为方法重写。_

**可以在静态方法中调用 super 访问父类的静态方法**

### 类型检测 instanceof

```javascript
class User {
  name;

  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

const user = new User('jontyy');
console.log(user instanceof User);
const obj = {};
console.log(obj instanceof User);
```

_instanceof 是多态的，可以检测作为父类实例的子类_

```JavaScript
class User {
  name;

  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

class Writer extends User {
  posts = [];

  constructor(name, posts) {
    // 必须限制性 super，要不其它命令都不能执行
    super(name);
    this.posts = posts;
  }
}

const user = new Writer("123", []);
console.log(user instanceof User);
console.log(user instanceof Writer);
```

_如果需要知道确切是哪个类， 可以使用 constaructor 方法_

```JavaScript
在上面的代码再加两行
console.log(user.constructor);
console.log(user.constructor === Writer);
```

### 类和原型

_下面的两种代码是等价的_

```JavaScript
class User {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}
const user = new User('jontyy')
```

```javascript
function User(name) {
  this.name = name;
}
User.prototype.getName = function() {
  return this.name'
}
const user = new User('jontyy')
```
