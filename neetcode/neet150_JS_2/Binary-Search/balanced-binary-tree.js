// https://neetcode.io/problems/balanced-binary-tree

/*
recursive dfs
Each node calls its children to get its height
compares if the height difference is > 1: return false
return Max of left and right + 1

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

    dfs(root) {
        if (root === null) {
            return 0
        }

        const left = this.dfs(root.left)
        if (left === -1) {
            return -1
        }

        const right = this.dfs(root.right)
        if (right === -1) {
            return -1
        }
        
        return (Math.abs(left - right) <= 1) ? Math.max(left, right) + 1 : -1

    }
}
