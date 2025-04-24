// https://neetcode.io/problems/depth-of-binary-tree

/*
recursive dfs
Once a leaf terminates it returns 0.
Each node returns 1 for itself + max depth of left and right

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
     * @return {number}
     */
    maxDepth(root) {
        if (root === null) {
            return 0
        }
    
        const leftDepth = this.maxDepth(root.left)
        const rightDepth = this.maxDepth(root.right)

        return Math.max(leftDepth, rightDepth) + 1
    }
}
