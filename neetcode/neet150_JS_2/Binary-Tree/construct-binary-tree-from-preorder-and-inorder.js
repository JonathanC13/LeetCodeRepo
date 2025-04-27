// https://neetcode.io/problems/binary-tree-from-preorder-and-inorder-traversal
/*
The preorder is the order of the parents to create.
Find the preorder value in the inorder array, the left nodes are on the left and the right nodes are on the right.
recursive dfs the halves to continue contruction.

- Time: O(n)
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
            // no more nodes
            return null
        }

        // since traversing preorder left to right, each recursive dfs slice the preorder based on the half. So now can always pick index 0 for current node to build
        const curr = preorder[0]
        const newNode = new TreeNode(curr)

        const mid = inorder.findIndex((val) => val === curr)

        newNode.left = this.buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid))
        newNode.right = this.buildTree(preorder.slice(mid + 1, preorder.length), inorder.slice(mid + 1, inorder.length))

        return newNode
    }
}
