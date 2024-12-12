// https://neetcode.io/problems/valid-binary-search-tree

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

        const qu = new Deque()
        qu.pushBack([root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY])

        while (qu.size() !== 0) {
            const [node, leftB, rightB] = qu.popFront()

            // eval bounds
            if (!(node.val > leftB && node.val < rightB)) {
                return false
            }

            if (node.left !== null) {
                qu.pushBack([node.left, leftB, node.val])
            }

            if (node.right !== null) {
                qu.pushBack([node.right, node.val, rightB])
            }
        }

        return true
    }
}
