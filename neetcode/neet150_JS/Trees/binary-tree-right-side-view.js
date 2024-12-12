// https://neetcode.io/problems/binary-tree-right-side-view

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
    BFS(root) {
        if (root === null) {
            return []
        }

        const qu = new Deque()
        qu.pushBack(root)
        const res = []

        while (qu.size() !== 0) {
            const children = qu.size()
            let right = null

            for (let i = 0; i < children; i ++) {
                const node = qu.popFront()

                if (node) {
                    right = node.val
                    qu.pushBack(node.left)
                    qu.pushBack(node.right)
                }
            }

            if (right !== null) {
                res.push(right)
            }
        }

        return res
    }

    DFS(root, depth, res) {
        if (root === null) {
            return
        }

        if (depth === res.length) {
            res.push(root.val)
        }

        this.DFS(root.right, depth + 1, res)
        this.DFS(root.left, depth + 1, res)

        return
    }
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    rightSideView(root) {
        // return this.BFS(root)

        const res = []
        this.DFS(root, 0, res)
        return res
    }
}
