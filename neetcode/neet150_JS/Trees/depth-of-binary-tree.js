// https://neetcode.io/problems/depth-of-binary-tree

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
            return 0
        }

        const qu = new Deque()
        qu.pushBack([root, 1])

        let maxDepth = 1

        while (qu.size() !== 0) {
            const itm = qu.popFront()

            if (itm[0].left !== null) {
                qu.pushBack([itm[0].left, itm[1] + 1])
                maxDepth = Math.max(maxDepth, itm[1] + 1)
            }
            if (itm[0].right !== null) {
                qu.pushBack([itm[0].right, itm[1] + 1])
                maxDepth = Math.max(maxDepth, itm[1] + 1)
            }
        }

        return maxDepth
    }

    DFS(root) {
        if (root === null) {
            return 0
        }

        const leftDep = this.DFS(root.left)
        const rightDep = this.DFS(root.right)

        return Math.max(leftDep, rightDep) + 1
    }

    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {
        // return this.BFS(root)
        return this.DFS(root)
    }
}
