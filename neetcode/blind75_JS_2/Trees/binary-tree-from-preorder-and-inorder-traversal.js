// https://neetcode.io/problems/binary-tree-from-preorder-and-inorder-traversal

/*
if (preorder.length === 0 || inorder.length === 0) {return null}

preIdx = [0]    // values in the preorder are the parents in order left, then right

recursive
    if (preIdx[0] >= preOrder.length) {
        return null
    }
    if (inorder.length === 0) {
        return null
    }

    newNode = new ListNode(preorder[preIdx[0]])
    find the preorder[preIdx] value in the inorder Array, it will split the Array into what nodes are in the left and right of this node.
    preIdx[0] + 1
    newNode.left = this.dfs(preIdx[0], preorder, inorder.slice(0, mid))

    newNode.right = this.dfs(preIdx[0], preorder, inorder.slice(mid + 1))

    return newNode

- Time: O(n^2). n = preorder.length
- Space: O(n)
*/

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
    /**
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        if (preorder.length === 0 || inorder.length === 0) {
            return null
        }

        // const preIdx = [0]
        return this.dfs(preorder, inorder)
    }

    dfs(preorder, inorder) {
        // console.log(preIdx, preorder, inorder)
        // if (preIdx[0] >= preorder.length) {
        //     return null
        // }
        if (preorder.length === 0 || inorder.length === 0) {
            return null
        }
        const newNode = new TreeNode(preorder[0])
        const mid = inorder.findIndex((v) => v === preorder[0])
        // preIdx[0] += 1

        newNode.left = this.dfs(preorder.slice(1, mid + 1), inorder.slice(0, mid))
        newNode.right = this.dfs(preorder.slice(mid + 1), inorder.slice(mid + 1))

        return newNode
    }
}
