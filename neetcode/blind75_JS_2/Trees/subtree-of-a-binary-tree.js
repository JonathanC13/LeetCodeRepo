// https://neetcode.io/problems/subtree-of-a-binary-tree

/*
edge case 1: if root && !subRoot || !root && subRoot: return false

must treat each node in root as the parent of the subroot. Therefore check if subroot is same tree with the current root node, if any are true, return true

- Time: O(n * m)    // n is number of nodes in root, m is the number of nodes in subroot
- Space: O(n + m)
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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if (root && !subRoot || !root && subRoot) {
            return false
        }

        if (this.isSameTree(root, subRoot)) {
            return true
        }

        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot)
    }

    isSameTree(p, q) {
        if (!p && !q) {
            return true
        }

        if (p && q && p.val === q.val) {
            return this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right)
        } else {
            return false
        }
    }
}
