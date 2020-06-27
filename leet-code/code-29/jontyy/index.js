/**
 * @param {number[]} scores
 * @return {number}
 */
const expectNumber = scores => {
  return [...new Set(scores)].length;
};

const test = [1, 2, 3];

console.log(expectNumber(test));
