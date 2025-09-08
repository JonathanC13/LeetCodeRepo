// https://leetcode.com/problems/same-tree/description/

/**
traverse
    base case 1:
    if p === null && q === null
        // both trees terminated at same node
        return true

    base case 2:
    if (p === null || q === null || p.val !== q.val) {
        // either one is null and the other is not or the values are not the same
        return false
    }

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)   // only same tree is at every node the left and right subtree are same tree.

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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if (p === null && q === null) {
        return true
    }

    if (p !== null && q !== null && p.val === q.val) {
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
    } else {
        return false
    }
};