'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const search = (nums, target) => {
  return nums.filter(item => Object.is(item, target)).length;
};
console.log(search([5, 7, 7, 8, 8, 10], 8));
