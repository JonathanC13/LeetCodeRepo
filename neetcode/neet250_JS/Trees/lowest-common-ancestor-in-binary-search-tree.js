// https://neetcode.io/problems/lowest-common-ancestor-in-binary-search-tree

/*
BST is sorted such that the value in the left child is less than the parent and the right is greater than the parent.

arrange so p is less than q.

- edge case 1: p.val <= root && q.val >= root: return root.val

DFS(root, p, q)

    if (p.val <= root.val && q.val >= root.val) {
        return root.val
    } else if (p.val < root.val && q.val < root.val) {
        return this.DFS(root.left, p, q)
    } else if (p.val > root.val && q.val > root.val) {
        return this.DFS(root.right, p, q)
    } else {
        return null
    }

- Time: O(h). h is height of tree
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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        if (!root || !p || !q) {
            return null;
        }

        if (Math.max(p.val, q.val) < root.val) {
            return this.lowestCommonAncestor(root.left, p, q)
        } else if (Math.min(p.val, q.val) > root.val) {
            return this.lowestCommonAncestor(root.right, p, q)
        } else {
            return root
        }
    }
}
