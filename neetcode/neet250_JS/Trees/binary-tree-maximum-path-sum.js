// https://neetcode.io/problems/binary-tree-maximum-path-sum

/*
- edge case 1: if root === null: return 0

DFS
    get the maxPathSum from the left path
    if left < 0: left = 0   // because it doesn't benefit the solution.
    get the maxPathSum from the right path
    if right < 0: right = 0

    // evaluate is a new max path can be made by linking the left and right
    max[0] = Math.max(max[0], left + root.val + right)

    // pass on only the paths that can be continued.
    return root.val + Math.max(left, right)
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
    maxPathSum(root) {
        if (root === null) {
            return 0
        }

        const max = [root.val]
        this.dfs(root, max)
        return max[0]
    }

    dfs(root, max) {
        if (root === null) {
            return 0
        }

        let left = Math.max(this.dfs(root.left, max), 0)
        let right = Math.max(this.dfs(root.right, max), 0)

        max[0] = Math.max(max[0], left + root.val + right)

        return root.val + Math.max(left, right)
    }
}
