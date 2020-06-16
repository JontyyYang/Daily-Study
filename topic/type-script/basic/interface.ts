// 类可以实现接口
// 类必须遵守接口或者别人定义的对象结构，缺少或者多出都会有问题
interface jontyyType {
  name: string;
  age: number;
}

class jontyy implements jontyyType {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const jontyyDemo1 = new jontyy('jontyy', 19);
console.log(jontyyDemo1);

export {};
