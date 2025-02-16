// https://leetcode.com/problems/binary-tree-inorder-traversal/

/*
Inorder is visit the left subtree first, then the current node, then the right subtree.

- edge case 1: if root === null: return root

*DFS 
    - base case 1: if node === null: return

    traverse the left subtree

    add current node to res

    traverse right subtree

    return

- Time: O(n). Height of the tree. potentially n
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
var inorderTraversal = function(root) {
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

    dfs(node.left, res)

    res.push(node.val)

    dfs(node.right, res)

    return
}