// https://leetcode.com/problems/symmetric-tree/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/*
- Time: O(n)    // n = number of nodes
- Space: O(h)   // h = height of the tree
*/
const dfs = function(n1, n2) {
    if (n1 === null && n2 === null) {
        return true
    }

    if (n1 !== null && n2 !== null && n1.val === n2.val) {
        return dfs(n1.left, n2.right) && dfs(n1.right, n2.left)
    } else {
        return false
    }
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (root === null) {
        return true
    }
    return dfs(root.left, root.right)
};