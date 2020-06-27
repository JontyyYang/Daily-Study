const isStraight = nums => {
  // 去除所有为0的元素
  let deleteZero = nums.filter(item => !Object.is(item, 0));

  // 判断是否有重复的元素
  let isRepead = Object.is([...new Set(deleteZero)].length, deleteZero.length);

  // 返回的flag
  let flag = 'False';

  // 没有重复的元素
  if (isRepead) {
    // 最大值最小值小于5，因为只要小于5， 0就能补齐
    const diff = Math.max(...deleteZero) - Math.min.apply(null, deleteZero);
    if (diff < 5) {
      flag = 'True';
    }
  }
  return flag;
};

const nums = [0, 0, 2, 2, 5];

isStraight(nums);
