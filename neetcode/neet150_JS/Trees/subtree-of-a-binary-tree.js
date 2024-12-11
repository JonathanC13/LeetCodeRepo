// https://neetcode.io/problems/subtree-of-a-binary-tree

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {

    checkSubTree(root, subRoot) {
        if (root === null && subRoot === null) {
            return true
        }

        if (root !== null && subRoot !== null && root.val === subRoot.val) {
            return (this.checkSubTree(root.left, subRoot.left) && this.checkSubTree(root.right, subRoot.right))
        } else {
            return false
        }
    }

    DFS(root, subRoot) {
        if (root === null) {
            return false
        }

        if (this.checkSubTree(root, subRoot)) {
            return true
        }

        return (this.DFS(root.left, subRoot) || this.DFS(root.right, subRoot))
    }

    /**
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if (root === null) {
            return false
        }
        if (subRoot === null) {
            return true
        }

        return this.DFS(root, subRoot)
    }
}
