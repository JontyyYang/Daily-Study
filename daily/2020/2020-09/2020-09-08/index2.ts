/**
 * DEMO1
 */
type arg = string | number;

// 这里是声明
function add(arg1: string, arg2: string): string;
function add(arg1: number, arg2: number): number;
// 这里是实现
// 实现和声明要相邻， 要不eslint会报错， 真的麻烦，或者declare
function add(arg1: arg, arg2: arg) {
  if (typeof arg1 === 'string' && typeof arg2 === 'string') {
    return arg1 + arg2;
  } else if (typeof arg1 === 'number' && typeof arg2 === 'number') {
    return arg2 + arg1;
  }
}

console.log(add('jontyy ', ' birthday'));
console.log(add(3, 4));

/**
 * DEMO2
 */

//  这个函数的本意是，当传入参数是User时候， 不传flag，传入是number时候，传入flag， 但是ts并不知道这些。。所以需要重载解决
interface User {
  name: string;
  age: number;
}
declare function testUser(para: User | number, flag?: boolean): number;

// 解决方案
// 声明一个interface
interface NeWUser {
  name: string;
  age: number;
}

// 这是最后要用到的对象
const user: NeWUser = {
  name: 'Jack',
  age: 123,
};

class SomeClass {
  public test(para: User): number;
  public test(para: number, flag: boolean): number;

  public test(para: User | number, flag?: boolean): number {
    // 具体实现
    console.log(para, flag);
    return 11;
  }
}

const someClass = new SomeClass();

// ok
someClass.test(user);
someClass.test(123, false);

// Error
// @ts-ignore
someClass.test(123);
// @ts-ignore
someClass.test(user, false);
