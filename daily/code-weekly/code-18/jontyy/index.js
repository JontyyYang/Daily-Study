'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const replaceSpace = s => {
  const finalArray = s.split('');
  const final = finalArray.map(item => {
    return item === ' ' ? '%20' : item;
  });
  return final.join('');
};
const s = 'We are happy.';
console.log(replaceSpace(s));
// 更好
// var replaceSpace = function(s) {
//   return s.split(" ").join("%20");
// };
