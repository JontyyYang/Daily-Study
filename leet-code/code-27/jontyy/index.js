/**
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

const buildTree = (preorder, inorder) => {
  if (!preorder.length) {
    return null;
  }
  const originRoot = preorder[0];
  const originRootIndex = inorder.indexOf(originRoot);

  let root = new TreeNode(originRoot);
  root.left = buildTree(preorder.slice(1, originRootIndex + 1), inorder.slice(0, originRootIndex));

  root.right = buildTree(preorder.slice(originRootIndex + 1), inorder.slice(originRootIndex + 1));

  return root;
};
