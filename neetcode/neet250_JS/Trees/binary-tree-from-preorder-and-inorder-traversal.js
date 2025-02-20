// https://neetcode.io/problems/binary-tree-from-preorder-and-inorder-traversal

/*
Preorder is the nodes from the left subtree first so we can use them as the parent of the left and right nodes in inorder

example: preorder = [1,2,3,4], inorder = [2,1,3,4]
1. eval idx 0 in preorder which is value 1
2. search for 1's in the inorder, the left indexes are the nodes that exist on the left of it and the right indexes are nodes that exist on the right
3. the node's left child is the indexOf(1) - 1 in inorder and the right child is indexOf(1) + 1
4. node.left = this.dfs(preorder.slice(0, indexOf(1) + 1), inorder.slice(0, indexOf(1))). because the preorders that can exist in the left are the next element to the mid
5. node.right = this.dfs(preorder.slice(preorder.indexOf(indexOf(1) +1), inorder.slice(indexOf(1) + 1))
6. return node

- Time: O(n). n, number of values in preorder/inorder. 
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
        if (preorder.length === 0) {
            return null
        }

        return this.dfs(preorder, inorder)
    }

    dfs(preorder, inorder) {
        if (preorder.length === 0 || inorder.length === 0) {
            return null
        }

        const newNode = new TreeNode(preorder[0])
        const inOrdIdx = inorder.indexOf(preorder[0])
        
        newNode.left = this.dfs(preorder.slice(1, inOrdIdx + 1), inorder.slice(0, inOrdIdx))
        
        newNode.right = this.dfs(preorder.slice(inOrdIdx + 1), inorder.slice(inOrdIdx + 1))
        
        return newNode
    }
}
