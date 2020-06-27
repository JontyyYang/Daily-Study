'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
/**
 * @param {number[]} numbers
 * @return {number}
 */
const minArray = numbers => {
  const final = numbers.find(item => {
    return item === Math.min.apply(null, numbers);
  });
  return final;
};
console.log(minArray([3, 4, 5, 1, 2]));
