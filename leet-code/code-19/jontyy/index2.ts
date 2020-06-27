/**
 * @param {number[]} numbers
 * @return {number}
 */
const minArray = (numbers: Array<number>): number | undefined => {
  const final = numbers.find(item => {
    return item === Math.min.apply(null, numbers);
  });
  return final;
};
console.log(minArray([3, 4, 5, 1, 2]));
// console.log(minArray([2, 2, 2, 0, 1]));

export {};
