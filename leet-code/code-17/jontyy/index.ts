/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
const getLeastNumbers = (arr: number[], k: number) => {
  const finalArr = arr.sort((a, b) => a - b);
  return finalArr.splice(0, k);
  // console.log(finalArr.splice(0, k));
};

getLeastNumbers([0, 1, 2, 1], 1);
