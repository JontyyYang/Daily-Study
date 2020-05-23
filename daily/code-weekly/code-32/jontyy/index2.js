/*
 * @Author: your name
 * @Date: 2020-05-04 10:36:59
 * @LastEditTime: 2020-05-04 10:44:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /code-weekly/code-32/jontyy/index2.js
 */

const hashMap = new Map();

const getNextNum = n => {
  // let totalNum = 0;
  // n.toString().split('').map(item=>totalNum+=Math.pow(item,2));
  return n
    .toString()
    .split('')
    .reduce((a, b) => Number.parseInt(a) + Number.parseInt(b ** 2));

  // return totalNum;
};

const isHappy = n => {
  let num = getNextNum(n);
  return num;
  // while (num !== 1) {
  //     if (hashMap.has(num)) {
  //         return false;
  //     } else {
  //         hashMap.set(num,1);
  //         num = getNextNum(num);
  //     }
  // }
  // return true
};

console.log(isHappy(13));
