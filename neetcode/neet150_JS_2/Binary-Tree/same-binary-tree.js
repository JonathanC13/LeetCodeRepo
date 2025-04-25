// https://neetcode.io/problems/same-binary-tree

/*
tree is the same if node values are the same and terminate at the same leaf.

recursive dfs to traverse children
    base case 1:
        if node1 === null and node2 === null:
            return true
    base case 2: 
        if p === null || q === null || p.val !== q.val
            return false

    const left = traverse left child
    if (left === false) {
        return false
    }

    const right = travere right child
    if (right === false) {
        return false
    }

    return left && right

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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        if (p === null && q === null) {
            return true
        }
        if (p === null || q === null || p.val !== q.val) {
            return false
        }

        const left = this.isSameTree(p.left, q.left)
        if (!left) {
            return false
        }

        const right = this.isSameTree(p.right, q.right)
        if (!right) {
            return false
        }

        return left && right
    }
}
