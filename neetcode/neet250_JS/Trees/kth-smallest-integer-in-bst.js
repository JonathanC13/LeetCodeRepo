// https://neetcode.io/problems/kth-smallest-integer-in-bst

/*
- edge case 1: if root === null: return null

traverse the BST inorder to subtract -1 from k. Once k === 0, return the node val.

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
        if (root === null) {
            return null
        }
        const l = [k]
        return this.dfs(root, l)
    }

    dfs(node, l) {
        if (node === null) {
            return null
        }

        const left = this.dfs(node.left, l)
        l[0] -= 1
        if (l[0] === 0) {
            return node.val
        }
        if (left !== null) {
            return left
        }
        const right = this.dfs(node.right, l)
        if (right !== null) {
            return right
        }

        return null
    }
}
