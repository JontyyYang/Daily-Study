// 写一个函数输入： [['a', 'b'], ['n', 'm'], ['0', '1']] => 输出：["an0", "an1", "am0", "am1", "bn0", "bn1", "bm0", "bm1"]

type paramsType = string[];
const out = (params: paramsType[]): paramsType => {
  const innerLength = params[0].length;
  const finalArray = [];
  for (let i = 0; i !== innerLength; i++) {
    for (let j = 0; j !== innerLength; j++) {
      for (let k = 0; k !== innerLength; k++) {
        finalArray.push(`${params[0][i]}${params[1][j]}${params[2][k]}`);
      }
    }
  }
  console.log(finalArray);
  return finalArray;
};
const out2 = (params: paramsType[]): paramsType => {
  const finalArray: string[] = [];
  const [first, second, third] = params;
  first.map(item => {
    second.map(item2 => {
      third.map(item3 => {
        finalArray.push(`${item}${item2}${item3}`);
      });
    });
  });
  console.log(finalArray);
  return finalArray;
};
out([
  ['a', 'b'],
  ['n', 'm'],
  ['0', '1'],
]);

out2([
  ['a', 'b'],
  ['n', 'm'],
  ['0', '1', 'r'],
]);

export {};
