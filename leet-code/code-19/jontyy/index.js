'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
/**
 * @param {number[]} numbers
 * @return {number}
 */
const minArray = numbers => {
  const final = numbers.findIndex((item, index) => {
    return item > numbers[index + 1];
  });
  return numbers[final + 1];
};
console.log(minArray([3, 4, 5, 1, 2]));
