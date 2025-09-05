// https://leetcode.com/problems/balanced-binary-tree/description/

/**
height balanced is where the left and right subtree of every pair are max 1 depth difference

recursive traversal, post order compare depths, return -1 if not balanced else max(left, right) + 1 to pass to parent the depth on this subtree
    base case 1:
    if (node === null) {
        return 0    // depth 0 since at end
    }

    const left = dfs(node.left)
    if (left === -1) {
        return -1
    }
    const right = dfs(node.right)
    if (right === -1 || abs(left - right) > 1) {
        return -1
    }

    return max(left, right) + 1

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
 * @return {boolean}
 */
var isBalanced = function(root) {
    const res = dfs(root)
    if (res === -1) {
        return false
    } else {
        return true
    }
};

const dfs = function(node) {
    if (node === null) {
        return 0
    }

    const left = dfs(node.left)
    if (left === -1) {
        return -1
    }
    const right = dfs(node.right)
    if (right === -1 || Math.abs(left - right) > 1) {
        return -1
    }

    return Math.max(left, right) + 1
}