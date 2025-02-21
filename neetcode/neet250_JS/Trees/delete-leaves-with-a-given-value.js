// https://leetcode.com/problems/delete-leaves-with-a-given-value/description/

/*
- edge case 1: if root === null: return root

DFS to the leaf Post order and if leaf (left === null and right === null) and val === target then return null to delete and assign parent node.

- Time: O(n)
- Space: O(n)

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
 * @param {number} target
 * @return {TreeNode}
 */
var removeLeafNodes = function(root, target) {
    if (root === null) {
        return root
    }

    const left = removeLeafNodes(root.left, target)
    root.left = left
    const right = removeLeafNodes(root.right, target)
    root.right = right

    if (!left && !right && root.val === target) {
        return null
    } else {
        return root
    }
};