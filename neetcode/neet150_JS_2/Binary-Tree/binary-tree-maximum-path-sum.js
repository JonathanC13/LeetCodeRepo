// https://neetcode.io/problems/binary-tree-maximum-path-sum

/*
save globalMax = [Number.NEGATIVE_INFINITY]

recursive dfs
    if (node === null) {
        return 0
    }

    // when including the node.val, if left or right negative negate it by Math.max to 0 so that it does not affect node.val negatively
    left = Math.max(go left, 0)
    right = Math.max(go right, 0)

    globalMax = Math.max(globalMax, left + right + node.val)

    // since path cannot have the same node twice, return the largest of left, right
    return node.val + Math.max(left, right)

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
        if (root === null) {
            return -1
        }

        const globalMax = [Number.NEGATIVE_INFINITY]
        this.dfs(root, globalMax)
        return globalMax[0]
    }

    dfs(node, max) {
        if (node === null) {
            return 0
        }

        const left = Math.max(this.dfs(node.left, max), 0)
        const right = Math.max(this.dfs(node.right, max), 0)

        max[0] = Math.max(max[0], left + right + node.val)

        return Math.max(left, right) + node.val
    }
}
