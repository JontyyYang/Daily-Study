export {};

/**
 * 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。
示例：

输入：nums = [-1,2,1,-4], target = 1
输出：2
解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
 
提示：

3 <= nums.length <= 10^3
-10^3 <= nums[i] <= 10^3
-10^4 <= target <= 10^4
*/

// 双指针问题，先将数组进行排序， 固定一个值，左指针从固定值后一个开始，右指针从数组最后一个开始
function ThirdNum(nums: number[], target: number) {
  const len = nums.length;
  if (len < 3) return;
  // 正向排序 sort()方法默认按照unicode编码排序
  nums.sort((a, b) => a - b);

  let left = null;
  let right = null;
  // 排序后，这个是最小值
  let res = nums[0] + nums[1] + nums[2];
  for (let i = 0; i < len - 2; i++) {
    left = i + 1;
    right = len - 1;

    while (left < right) {
      const cur = nums[i] + nums[left] + nums[right];
      if (Math.abs(target - res) > Math.abs(target - cur)) {
        res = cur;
      }
      if (cur === target) return cur;
      if (cur < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  return res;
}

console.log('first', ThirdNum([1, 2, 4, 8, 16, 32, 64, 128], 82));

/*
给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

示例：

给定一个链表: 1->2->3->4->5, 和 n = 2.

当删除了倒数第二个节点后，链表变为 1->2->3->5.
说明：

给定的 n 保证是有效的。

链表定义：.next指向下一个节点
function ListNode(val) {
    this.val = val;
    this.next = null;
}

*/

// 双指针，fisrt和second, first从头开始前进n个节点, second从头开始，之后两指针同步前进
function DeleteListNode(head: any, n: number) {
  if (head === null || n === 0) return head;
  let first = head;
  let second = head;
  // first前进n个
  while (n > 0) {
    first = first.next;
    n--;
  }

  // 若前进n个后first为空，那么要删除的就是头节点
  if (first === null) {
    return head.next;
  }

  while (first.next !== null) {
    first = first.next;
    second = second.next;
  }
  second.next = second.next.next;
  return head;
}
