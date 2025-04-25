// https://neetcode.io/problems/binary-tree-diameter

/*
Save global diameter that is saves the max diameter seen.

Number of edges!

recursive dfs
Each node calcs and saves its diameter left depth + right depth
return to its parent the max of left and right since need distance to furthest + 1 for its edge to child.

- Time: O(n)
- Spcae: O(n)
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
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        if (root === null) {
            return root
        }

        const diameter = new Array(1).fill(0)
        this.dfs(root, diameter)
        return diameter[0]

    }

    dfs(root, diameter) {
        if (root === null) {
            return root
        }

        const leftDepth = this.dfs(root.left, diameter)
        const rightDepth = this.dfs(root.right, diameter)

        diameter[0] = Math.max(diameter[0], leftDepth + rightDepth)

        return Math.max(leftDepth, rightDepth) + 1
    }
}
