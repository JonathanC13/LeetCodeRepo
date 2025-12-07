// https://leetcode.com/problems/binary-tree-maximum-path-sum/

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
    if (root === null) {
        return 0
    }

    let max = [root.val]    // need external tracking since max path can be a sub tree and each recursive call returns the max of a branch so that the current node can try to get a better max
    dfs(root, max)
    return max[0]
};

const dfs = (node, max) => {
    if (node === null) {
        return 0
    }

    const leftMax = dfs(node.left, max)
    const rightMax = dfs(node.right, max)
    max[0] = Math.max(max[0], leftMax + node.val, rightMax + node.val, leftMax + rightMax + node.val)

    return Math.max(leftMax + node.val, rightMax + node.val, 0) // path can only have a node once, so return max branch + current node. Or return 0 if others negative since desire max path reset to 0.
}