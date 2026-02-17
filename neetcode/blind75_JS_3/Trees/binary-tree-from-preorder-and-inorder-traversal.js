// https://neetcode.io/problems/binary-tree-from-preorder-and-inorder-traversal/question

/**
 * 1. Assumptions
 *  1. preorder and inorder represent the same Tree
 * 
 * 2. input validation
 *  1. preorder and inorder
 *      - preorder instanceof Array
 *      - preorder.length === inorder.length
 * 
 * 3. time and space constaints
 *  BTTC: O(n)  // n = # of nodes
 *  Space: O(n)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if preorder.length === 0 || inorder.length === 0: return null
 * 
 *  test cases
 *  1. balanced tree
 *      inputs
 *          preorder = [2,1,3]
 *          inorder = [1,2,3]
 *      expected output
 *          level order
 *          [2,1,3]
 * 
 *  2. imbalanced
 *      inputs
 *          preorder = [1,2,3,4]
 *          inorder [2,1,3,4]
 *      expected output
 *          level order = [1,2,3,n,n,n,4]
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  iterate preorder as the node to be created
 *      find the index i of current node in inorder
 *      the node's left subtree nodes are
 *          preorder from 1 to < i + 1
 *          inorder 0 to < i
 *      node.left = rec(preorder[1,i+1], inorder[])
 * 
 *      right subtree
 *      node.right = rec(preorder[i + 1,], inorder[i+1,])
 *  return current node. Since creating in preorder, returning this node is the child of the caller
 * 
 * 7. algos
 *  - preorder and inorder traversal
 * 
 * 8. data structures
 *  - Binary tree
 * 
 * 9. complexity
 *  Time: O(n)
 *  Space: O(n)
 * 
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

        const node = new TreeNode(preorder[0])
        const i = inorder.indexOf(preorder[0])

        if (i === -1) {return null}

        node.left = this.buildTree(preorder.slice(1, i+1), inorder.slice(0,i))
        node.right = this.buildTree(preorder.slice(i+1), inorder.slice(i+1))

        return node
    }
}
