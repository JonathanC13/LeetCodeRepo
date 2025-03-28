// https://neetcode.io/problems/lowest-common-ancestor-in-binary-search-tree
/*
edge case 1: if !root || !p || !q: return null

Binary search tree is defined as:
    1. the parent node value is greater than its left child
    2. the parent node value is less than its right child
    3. Traversing it inorder will provide the values in non descending order.

Before starting, assign the lower value node in p and the greater value node in q so that it is consistent.

recursively traverse left node, parent, then right node
    base case 1: if root === null: return null

    determine which child to traverse to by comparing p and q to the current node.
    if (q.val < root.val && p.val < root.val) {
        return this.dfs(root.left, p, q)
    } else if (q.val > root.val && p.val > root.val) {
        return this.dfs(root.right, p, q)
    } else {
        return root
    }

- Time: O(h). h in this case is the max depth
- Space: O(h)

*BFS
    - Time: O(h). h in this case is the max depth
    - Space: O(1)
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
        if (p.val > q.val) {
            const tmp = p
            p = q
            q = tmp
        }

        // return this.dfs(root, p, q)
        return this.bfs(root, p, q)
    }

    dfs(root, p, q) {
        if (!root || !p || !q) {
            return null
        }

        if (q.val < root.val && p.val < root.val) {
            return this.dfs(root.left, p, q)
        } else if (q.val > root.val && p.val > root.val) {
            return this.dfs(root.right, p, q)
        } else {
            return root
        }
    }

    bfs(root, p, q) {
        while (root) {
            if (q.val < root.val && p.val < root.val) {
                root = root.left
            } else if (q.val > root.val && p.val > root.val) {
                root = root.right
            } else {
                return root
            }
        }

        return null
    }
}
