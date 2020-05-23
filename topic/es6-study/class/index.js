/**
 * 类的私有静态字段测试
 */

// class User {
//   static #maxNum = 2;
//   static #flag = 0;

//   name;
//   constructor(name) {
//     User.#flag++;
//     if (User.#flag > User.#maxNum) {
//       throw new Error("wrong");
//     }
//     this.name = name;
//   }
// }
// const name1 = new User("name1");
// const name2 = new User("name2");
// const name3 = new User("name3");

/**
 * 测试getters和setters
 */

// class User {
//   #name;
//   age;
//   constructor(name, age) {
//     this.#name = name;
//     this.age = age;
//   }

//   get name() {
//     console.log("触发了getname函数");
//     return this.#name;
//   }

//   set name(name) {
//     if (Object.is(name, "")) {
//       console.log("设置名字不可以为空");
//     } else {
//       console.log("设置名字成功");
//       this.#name = name;
//     }
//   }
// }

// const user = new User("jontyy", 18);
// console.log(user.name);
// user.name = "";
// console.log(user);
// user.name = "jjj";
// console.log(user);
// user.name;

/**
 * 测试静态方法
 */
// class User {
//   static #takenName = [];

//   static isNameRaken(name) {
//     return User.#takenName.includes(name);
//   }

//   name;

//   constructor(name) {
//     this.name = name;
//     User.#takenName.push(name);
//   }
// }

// const user = new User("jontyy");
// console.log(User.isNameRaken("jontyy"));
// console.log(User.isNameRaken("jonty"));

/**
 * 测试继承方法
 */

// class User {
//   name;

//   constructor(name) {
//     this.name = name;
//   }

//   getName() {
//     return this.name;
//   }
// }

// class Writer extends User {
//   posts = [];
// }

// const jontyy = new Writer("jontyy");
// console.log(jontyy.getName());
// console.log(jontyy.name);
// console.log(jontyy.posts);

/**
 * 测试服构造函数的super
 */

//  class User {
//    name;

//    constructor(name) {
//      this.name = name;
//    }

//    getName() {
//      return this.name;
//    }
//  }

//  class Writer extends User {
//    posts = [];

//    constructor(name, posts) {
//      // 必须限制性 super，要不其它命令都不能执行
//      super(name);
//      this.posts = posts;
//    }
//  }

//  const jontyy = new Writer("jd", [1, 2]);
//  console.log(jontyy.name);
//  console.log(jontyy.posts);

/**
 * 测试方法中的super
 */

// class User {
//   name;

//   constructor(name) {
//     this.name = name;
//   }

//   getName() {
//     return this.name;
//   }
// }

// class Jontyy extends User {
//   posts = [];

//   constructor(name, posts) {
//     super(name);

//     this.posts = posts;
//   }

//   getName() {
//     const name = super.getName();
//     if (name === "") {
//       return "nothing";
//     } else {
//       return "something" + name;
//     }
//   }
// }

// const test = new Jontyy("jontyy", [1, 23]);
// console.log(test.getName());
// const test2 = new Jontyy("", [1]);
// console.log(test2.getName());

/**
 * 测试类型检测
 */

// class User {
//   name;

//   constructor(name) {
//     this.name = name;
//   }

//   getName() {
//     return this.name;
//   }
// }

// const user = new User("jontyy");
// console.log(user instanceof User);
// const obj = {};
// console.log(obj instanceof User);

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

const user = new Writer('123', []);
console.log(user instanceof User);
console.log(user instanceof Writer);
console.log(user.constructor);
console.log(user.constructor === Writer);
