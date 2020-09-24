const splitStr = (str: string, gap: number): string => {
  const res = [];

  while (str.length) {
    res.unshift(str.substr(str.length - gap > 0 ? str.length - gap : 0));
    str = str.substr(0, str.length - gap);
  }

  return res.join('.');
};

console.log(splitStr('1234567890', 3));
console.log(splitStr('-1234567890', 3));
console.log(splitStr('10000000000', 3));
console.log(splitStr('-10000000000', 3));
console.log('------------------------------------------------------------------------');
console.log('------------------------------------------------------------------------');

// 目测和第一种区别不大，循环
const splitStr2 = (str: string, gap: number): string => {
  const res = [];

  for (let i = 0; i !== Math.ceil(str.length / 3); i++) {
    const cal = str.length - (i + 1) * 3;
    res.unshift(str.substr(cal > 0 ? cal : 0, cal > 0 ? gap : gap + cal));
  }

  return res.join('.');
};

console.log(splitStr2('1234567890', 3));
console.log(splitStr2('-1234567890', 3));
console.log(splitStr2('10000000000', 3));
console.log(splitStr2('-10000000000', 3));
console.log('------------------------------------------------------------------------');
console.log('------------------------------------------------------------------------');

// 正则匹配， ？=是后向断言  \b是单词边界
const splitStr3 = (str: string): string => {
  const res = str.replace(/(\d)(?=(\d{3})+\b)/g, '$1.');
  return res;
};

console.log(splitStr3('1234567890'));
console.log(splitStr3('-1234567890'));
console.log(splitStr3('10000000000'));
console.log(splitStr3('-10000000000'));
console.log('------------------------------------------------------------------------');
console.log('------------------------------------------------------------------------');

const splitStr4 = (str: string, gap: number): string => {
  const sign = Math.abs(Number(str)) === Number(str);
  const tempArr = [...Math.abs(Number(str)).toString()].reverse();
  const res: string[] = [];
  tempArr.map((item, index) => {
    if (index % gap === 2) {
      res.push(item);
      res.push('.');
    } else {
      res.push(item);
    }
  });
  if (!sign) {
    res.push('-');
  }

  return res.reverse().join('');
};
console.log(splitStr4('1234567890', 3));
console.log(splitStr4('-1234567890', 3));
console.log(splitStr4('10000000000', 3));
console.log(splitStr4('-10000000000', 3));
export {};
