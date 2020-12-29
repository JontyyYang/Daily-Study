const TotalNum = 13;

const renderFinalArray = (num: number): number[] => {
  const finalArray = [];
  for (let i = num; i !== 0; i--) {
    finalArray.push(i);
  }
  return finalArray;
};

const finalArray = renderFinalArray(TotalNum);
// [13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// 认定1是桌上牌的顶部，13是底部

const originArray: number[] = [];
// 模拟下原有的操作
// 当originArray的长度不为空，就从手上牌的顶部【原数组尾】抽一张到桌子上【新数组尾】
// 从手上牌的顶部【原数组尾】拿一张到手上牌的底部【原数组头】
// 所以实际上进行的操作是，  finalArray.push(originArray.pop()),  originArray.unshift(originArray.pop())

// 所以复原的操作就是逆过来
while (finalArray.length) {
  originArray.length && originArray.push(originArray.shift() as number);

  originArray.push(finalArray.pop() as number);
}
console.log(originArray);
export {};
