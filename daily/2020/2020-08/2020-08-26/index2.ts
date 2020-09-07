import {deferred} from './deferred';

// 继承promise类型， 因为promise不能直接在原型链上加东西
const p = deferred<number>();

// 函数， 返回一个resolve的Promise
const getProm = (): Promise<number> => {
  const n = Math.random();
  console.log(n, 'n');

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      n > 0.9 ? resolve(n) : reject(n);
    }, 100);
  });
};

p.retry = function (func: () => Promise<number>, num: number): Promise<number> {
  return new Promise((resolve, reject) => {
    let time = 0;
    const run = () => {
      func()
        .then(e => {
          resolve(e);
        })
        .catch(e => {
          if (time < num) {
            time++;
            run();
          } else {
            reject(e);
          }
        });
    };
    run();
  });
};
p.retry(getProm, 3)
  //@ts-ignore
  .then(e => {
    console.log(e, 'success');
  })
  //@ts-ignore
  .catch(e => {
    console.log(e, 'error');
  });

export {};
