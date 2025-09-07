// https://leetcode.com/problems/maximum-depth-of-binary-tree/description/

/**
recursively traverse
    base case 1:
    if (node === null)
        return 0

    const left = traverse left subtree and get the depth
    const right = traverse right subtree

    return the max of (left, right) + 1 // 1 for the edge from this node to its parent.

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
var maxDepth = function(root) {
    if (root === null) {
        return 0
    }

    const left = maxDepth(root.left)
    const right = maxDepth(root.right)

    return Math.max(left, right) + 1
};