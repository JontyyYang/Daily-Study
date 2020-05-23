'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const replaceSpace = s => {
  const reg = /\s/g;
  const ss = s.replace(reg, '%20');
  return ss;
};
const s = 'We are happy.';
console.log(replaceSpace(s));
