// https://neetcode.io/problems/valid-binary-search-tree

/*
recursive dfs, 
    for each node check if the value is within the bounds set by its parents

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
    isValidBST(root) {
        if (root === null) {
            return true
        }

        return this.dfs(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY)
    }

    dfs(node, leftBound, rightBound) {
        if (node === null) {
            return true
        }

        if (node.val > leftBound && node.val < rightBound) {
            return this.dfs(node.left, leftBound, node.val) && this.dfs(node.right, node.val, rightBound)
        } else {
            return false
        }
    }
}
