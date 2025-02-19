// https://neetcode.io/problems/binary-tree-right-side-view

/*
- edge case 1: if root === null: return []

DFS or BFS

Let's do DFS
Essentially traverse by level, traverse right child first, if first node of a new level add to result

    if (node === null) {
        return
    }

    if (levels.length === depth) {
        res.push(node.val)
    }

    traverse right child, depth + 1
    traverse left child, depth + 1

    return

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
     * @return {number[]}
     */
    rightSideView(root) {
        if (root === null) {
            return []
        }

        const res = []
        this.dfs(root, 0, res)
        
        return res
    }

    dfs(node, depth, res) {
        if (node === null) {
            return
        }
        if (res.length === depth) {
            res.push(node.val)
        }

        this.dfs(node.right, depth + 1, res)
        this.dfs(node.left, depth + 1, res)

        return
    }
}
