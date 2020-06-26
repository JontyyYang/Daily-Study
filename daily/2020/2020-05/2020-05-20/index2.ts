/*
 * @Author: jontyy
 * @Date: 2020-05-20 22:46:49
 * @Description:
 */

/** promise 直接执行 */
const promise = new Promise((resolve, reject): void => {
  console.log(reject);
  setTimeout(() => {
    resolve(1);
  }, 3000);
}).then(res => console.log(res));
console.log(promise);

/** 不想直接执行，就放到函数里 */
const promise2 = () => {
  return new Promise((resolve, reject): void => {
    console.log(reject);
    setTimeout(() => {
      resolve(111);
    }, 3000);
  }).then(res => console.log(res));
};

promise2();

/** 删除掉then，用async await代替， 主要是为了证明es6语法都支持 */
const promise23 = () => {
  return new Promise((resolve, reject): void => {
    console.log(reject);
    setTimeout(() => {
      resolve(111);
    }, 3000);
  });
};

const demo = async () => {
  const data = await promise23();
  console.log(data);
};

demo();
// function timeout(ms:number) {
//   console.log(1)
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, ms, "done");
//   });
// }

// timeout(3000).then((value) => {
//   console.log(value);
// });

export {};
