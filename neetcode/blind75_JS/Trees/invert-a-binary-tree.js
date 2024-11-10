// https://neetcode.io/problems/invert-a-binary-tree

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

    dfs(node) {
        if (node === null) {
            return null
        }

        this.dfs(node.left)
        this.dfs(node.right)

        const tmp = node.left
        node.left = node.right
        node.right = tmp

        return node
    }

    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root) {
        return this.dfs(root)
    }
}
