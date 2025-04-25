// https://neetcode.io/problems/subtree-of-a-binary-tree

/*
At every node in root, must traverse to compare with subroot tree.

- Time: O(n * m)    // n = nodes of root, m = nodes of subroot
- Space: O(n * m)
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
        if (root === null) {
            return false
        }
        if (this.isSameTree(root, subRoot)) {
            return true
        }

        return (this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot))
    }

    isSameTree(p, q) {
        if (p === null && q === null) {
            return true
        }

        if (p && q && p.val === q.val) {
            return (
                this.isSameTree(p.left, q.left) &&
                this.isSameTree(p.right, q.right)
            )
        } else {
            return false
        }
    }
}
