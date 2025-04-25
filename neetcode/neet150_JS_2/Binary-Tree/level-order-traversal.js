// https://neetcode.io/problems/level-order-traversal-of-binary-tree

/*
recursive dfs, pre-order adding to array

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
     * @return {number[][]}
     */
    levelOrder(root) {
        if (root === null) {
            return []
        }

        const arr = new Array()
        this.dfs(root, 0, arr)
        return arr
    }

    dfs(node, depth, arr) {
        if (node === null) {
            return null
        }
        if (depth >= arr.length) {
            arr.push([])
        }

        arr[depth].push(node.val)
        this.dfs(node.left, depth + 1, arr)
        this.dfs(node.right, depth + 1, arr)
    }
}
