interface totalType {
  slow: number;
  fast: number;
  nums: number[];
}
const total = ({slow, fast, nums}: totalType): number => {
  return nums[slow] + nums[fast];
};

const twoSum = (nums: number[], target: number): number[] => {
  let slow = 0,
    fast = nums.length - 1,
    result = 0;

  while (result !== target) {
    result = total({slow, fast, nums});
    if (result > target) {
      fast--;
    } else if (result < target) {
      slow++;
    }
  }

  return [nums[slow], nums[fast]];
};

console.log(twoSum([10, 26, 30, 31, 47, 60], 40));
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([14, 15, 16, 22, 53, 60], 76));
console.log(twoSum([21, 44, 45, 54, 62, 73, 74, 74, 74, 81], 128));

export {};
