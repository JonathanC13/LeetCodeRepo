// https://neetcode.io/problems/valid-binary-search-tree

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

    // DFS
    checkValid(node, left, right) {
        if (node === null) {
            return true
        }
        if (left >= node.val || right <= node.val) {
            return false
        }

        return this.checkValid(node.left, left, node.val) && this.checkValid(node.right, node.val, right)
    }
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isValidBST(root) {
        if (root === null) {
            return true
        }

        // DFS
        // return this.checkValid(root, Math.NEGATIVE_INFINITY, Math.POSITIVE_INFINITY)
    
        // BFS
        const qu = [[root, Math.NEGATIVE_INFINITY, Math.POSITIVE_INFINITY]]
        while (qu.length) {
            let elem = qu.shift()

            if (elem[1] >= elem[0].val || elem[2] <= elem[0].val) {
                return false
            }

            if (elem[0].left) {
                qu.push([elem[0].left, elem[1], elem[0].val])
            }

            if (elem[0].right) {
                qu.push([elem[0].right, elem[0].val, elem[2]])
            }
        }

        return true
    
    }
}
