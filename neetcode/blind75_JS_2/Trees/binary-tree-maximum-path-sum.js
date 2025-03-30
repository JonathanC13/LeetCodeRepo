// https://neetcode.io/problems/binary-tree-maximum-path-sum

/*
edge case 1: if !root: return 0

save max externally, initally max = [root.val]

recursive dfs
    base case 1: if !root: return 0

    const leftSum = this.dfs(root.left)
    const rightSum = this.dfs(root.right)

    max[0] = max(max[0], leftSum + root.val, rightSum + root.val, leftSum + rightSum + root.val)

    return max(leftSum + root.val, rightSum + root.val, 0)     // max 0 since if negative, disregard it.

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
    maxPathSum(root) {
        if (!root) {
            return 0
        }

        const max = [root.val]
        this.dfs(root, max)
        return max[0]
    }

    dfs(root, max) {
        if (!root) {
            return 0
        }

        const leftSum = this.dfs(root.left, max)
        const rightSum = this.dfs(root.right, max)

        max[0] = Math.max(max[0], leftSum + root.val, rightSum + root.val, leftSum + rightSum + root.val)

        return Math.max(0, leftSum + root.val, rightSum + root.val)
    }
}
