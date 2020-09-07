import {deferred} from './deferred';

// 继承promise类型， 因为promise不能直接在原型链上加东西
const p = deferred<number>();

// 函数， 返回一个resolve的Promise
const getProm = (): Promise<number> => {
  const n = Math.random();

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      n > 0.9 ? resolve(n) : reject(n);
    }, 100);
  });
};

p.retry = async function (func: any, num: number) {
  let state = false;
  while (num--) {
    try {
      const res = await func();
      state = true;
      console.log(res);
      break;
    } catch (e) {
      console.log(e);
    }
  }
  console.log(state ? 'success' : 'error');
};

p.retry(getProm, 3);

export {};
