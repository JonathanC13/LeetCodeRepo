// https://neetcode.io/problems/binary-tree-diameter

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

    DFS(root, maxDia) {
        if (root === null) {
            return 0
        }

        const leftDep = this.DFS(root.left, maxDia)
        const rightDep = this.DFS(root.right, maxDia)

        maxDia[0] = Math.max(maxDia[0], leftDep + rightDep)

        return Math.max(leftDep, rightDep) + 1
    }
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        if (root === null) {
            return 0
        }
        
        const maxDia = [0]
        
        this.DFS(root, maxDia)
        return maxDia[0]
    }
}
