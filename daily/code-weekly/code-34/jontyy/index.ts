const search = (nums: number[], target: number): number => {
  return nums.filter(item => Object.is(item, target)).length;
};

console.log(search([5, 7, 7, 8, 8, 10], 8));

export {};
