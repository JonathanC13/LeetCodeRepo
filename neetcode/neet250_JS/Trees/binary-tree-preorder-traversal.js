// https://leetcode.com/problems/binary-tree-preorder-traversal

/*
Preorder is visit current node, traverse left subtree, traverse the right subtree

- edge case 1: if root === null: return []

*DFS
    - base case 1: if node === null: return

    add current node val to res

    traverse left subtree

    traverse right subtree

    return

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

 * @return {number[]}
 */
var preorderTraversal = function(root) {
    if (root === null) {
        return []
    }

    const res = []
    dfs(root, res)
    return res
};

var dfs = function(node, res) {
    if (node === null) {
        return
    }

    res.push(node.val)

    dfs(node.left, res)

    dfs(node.right, res)

    return
}