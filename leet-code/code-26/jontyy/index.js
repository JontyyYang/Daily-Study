/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
//因为本题不需要求出🌲的高度， 所以可以加上if isBalancedState的判断，否则应该删除掉
const isBalanced = root => {
  let isBalancedState = true;

  const dfs = root => {
    if (isBalancedState) {
      if (!root) {
        return 0;
      }

      let left = dfs(root.left);
      let right = dfs(root.right);

      if (Math.abs(left - right) > 1) {
        isBalancedState = false;
      }

      return Math.max(left, right) + 1;
    }
  };

  dfs(root);

  return isBalancedState;
};
