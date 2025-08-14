// https://leetcode.com/problems/validate-binary-search-tree/description/

/**
recursive dfs
    ** left bound for current node
    ** right bound for current node

    base case 1: if (node.val <= left bound || node.val >= right bound) {
        return false
    }

    const left = rec(node.left, left, node.val)   // the left child is right bounded by its parent's value
    if (left === false) {
        return false
    }
    return rec(node.right, node.val, right)

- Time: O(n)    //n = all nodes
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
 * @return {boolean}
 */
var isValidBST = function(root) {
    return rec(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY)
};

const rec = (node, left, right) => {
    if (node === null) {
        return true
    }
    if (node.val <= left || node.val >= right) {
        return false
    }

    return rec(node.left, left, node.val) && rec(node.right, node.val, right)
}