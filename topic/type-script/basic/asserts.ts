import {FooType} from './interface';

const foo = {} as FooType;
foo.name = 'yangjida';
foo.age = 18;
// 但是 断言不太好，存在有些有些问题，比如更新之后可能类型更新了， 对象没更新， 也可能对象更新了， 类型没更新，建议采用下面的操作

const newFoo: FooType = {
  name: 'yangjinda',
  age: 18,
};
console.log(newFoo);

const handle = (event: Event) => {
  const mouseEvent = event as MouseEvent;
};

const foo1: {name: string; [key: string]: any} = {name: 'jontyy', age: 18};
console.log(foo1);
// 下面这个会报错， 不能帮更详细的赋值给详细的
// const handle2 = (event: Event) => {
//   const element = event as HTMLElement;
// };
export {};
