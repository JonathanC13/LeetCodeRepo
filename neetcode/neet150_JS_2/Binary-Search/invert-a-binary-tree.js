// https://neetcode.io/problems/invert-a-binary-tree

/*
recursive dfs
For each node swap the children and then move to the children.

- Time: O(n)    n = nodes
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
     * @return {TreeNode}
     */
    invertTree(root) {
        if (root === null) {
            return root
        }

        const left = root.left
        root.left = this.invertTree(root.right)
        root.right = this.invertTree(left)

        return root
    }
}
