const testArray = [
  [
    {name: 1, hidden: false},
    {name: 2, hidden: false},
  ],
  [
    {name: 3, hidden: true},
    {name: 4, hidden: true},
  ],
  {name: 5},
  {name: 6, hidden: false},
];

// 感觉没有什么很亮眼的写法。  循环， 索引好像并不能优化
const lintArray = (testArray: any): any[] => {
  const result = [];
  for (const i of testArray) {
    if (Array.isArray(i)) {
      const res = i.filter(item => !item.hidden);
      if (res.length !== 0) {
        result.push(i);
      }
    } else {
      if (!i.hidden) {
        result.push(i);
      }
    }
  }
  console.log(result);
  return result;
};

lintArray(testArray);

// console.log(lintArray(testArray));

export {};
