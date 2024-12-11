// https://neetcode.io/problems/balanced-binary-tree

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
    DFS(root) {
        if (root === null) {
            return 0
        }

        const leftDep = this.DFS(root.left)
        if (leftDep === -1) {
            return leftDep
        }

        const rightDep = this.DFS(root.right)
        if (rightDep === -1) {
            return rightDep
        }

        if (Math.abs(leftDep - rightDep) > 1) {
            return -1
        }

        return Math.max(leftDep, rightDep) + 1
    }
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        if (root === null) {
            return true
        }

        return (this.DFS(root) === -1) ? false : true
    }
}
