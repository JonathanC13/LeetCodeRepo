// https://neetcode.io/problems/binary-tree-from-preorder-and-inorder-traversal

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    DFS(preorder, inorder) {
        if (preorder.length === 0 || inorder.length === 0) {
            return null
        }

        const newNode = new TreeNode(preorder[0])
        const found = inorder.findIndex((elm) => {return elm === preorder[0]})

        newNode.left = this.DFS(preorder.slice(1, found + 1), inorder.slice(0, found))
        newNode.right = this.DFS(preorder.slice(found + 1), inorder.slice(found + 1))

        return newNode
    }
    /**
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        return this.DFS(preorder, inorder)
    }
}
