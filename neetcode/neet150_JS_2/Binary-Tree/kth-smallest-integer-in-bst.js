// https://neetcode.io/problems/kth-smallest-integer-in-bst

/*
Since binary search tree, the values are in order so the smallest is the deepest left

recursive dfs

    go left
    k[0] -= 1
    once k[0] === 0: return node.val

    go right

    return

- Time: O(h)
- Space: O(h)
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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        if (root === null || k <= 0) {
            return -1
        }

        const kArr = [k]
        const val = [-1]
        this.dfs(root, kArr, val)
        return val[0]
    }

    dfs(node, k, val) {
        if (node === null || k[0] === 0) {
            return
        }

        this.dfs(node.left, k, val)
        k[0] -= 1
        if (k[0] < 0) {
            return
        }
        if (k[0] === 0) {
            val[0] = node.val
            return
        }

        this.dfs(node.right, k, val)
    }
}
