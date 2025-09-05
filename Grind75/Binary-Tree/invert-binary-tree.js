// https://leetcode.com/problems/invert-binary-tree/description/

/*
Invert means swap the left and right children.

Recursively traverse and in pre-order swap the children

- Time: O(n)    // n since visit every node
- Space: O(n)   // recursive stack
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