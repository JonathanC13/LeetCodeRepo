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

    find(node, k) {
        if (node === null) {
            return null
        }

        let leftRet = this.find(node.left, k)
        if (leftRet !== null) {
            return leftRet
        }

        k[0] -= 1
        if (k[0] === 0) {
            return node.val
        }

        let rightRet = this.find(node.right, k)
        if (rightRet !== null) {
            return rightRet
        }

        return null
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
        const kArr = [k]

        return this.find(root, kArr)
    }
}
