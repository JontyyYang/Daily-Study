import {personState} from './interface';
// 测试

const Person = (function (this: personState, age: number) {
  this.age = age;
  this.growOld = () => {
    this.age++;
  };
} as any) as {new (age: number): personState};

const person = new Person(18);
console.log(person);
person.growOld();

const addAge = person.growOld;
setTimeout(() => {
  // person.growOld();
  addAge();
}, 1000);

setTimeout(() => {
  console.log(person);
}, 1000);

// 测试子类箭头函数兼容
class Adder {
  constructor(public a: number) {
    // this.a = a;
  }

  add = (b: number): number => {
    return this.a + b;
  };
}

class ExtendedAdder extends Adder {
  private superAdd = this.add;

  add = (b: number): number => {
    return this.superAdd(b);
  };
}

const test = new ExtendedAdder(12);

// 测试快速返回一个对象字面量
const foo = (): {
  bar: number;
} => ({
  bar: 123,
});
console.log(foo());

export {};
