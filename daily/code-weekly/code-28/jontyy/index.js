/**
 * @param {number[]} coins
 * @return {number}
 */
const minCount = coins => {
  let total = 0;
  const {ceil} = Math;
  coins.map(item => {
    total += ceil(item / 2);
  });
  return total;
};
const coins1 = [4, 2, 1];
const coins2 = [2, 3, 10];
// minCount(coins1);
console.log(minCount(coins2));
console.log(minCount(coins1));
