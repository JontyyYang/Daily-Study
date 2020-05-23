const minArray = (numbers: number[]) => {
  let leftIndex = 0,
    rightIndex = numbers.length - 1,
    middleIndex;

  while (leftIndex < rightIndex) {
    middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    // 右边是递增的， 那么肯定在左边 1 2 3 4 5 。 三到五递增，所以肯定在左边
    if (numbers[middleIndex] < numbers[rightIndex]) {
      rightIndex = middleIndex;
      // 左边不是递增的， 肯定在右边
    } else if (numbers[middleIndex] > numbers[rightIndex]) {
      leftIndex = middleIndex + 1;
      // 相等的话， 那么右边的减一减，缩小范围， 实际上这个时候可以直接返回了，我觉得
    } else {
      rightIndex--;
    }
  }
  return numbers[leftIndex];
};

console.log(minArray([3, 4, 5, 1, 2]));
console.log(minArray([2, 2, 2, 0, 1]));
console.log(minArray([1, 3, 5]));

export {};
