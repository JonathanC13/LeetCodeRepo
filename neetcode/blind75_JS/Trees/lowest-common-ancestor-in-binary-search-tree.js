// https://neetcode.io/problems/lowest-common-ancestor-in-binary-search-tree

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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        if (root === null) {
            return root
        }
        
        // iteration
        while (root) {
            if (p.val < root.val && q.val < root.val) {
                root = root.left
            } else if (p.val > root.val && q.val > root.val) {
                root = root.right
            } else {
                return root
            }
        }

        //Recur
        // if (p.val <= root.val && q.val >= root.val || q.val <= root.val && p.val >= root.val) {
        //     return root
        // }
        
        // if (p.val < root.val && q.val < root.val) {
        //     return this.lowestCommonAncestor(root.left, p, q)
        // } else if (p.val > root.val && q.val > root.val) {
        //     return this.lowestCommonAncestor(root.right, p, q)
        // }
        // return null
    }
}
