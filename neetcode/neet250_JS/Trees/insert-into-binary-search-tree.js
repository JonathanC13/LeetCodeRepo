// https://leetcode.com/problems/insert-into-a-binary-search-tree/

/*
Inserting into a BST is always an added leaf.

- edge case 1: if root === null: return new TreeNode(val)

Use DFS to find the leaf position to be added to.

DFS
    if (node === null) {
        return new TreeNode(val)
    }

    // determine which node to traverse to.
    if (val > node.val)
        // go right and assign
        node.right = this.DFS(node.right, val)
    else if (val < node.val)
        // left
        node.left = this.dfs(node.left, val)
    
    return node

- Time: O(h). h is height of the tree
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
var insertIntoBST = function(root, val) {
    if (root === null) {
        return new TreeNode(val)
    }

    return dfs(root, val)
};

var dfs = function(node, val) {
    if (node === null) {
        return new TreeNode(val)
    }

    if (val > node.val) {
        node.right = dfs(node.right, val)
    } else if (val < node.val) {
        node.left = dfs(node.left, val)
    }

    return node
}