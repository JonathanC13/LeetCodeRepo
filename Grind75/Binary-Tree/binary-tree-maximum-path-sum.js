// https://leetcode.com/problems/binary-tree-maximum-path-sum/

/**
main
    create var to hold global maxPathSum[0] = neg infini

    dfs(root, maxPathSum)

    return maxPathSum[0]

dfs
    base case 1:
    if (node === null)
        return 0

    const left = max(get the maxPathSum of the left subtree, 0)  // max 0 since if both left and right are negative, reset to 0 + node.val since want to progress to max positive number
    const right = max(get the maxPathSum of the right subtree, 0)

    // save globally since the propagate value to parent is different
    maxPathSum[0] = Math.max(maxPathSum[0], left + right + node.val)

    return Math.max(left, right) + node.val
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    const max = [Number.NEGATIVE_INFINITY]

    dfs(root, max)
    return max[0]
};

const dfs = (node, max) => {
    if (node === null) {
        return 0
    }
    
    const left = Math.max(0, dfs(node.left, max))
    const right = Math.max(0, dfs(node.right, max))

    max[0] = Math.max(max[0], left + right + node.val)

    return Math.max(left, right) + node.val
}