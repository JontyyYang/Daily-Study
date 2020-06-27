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

const isMirror = (leftChild, rightChild) => {
  if (!leftChild && !rightChild) {
    return true;
  }

  if (!leftChild || !rightChild || rightChild.value !== leftChild.value) {
    return false;
  }

  return isMirror(leftChild.left, rightChild.right) && isMirror(leftChild.right, rightChild.left);
};

const isSymmetric = root => {
  if (!root) {
    return true;
  }

  return isMirror(root.left, root.right);
};
