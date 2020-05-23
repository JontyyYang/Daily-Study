/**
 * @param {number[]} numbers
 * @return {number}
 */
const minArray = (numbers: Array<number>): number => {
  const final: number = numbers.findIndex((item, index) => {
    return item > numbers[index + 1];
  });
  return numbers[final + 1];
};
console.log(minArray([3, 4, 5, 1, 2]));
// console.log(minArray([2, 2, 2, 0, 1]));

export {};
