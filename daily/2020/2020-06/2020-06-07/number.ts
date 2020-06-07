import {test} from './index';
console.log(0.1 + 0.2);

test();

console.log(Math.sqrt(-1));

console.log(Math.sqrt(-1) === Math.sqrt(-1));

console.log(Number.isNaN(Math.sqrt(-1)));

console.log(
  Number.MAX_VALUE,
  Number.MIN_VALUE,
  Number.MAX_VALUE + 1,
  Number.MIN_VALUE - 1,
  Number.MAX_VALUE + 1 === Number.MAX_VALUE,
  Number.MIN_VALUE - 1 === Number.MIN_VALUE
);
