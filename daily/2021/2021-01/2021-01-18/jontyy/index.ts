// 实现一个函数的阶乘

/**
 * @description: 阶乘
 * @param {num}
 * @return {num}
 */

const calculate = (num: number) => {
  if (typeof num !== 'number' || num < 0) {
    throw new Error('参数错误');
  }
  let originNum = 1;
  while (num > 0) {
    originNum *= num;
    num--;
  }
  return originNum;
};

console.log(calculate(3));
console.log(calculate(20));

const loop = (num: number): any => {
  if (typeof num !== 'number' || num < 0) {
    throw new Error('参数错误');
  }

  if (num === 1) {
    return 1;
  } else {
    return num * loop(--num);
  }
};
console.log(loop(3));
console.log(loop(20));

export {};
