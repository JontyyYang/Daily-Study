/**
 * @param {number[]} nums
 * @return {number}
 */
const findRepeatNumber = nums => {
  let hashMap = new Map();
  for (let i = 0, j = nums.length; i !== j; i++) {
    if (hashMap.get(nums[i])) {
      return nums[i];
    } else {
      hashMap.set(nums[i], 1);
    }
  }
};

console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]));
