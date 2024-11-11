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
        if (root === null){
            return []
        }

        const qu = [root]
        const res = []

        while (qu.length) {
            const subList = []
            let children = qu.length
            for (let i = 0; i < children; i ++) {
                let node = qu.shift()
                subList.push(node.val)

                if (node.left) {
                    qu.push(node.left)
                }

                if (node.right) {
                    qu.push(node.right)
                }
            }
            
            res.push(Array.from(subList))
            subList.splice(0)
        }
        return res
    }
}
