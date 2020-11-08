/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd(head, n) {
  if (!head) {
    return head;
  }
  if (!head.next && n === 1) {
    return null;
  }
  const first = head;
  let left = head;
  let right = head;
  for (let item = 0; item !== n; item++) {
    if (right.next) {
      right = right.next;
    }
  }
  while (right.next) {
    left = left.next || null;
    right = right.next;
  }

  left.next = left.next.next;
  return first;
}
