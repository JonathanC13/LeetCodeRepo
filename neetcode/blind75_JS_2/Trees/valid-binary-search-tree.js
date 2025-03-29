// https://neetcode.io/problems/valid-binary-search-tree

/*
A valid binary search tree satisfies the following constraints:
    1. The left subtree of every node contains only nodes with keys less than the node's key.
    2. The right subtree of every node contains only nodes with keys greater than the node's key.
    3. Both the left and right subtrees are also binary search trees.

edge case 1: if !root: return true

for each node, need to provide its lower and upper bounds based on its parents
if violates the bounds, return false
only return true once branch terminates

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
     * @return {boolean}
     */
    isValidBST(root) {
        if (!root) {
            return true
        }

        return this.dfs(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY)
    }

    dfs(node, lowerBound, upperBound) {
        if (!node) {
            return true
        }
        if (node.val <= lowerBound || node.val >= upperBound) {
            return false
        }

        return this.dfs(node.left, lowerBound, node.val) && this.dfs(node.right, node.val, upperBound)
    }
}
