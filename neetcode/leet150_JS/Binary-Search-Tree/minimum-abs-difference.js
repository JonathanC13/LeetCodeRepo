// https://leetcode.com/problems/minimum-absolute-difference-in-bst/?envType=study-plan-v2&envId=top-interview-150

/*
maintain min diff = [pos infin]

recurisve dfs; params: keep track of left and right bound values, these will be the closest to the current node's value
    if node === null: return

    min[0] = min(min[0], abs(node.val - left), abs(node.val - right))

    go left. Left bound = same, right bound = node.val
    go right. left bound = node.val, right bound = same

    return

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

const dfs = function(node, left, right, min) {
    if (node === null) {
        return
    }

    min[0] = Math.min(min[0], Math.abs(left - node.val), Math.abs(right - node.val))
    dfs(node.left, left, node.val, min)
    dfs(node.right, node.val, right, min)

    return
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
    if (root === null) {
        return 0
    }

    const min = [Number.POSITIVE_INFINITY]
    dfs(root, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, min)
    return min[0]
};