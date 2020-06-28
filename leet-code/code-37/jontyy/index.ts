const sum = (first: number, tail: number): number => {
  return ((first + tail) * (tail - first + 1)) / 2;
};

const renderArray = (first: number, tail: number): number[] => {
  const result = [];
  for (let i = first; i !== tail + 1; i++) {
    result.push(i);
  }
  return result;
};

const findContinuousSequence = (target: number): number[][] => {
  let slow = 1,
    fast = 4;

  const finalArr = [],
    half = Math.ceil(target / 2);

  while (fast <= half) {
    if (sum(slow, fast) === target) {
      // 把结果塞到数组里
      finalArr.push(renderArray(slow, fast));
      slow++;
    } else if (sum(slow, fast) > target) {
      slow++;
    } else {
      fast++;
    }
  }
  return finalArr;
};

console.log(findContinuousSequence(15));
console.log(findContinuousSequence(9));
console.log(findContinuousSequence(1));

export {};
