// https://neetcode.io/problems/count-good-nodes-in-binary-tree

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
    DFS(root, max, good) {
        if (root === null) {
            return
        }

        if (root.val >= max) {
            good[0] += 1
        }

        this.DFS(root.left, Math.max(max, root.val), good)
        this.DFS(root.right, Math.max(max, root.val), good)

        return
    }
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    goodNodes(root) {
        const good = [0]
        this.DFS(root, Number.NEGATIVE_INFINITY, good)
        return good[0]
    }
}
