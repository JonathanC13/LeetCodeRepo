// https://neetcode.io/problems/kth-smallest-integer-in-bst

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

    DFS(node, kth) {
        if (node === null) {
            return
        }
        if (kth[0] < 0) {
            return
        }

        this.DFS(node.left, kth)
        kth[0] -= 1
        if (kth[0] === 0) {
            kth[1] = node.val
            return
        }
        this.DFS(node.right, kth)

        return
    }
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        if (root === null) {
            return null
        }

        const kth = [k, 0]
        this.DFS(root, kth)
        return kth[1]
    }
}
