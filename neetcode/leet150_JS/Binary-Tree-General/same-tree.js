// https://leetcode.com/problems/same-tree/description/?envType=study-plan-v2&envId=top-interview-150

/*
recursive traverse while comparing
    base case 1: if (p === null && q === null) {
        return true
    }

    if (p !== null and q !== null and p val === q val)
        continue with left and right
    else
        return false

- Time: O(n)    // n = number of nodes in the smallest tree
- Space: O(h)   // h = min height of the smallest tree
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