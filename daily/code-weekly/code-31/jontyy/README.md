# 分析

思路分析：若 root 节点为空则直接返回 true，不为空则进入递归，每次递归判断他们是否对称。
对称的条件是：

1. left.val == right.val
   2.left == null && right == null（说明遍历完毕且对称）
2. left.left.val == right.right.val
   4.left.left.val == right.right.val

作者：Chamlin
链接：https://leetcode-cn.com/problems/dui-cheng-de-er-cha-shu-lcof/solution/dui-cheng-de-er-cha-shu-di-gui-fei-di-gui-javati-j/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
