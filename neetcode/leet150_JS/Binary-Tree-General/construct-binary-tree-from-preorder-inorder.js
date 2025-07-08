// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/?envType=study-plan-v2&envId=top-interview-150

/*
pre-order: process current node, explore left, and then right
inorder: explore left, process node, move right

Use pre-order for the order to choose the parent node of the subtree
Use inorder to determine the left and right subtree nodes

recursively build left and right subtree for the first value of the preorder arr
    base case 1: if preorder.length === 0 || inorder.length === 0
        return null

    create node for preorder[0]

    find the index of preorder[0] in inorder Array
    
    node.left = buildTree(preorder.slice(1, ind + 1) for the values in the left subtree, left subtree is inorder.slice(0, ind))
    node.right = buildTree(preorder.slice(ind + 1, end), inorder.slice(ind + 1, end))

    return node

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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (preorder.length === 0 || inorder.length === 0) {
        return null
    }

    const node = new TreeNode(preorder[0])
    const idx = inorder.indexOf(preorder[0])
    node.left = buildTree(preorder.slice(1, idx + 1), inorder.slice(0, idx))
    node.right = buildTree(preorder.slice(idx + 1), inorder.slice(idx + 1))

    return node
};