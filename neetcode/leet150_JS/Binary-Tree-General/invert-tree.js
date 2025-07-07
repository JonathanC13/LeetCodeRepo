// https://leetcode.com/problems/invert-binary-tree/?envType=study-plan-v2&envId=top-interview-150

/*
recursively traverse and pre-order swap children
    base case 1: if root === null: return root

    const tmp = root.left
    root.left = root.right
    root.right = tmp

    traverse left and then right

    return root

- Time: O(n)    // n = number of nodes
- Space: O(h)   // h = height of the tree
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (root === null) {
        return root
    }

    const tmp = root.left
    root.left = root.right
    root.right = tmp

    invertTree(root.left)
    invertTree(root.right)

    return root
};