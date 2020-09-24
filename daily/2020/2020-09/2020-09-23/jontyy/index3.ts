const arr1 = Array.from(new Array(10000), (x, index) => index);
const arr2 = Array.from(new Array(50000), (x, index) => index + index);

const calculateTime = (
  fn: (arr1: number[], arr2: number[]) => number[],
  arr1: number[],
  arr2: number[]
) => {
  const start = +new Date();
  console.log('数组去重开始');
  const res = fn(arr1, arr2);
  const end = +new Date();
  console.log('数组去重结束, 长度是' + res.length);

  const gap = end - start;

  console.log('消耗时间是', gap);
  return gap;
};

const distinct1 = (arr1: number[], arr2: number[]): number[] => {
  const tempArr = [...arr1, ...arr2];

  return tempArr.filter((item, index) => {
    return tempArr.indexOf(item) === index;
  });
};

const distinct2 = (arr1: number[], arr2: number[]): number[] => {
  const tempArr = [...arr1, ...arr2];
  const res: number[] = [];
  for (const item of tempArr) {
    !res.includes(item) && res.push(item);
  }
  return res;
};

// 为什么先排序再去重， 会更快
// https://zhuanlan.zhihu.com/p/22469702
// 分支预测逻辑
const distinct3 = (arr1: number[], arr2: number[]): number[] => {
  const tempArr = [...arr1, ...arr2].sort();
  const res: number[] = [];
  for (let i = 0; i !== tempArr.length; i++) {
    if (tempArr[i] !== tempArr[i + 1]) {
      res.push(tempArr[i]);
    }
  }
  return res;
};

const distinct4 = (arr1: number[], arr2: number[]): number[] => {
  return [...new Set([...arr1, ...arr2])];
};

const distinct5 = (arr1: number[], arr2: number[]): number[] => {
  const obj = new Map();
  const tempArr = [...arr1, ...arr2];
  const res = [];
  for (const item of tempArr) {
    if (!obj.has(item)) {
      obj.set(item, 1);
      res.push(item);
    }
  }
  return res;
};
console.log('filter and indexOf');
calculateTime(distinct1, arr1, arr2);
console.log('looper and includes');
calculateTime(distinct2, arr1, arr2);
console.log('sort and looper');
calculateTime(distinct3, arr1, arr2);
console.log('setter');
calculateTime(distinct4, arr1, arr2);
console.log('obj or map');
calculateTime(distinct5, arr1, arr2);

export {};
