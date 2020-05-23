/**
 * @param {number} n
 * @return {boolean}
 */

const hashMap = new Map();

const getNextNum = n => {
  let totalNum = 0;
  let num = n;

  while (num) {
    totalNum += Math.pow(num % 10, 2);
    num = Number.parseInt(num / 10);
  }

  return totalNum;
};

const isHappy = n => {
  let num = getNextNum(n);

  while (num !== 1) {
    if (hashMap.has(num)) {
      return false;
    } else {
      hashMap.set(num, 1);
      num = getNextNum(num);
    }
  }
  return true;
};

console.log(isHappy(13));

// 下面这个方法有点亮点， 比如，他把数字变成字符串，利用遍历来做，而不是我的取余和除
// var isHappy = function(n) {
//     let res = sum(n)
//     let obj = {}
//     while(res != 1){
//       if (res in obj) return false
//       obj[res] = 1
//       res = sum(res)
//     }
//     return true
// }
// function sum(n){
//   n = n + ''
//   let sum = 0
//   for(let num of n){
//     sum += num * num
//   }
//   return sum
// }
