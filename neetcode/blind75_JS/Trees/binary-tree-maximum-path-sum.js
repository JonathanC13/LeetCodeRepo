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

    // brute
    getMaxPath(node) {
        if (node === null) {
            return 0
        }

        const leftSum = this.getMaxPath(node.left)
        const rightSum = this.getMaxPath(node.right)
        const pathSum = node.val + Math.max(leftSum, rightSum)

        return Math.max(0, pathSum)
    }

    dfs(root, result) {
        if (root === null) {
            return
        }

        const leftSum = this.getMaxPath(root.left)
        const rightSum = this.getMaxPath(root.right)

        result[0] = Math.max(result[0], leftSum + rightSum + root.val)

        this.dfs(root.left, result)
        this.dfs(root.right, result)
    }
    // /brute
    
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxPathSum(root) {
        // brute
        // const result = [Number.NEGATIVE_INFINITY]

        // this.dfs(root, result)

        // return result[0]
        // /brute

        const result = [root.val]
        this.dfsOpt(root, result)
        return result[0]
    }

    dfsOpt(node, result) {
        if (node === null) {
            return 0
        }

        // minimally 0 since don't want negative values. pruning the negative max coming upward
        const leftMax = Math.max(0, this.dfsOpt(node.left, result))
        const rightMax = Math.max(0, this.dfsOpt(node.right, result))

        // the result will include the parent node and either the left or right or none. They are excluded if the value is 0
        // The maxPathSum of the subtree represented by the current node
        result[0] = Math.max(result[0], node.val + leftMax + rightMax)
        // The current path for the parent can only be one way. so take the max of left and right
        return node.val + Math.max(leftMax, rightMax)
    }
}
