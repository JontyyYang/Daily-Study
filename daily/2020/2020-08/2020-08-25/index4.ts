const list: number[] = [7, 8, 9];

const square = (num: number) => {
  // 返回一个promise， 隔1s后resolve
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(num * num);
    }, 1000);
  });
};

function test() {
  list.reduce((pre, curr) => pre.then(() => square(curr)).then(console.log), Promise.resolve());
}
test();
export {};
