// https://neetcode.io/problems/balanced-binary-tree

/*
DFS the tree
At each node, get the depth of the left subtree and the depth of the right subtree.
if any depth returned is -1, return -1
if Abs(left - right) > 1: return -1

return Max leftdepth, rightdepth

- Time: O(n)
- Space: O(n)
*/

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
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        if (root === null) {
            return true
        }

        return this.dfs(root) === -1 ? false : true
    }

    dfs(node) {
        if (node === null) {
            return 0
        }

        const leftDepth = this.dfs(node.left)
        if (leftDepth === -1) {
            return -1
        }

        const rightDepth = this.dfs(node.right)
        if (rightDepth === -1) {
            return -1
        }

        if (Math.abs(leftDepth - rightDepth) > 1) {
            return -1
        }

        return Math.max(leftDepth, rightDepth) + 1
    }
}
