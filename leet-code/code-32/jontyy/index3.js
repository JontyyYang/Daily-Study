// 快慢双指针
// https://leetcode-cn.com/problems/happy-number/solution/ji-xu-gao-dui-xiang-by-shetia/
var isHappy = function (n) {
  let slow = sum(n);
  let fast = sum(slow);
  while (slow != fast) {
    slow = sum(slow);
    fast = sum(sum(fast));
  }
  return slow == 1;
};
function sum(n) {
  n = n + '';
  let sum = 0;
  for (let num of n) {
    sum += num * num;
  }
  return sum;
}
