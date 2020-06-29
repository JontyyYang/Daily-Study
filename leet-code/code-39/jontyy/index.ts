class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const list = [];
  while (l1) {
    list.push(l1.val);
    l1 = l1.next;
  }
  while (l2) {
    list.push(l2.val);
    l1 = l2.next;
  }
  const finalListArr = list.sort((a: number, b: number): number => a - b);

  const finalList = new ListNode();
  let node = finalList;
  for (const i of finalListArr) {
    node.val = i;
    node.next = new ListNode();
    node = node.next;
  }

  console.log(finalList);
  return finalList;
}

// var mergeTwoLists = function (pHead1, pHead2) {
//   if (!pHead1) {
//     return pHead2;
//   } else if (!pHead2) {
//     return pHead1;
//   }

//   const preHead = new ListNode(-1);
//   let node = preHead;

//   while (pHead1 && pHead2) {
//     if (pHead1.val <= pHead2.val) {
//       node.next = pHead1;
//       pHead1 = pHead1.next;
//     } else {
//       node.next = pHead2;
//       pHead2 = pHead2.next;
//     }
//     node = node.next;
//   }

//   if (pHead1) {
//     node.next = pHead1;
//   } else if (pHead2) {
//     node.next = pHead2;
//   }

//   return preHead.next;
// };

mergeTwoLists(null, null);

export {};
