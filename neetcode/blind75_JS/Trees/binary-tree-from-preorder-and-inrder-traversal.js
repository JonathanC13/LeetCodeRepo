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

    dfs(limit, preorder, inorder, preIdx, inIdx, preLen) {
        if (preIdx[0] >= preLen) {
            return null
        }

        if (inorder[inIdx[0]] === limit) {
            inIdx[0] += 1
            return null
        }
        
        const node = new TreeNode(preorder[preIdx[0]])
        preIdx[0] += 1
        node.left = this.dfs(node.val, preorder, inorder, preIdx, inIdx, preLen)
        node.right = this.dfs(limit, preorder, inorder, preIdx, inIdx, preLen)
        return node
    }

    /**
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        if (preorder.length !== inorder.length) {
            return null
        }

        const preIdx = [0]
        const inIdx = [0]
        const preLen = preorder.length

        return this.dfs(Math.POSITIVE_INFINITY, preorder, inorder, preIdx, inIdx, preLen)

        // DFS brute
        // if (!preorder.length || !inorder.length) {
        //     return null
        // }

        // const root = new TreeNode(preorder[0])
        // const mid = inorder.findIndex((val) => (val === root.val))
        // root.left = this.buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid))
        // root.right = this.buildTree(preorder.slice(mid+1), inorder.slice(mid+1))

        // return root
    }
}
