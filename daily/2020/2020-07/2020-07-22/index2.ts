import {pick, isEqual} from 'lodash';

const a = {
  name: 'yjd',
  age: 18,
};

const aa = {
  age: 18,
  name: 'yjd',
};

console.log(pick(a, ['name']));
console.log(pick(a, ['nae']));

console.log(isEqual(a, aa));

export {};
