const list: number[] = [7, 8, 9];

const len = list.length;

let promise = Promise.resolve();

const promiseGapOneSecond = (i = 0): void => {
  if (i === len) {
    return;
  }

  promise = promise.then(() => {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  });

  promiseGapOneSecond(i + 1);
};

promiseGapOneSecond(0);

// 还可以用reduce解决，见index4.ts
export default promiseGapOneSecond;
