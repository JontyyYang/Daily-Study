const threeSumClosest = (nums: number[], target: number): number => {
  // 遇到类似问题， 可以先考虑排序， 排序会提升效率
  nums = nums.sort((a, b) => a - b);

  // 一些不会改变的值， 用常量会比较容易
  const totalLength = nums.length;

  // 计算三个值的和
  let res = nums[0] + nums[1] + nums[totalLength - 1];

  // 暴力解法， 先在最外面包一层循环， 循环每一个元素
  // 因为left会比i多1， right最少会比left多1
  // 所以循环的截止条件是-2就可以了
  for (let i = 0; i !== totalLength - 2; i++) {
    let left = i + 1;
    let right = totalLength - 1;

    // 三个数的合

    // 循环条件
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      // 三数之和与目标值差的绝对值比已经存在的更小， 那么就替换
      if (Math.abs(sum - target) < Math.abs(res - target)) {
        res = sum;
      }

      // 如果发现已经和目标值相等， 那么就直接返回
      if (sum === target) {
        return target;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return res;
};

console.log(threeSumClosest([1, 1, 1, 1], 0));
console.log(threeSumClosest([1, 1, 1, 1], 3));
console.log(threeSumClosest([1, 1, 1, 0], -100));
console.log(threeSumClosest([1, 1, -1, -1, 3], 3));
console.log(threeSumClosest([0, 2, 1, -3], 1));

export {};
