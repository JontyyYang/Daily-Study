// 第160题

// 定义一个数组
const list: number[] = [1, 2, 3];
const square = (num: number) => {
  // 返回一个promise， 隔1s后resolve
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(num * num);
    }, 1000);
  });
};

// forEach是不能阻塞的， 实际上还是3个一起执行， 在1s的时候输出出来。
// 所以最后的表现是同时输出三个
const test = (): void => {
  list.forEach(async x => {
    const res = await square(x);
    console.log(res);
  });
};

test();

// 每隔1s输出一个， 改造见index2.ts
export default test;

// function test() {
//   list.forEach(async x => {
//     const res = await square(x);
//     console.log(res);
//   })(
//     //forEach循环等于三个匿名函数;
//     async x => {
//       const res = await square(x);
//       console.log(res);
//     }
//   )(1);
//   (async x => {
//     const res = await square(x);
//     console.log(res);
//   })(2);
//   (async x => {
//     const res = await square(x);
//     console.log(res);
//   })(3);

//   // 上面的任务是同时进行
// }

// async function test() {
//   for (let x of list) {
//     const res = await square(x);
//     console.log(res);
//   }
// }
// //等价于

// async function test() {
//   const res = await square(1);
//   console.log(res);
//   const res2 = await square(2);
//   console.log(res);
//   const res3 = await square(3);
//   console.log(res);
// }
