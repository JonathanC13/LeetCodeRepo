// https://neetcode.io/problems/valid-binary-search-tree

/*
A binary search tree is the left subtree is a lesser value than the parent and the right subtree is greater
For every level need to keep track of the left and right bounds of the subtree

- edge case 1: if root === null: return true

initial range for the root node is (Number.NEGATIVE_INFINITY to Number.POSITIVE_INFINITY)

*DFS(node, leftLimit, rightLimit) {
    if (node === null) {
        return true
    }
    if (node.val <= leftLimit || node.val >= rightLimit) {
        return false
    }

    // when going left, the rightLimit is adjusted to the parent's value
    const left = this.DFS(node.left, leftLimit, node.val)

    if (!left) {return false}

    // when going right, leftLimit is the parent's value
    const right = this.DFS(node.right, node.val, rightLimit)

    if (!right) {return false}

    return left && right
}

- Time: O(n). n nodes
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
        if (root === null) {
            return true
        }

        return this.dfs(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY)
    }

    dfs(node, left, right) {
        if (node === null) {
            return true
        }
        if (node.val <= left || node.val >= right) {
            return false
        }

        const leftValid = this.dfs(node.left, left, node.val)
        if (!leftValid) { return false }

        const rightValid = this.dfs(node.right, node.val, right)
        if (!rightValid) { return false }

        return leftValid && rightValid
    }
}
