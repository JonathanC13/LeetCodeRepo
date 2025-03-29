// https://neetcode.io/problems/kth-smallest-integer-in-bst

/*
edge case 1: if !root: return null

kth = [k]
val = [null]

recursively traverse and reduce value of k inorder.
Once k === 0, return

base case 1: if (!root) return 
base case 2: if (kth[0] === 0) return

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
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        if (!root) {
            return null
        }

        const kth = [k]
        const val = [root.val]

        this.dfs(root, kth, val)
        return val[0]
    }

    dfs(root, kth, val) {
        if (!root) {
            return
        }
        if (kth[0] === 0) {
            return
        }

        this.dfs(root.left, kth, val)

        kth[0] -= 1
        if (kth[0] === 0) {
            val[0] = root.val
            return
        }

        this.dfs(root.right, kth, val)

        return
    }
}
