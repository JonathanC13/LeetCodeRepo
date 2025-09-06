// https://leetcode.com/problems/diameter-of-binary-tree/description/

/**
recursive traversal post order eval depth

main
    diameter = [0]

    dfs(root, diameter)
    return diameter[0]

* {TreeNode} root
* {Array} diameter
dfs
    base case 1:
    if (root === null)
        return 0

    const left = dfs(root.left, diameter)
    const right = dfs(root.right, diameter)

    // record if current diameter > current diameter
    diameter[0] = max(diameter, left + right)

    // to progress toward a longer diameter, return the max of the left and right
    return max(left, right) + 1 // + 1 for the edge from this node to parent

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
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    const diameter = [0]
    dfs(root, diameter)
    return diameter[0]
};

const dfs = (node, diameter) => {
    if (node === null) {
        return 0
    }

    const l = dfs(node.left, diameter)
    const r = dfs(node.right, diameter)

    diameter[0] = Math.max(diameter[0], l + r)
    return Math.max(l, r) + 1
}