// function keepDecimal(val, n) {
//   const valStr = `${val}`;
//   if (n === 0) {
//     return `${parseInt(valStr, 10)}`;
//   }
//   const reg = new RegExp(`^-?\\d+(?:\\.\\d{${n}})`);
//   const match = valStr.match(reg);
//   if (match) {
//     return match[0];
//   } else {
//     let temArr = valStr.split(".");
//     temArr[1] = temArr[1].padEnd(n, 0);
//     return temArr.join(".");
//   }
// }

console.log(keepDecimal(-2.22, 5));
console.log(keepDecimal(2.2222, 2));
console.log(keepDecimal(12.22222222, 4) + '');
console.log(keepDecimal(2.25, 1) + '');

// TODO
/**
 * 全局搜索该关键字，增加单测，当前单测有问题
 */

expect(keepDecimal(-2.22, 5) + '').toBe('-2.22000');
expect(keepDecimal(2.25, 1) + '').toBe('2.2');

export function keepDecimal(val, n) {
  if (n === 0) {
    return `${parseInt(val, 10)}`;
  }
  const valStr = `${val}`;
  const reg = new RegExp(`^-?\\d+(?:\\.\\d{${n}})`);
  const match = valStr.match(reg);
  if (match) {
    return match[0];
  } else {
    const temArr = valStr.split('.');
    temArr[1] = temArr[1].padEnd(n, 0);
    return temArr.join('.');
  }
}
