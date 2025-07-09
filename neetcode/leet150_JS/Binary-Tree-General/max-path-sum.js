// https://leetcode.com/problems/binary-tree-maximum-path-sum/description/?envType=study-plan-v2&envId=top-interview-150

/*
maintain global max sum seen, [Number.NEGATIVE_INFINITY]

recursive dfs; since path does not need to include root, add to sum in post order
    base case 1: if node === null: return 0

    leftSum = dfs(node.left, maxSum)
    rightSum = dfs(node.right, maxSum)

    // current path is the leftSum + node.val + rightSum
    // also consider only leftSum + node.val, rightSum + node.val, and even node.val itself
    maxSum[0] = max(maxSum[0], leftSum + rightSum + node.val, leftSum + node.val, rightSum + node.val, node.val)

    // since path cannot use the same node twice, choose to return the max of left or right + node.val so that node.val is used only once
    // also if node.val itself is greater than including leftSum or rightSum
    return max(max(leftSum, rightSum) + node.val, node.val)

- Time: O(n)
- Space: O(h)

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const dfs = (node, maxSum) => {
    if (node === null) {
        return 0
    }

    let leftSum = dfs(node.left, maxSum)
    let rightSum = dfs(node.right, maxSum)

    maxSum[0] = Math.max(maxSum[0], leftSum + rightSum + node.val, leftSum + node.val, rightSum + node.val, node.val)

    return Math.max(Math.max(leftSum, rightSum) + node.val, node.val)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    if (root === null) {
        return 0
    }

    const maxSum = [Number.NEGATIVE_INFINITY]
    dfs(root, maxSum)
    return maxSum[0]
};