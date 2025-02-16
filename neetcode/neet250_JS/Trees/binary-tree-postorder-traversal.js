// https://leetcode.com/problems/binary-tree-postorder-traversal/
/*
Postorder traversal is traverse the left subtree, traverse the right subtree, visit the current node

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
var postorderTraversal = function(root) {
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
    dfs(node.right, res)
    res.push(node.val)

    return
}
