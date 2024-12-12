// https://neetcode.io/problems/level-order-traversal-of-binary-tree

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

        const qu = new Deque()
        qu.pushBack(root)

        const res = []

        while (qu.size() !== 0) {
            const subRes = []
            const children = qu.size()
            for (let i = 0; i < children; i ++) {
                const node = qu.popFront()

                if (node) {
                    subRes.push(node.val)
                    qu.pushBack(node.left)
                    qu.pushBack(node.right)
                }
            }

            if (subRes.length > 0) {
                res.push(subRes)
            }
        }

        return res
    }
}
