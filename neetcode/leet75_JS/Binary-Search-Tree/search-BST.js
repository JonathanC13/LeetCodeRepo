// https://leetcode.com/problems/search-in-a-binary-search-tree/description/?envType=study-plan-v2&envId=leetcode-75

/*
since binary search tree:
    1. the left child's value is less than the parent and the right child's value is greater than the parent.

recursively traverse until found or null

- Time: O(h)
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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    if (root === null) {
        return null
    }
    if (root.val === val) {
        return root
    }

    if (val < root.val) {
        return searchBST(root.left, val)
    } else if (val > root.val) {
        return searchBST(root.right, val)
    }

    return null
};