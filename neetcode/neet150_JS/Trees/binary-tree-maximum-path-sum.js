// https://neetcode.io/problems/binary-tree-maximum-path-sum

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
    DFS(node, max) {
        if (node === null) {
            return 0
        }

        const leftMax = this.DFS(node.left, max)
        const rightMax = this.DFS(node.right, max)

        max[0] = Math.max(max[0], leftMax + node.val + rightMax)

        return Math.max(leftMax + node.val, rightMax + node.val, 0) // 0 to prune
    }
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxPathSum(root) {
        const max = [Number.NEGATIVE_INFINITY]

        this.DFS(root, max)
        return max[0]
    }
}
