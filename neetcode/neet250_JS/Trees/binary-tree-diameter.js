// https://neetcode.io/problems/binary-tree-diameter

/*
- edge case 1: if root === null: return 0

DFS the tree. 
At each node, it will record the diameter is contributes to and updates the overall diameter if greater. length of left + length of right
Since going for the longest, the recursive step returns the longer of the left and right lengths + 1(for the edge to itself to parent)

DFS(node, diameter) {
    if (node === null) {
        return 0
    }

    const leftLen = DFS(node.left, diameter)
    const rightLen = DFS(node.right, diameter)
    diameter[0] = Math.max(diameter[0], leftLen + rightLen)

    return Math.max(leftLen, rightLen) + 1

}

- Time: O(n). potential height of tree is n.
- Space: O(n). recursive stack
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
            return 0
        }

        const diameter = [0]
        this.dfs(root, diameter)
        return diameter[0]
    }

    dfs(node, diameter) {
        if (node === null) {
            return 0
        }

        const leftLen = this.dfs(node.left, diameter)
        const rightLen = this.dfs(node.right, diameter)

        diameter[0] = Math.max(diameter[0], leftLen + rightLen)

        return Math.max(leftLen, rightLen) + 1
    }
}
