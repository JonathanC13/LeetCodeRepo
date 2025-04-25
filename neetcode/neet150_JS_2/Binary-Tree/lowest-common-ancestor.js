// https://neetcode.io/problems/lowest-common-ancestor-in-binary-search-tree

/*
put the lower of p and q into p, so that direction of traversal is clear.

recursive dfs
    base case 1: if root === null: return null
    base case 1:
        if p === node.val || q === node.val || (p < node.val && p > node.val)
            return node.val

    if (q.val < node.val && p.val < node.val) 
        return go to left child
    else
        return go right

- Time: O(height)
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
        if (root === null) {
            return null
        }
        if (p.val > q.val) {
            const tmp = p
            p = q
            q = tmp
        }
        
        return this.dfs(root, p, q)
    }

    dfs(node, p, q) {
        if (node === null) {
            return null
        }
        if (p.val === node.val || q.val === node.val || (p.val < node.val && q.val > node.val)) {
            return node
        }

        if (p.val < node.val && q.val < node.val) {
            return this.dfs(node.left, p, q)
        } else {
            return this.dfs(node.right, p, q)
        }
    }
}
