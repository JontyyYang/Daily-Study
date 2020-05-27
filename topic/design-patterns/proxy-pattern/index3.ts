import {cacheType} from './interface';
const mult = (n: number): number => {
  let result = 1;
  for (let i = 1; i !== n + 1; i++) {
    result *= i;
  }
  return result;
};

// 讲真的， 就这个， 我没体会到什么设计模式的诀窍， 感觉主要就是用了个对象存储呀
// 哪怕我这样做
// 1. 先全局定义一个对象
// 2. 然后执行函数之前，先看这个对象有没有，有的话直接返回对象的值。 感觉一样的唉

const proxy = () => {
  const cache: cacheType = {};
  return (n: number): number => {
    console.log(cache);
    if (n in cache) {
      return cache[n];
    } else {
      return (cache[n] = mult(n));
    }
  };
};

const res = proxy();

console.log(res(3));
console.log(res(5));

export {};
