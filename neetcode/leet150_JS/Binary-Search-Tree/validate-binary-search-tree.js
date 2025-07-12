// https://leetcode.com/problems/validate-binary-search-tree/?envType=study-plan-v2&envId=top-interview-150

/*
dfs; maintain the left bound and right bounds for the current node
    if node === null: return true
    if node.val <= lower || node.val >= upper: return false     // no dups and strictly less or greater for valid BST

    l = dfs(node.left, lower, node.val) // update upper, since BST the left child is < parent
    r = dfs(node.right, node.val, upper)

    return l && r

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

const dfs = (node, lower, upper) => {
    if (node === null) {
        return true
    }
    if (node.val <= lower || node.val >= upper) {
        return false
    }

    return dfs(node.left, lower, node.val) && dfs(node.right, node.val, upper)
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    if (root === null) {
        return true
    }
    return dfs(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY)
};