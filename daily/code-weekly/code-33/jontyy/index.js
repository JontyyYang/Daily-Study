'use strict';
/**
 * @param {string} s
 * @return {boolean}
 */
const hashMap = new Map([
  ['{', '}'],
  ['(', ')'],
  ['[', ']'],
]);
const isValid = s => {
  let stock = [];
  for (let item of s) {
    if (hashMap.has(item)) {
      stock.push(item);
    } else {
      if (item !== hashMap.get(stock.pop() || '')) {
        return false;
      }
    }
  }
  return stock.length === 0;
};
console.log(isValid('([)]'));
