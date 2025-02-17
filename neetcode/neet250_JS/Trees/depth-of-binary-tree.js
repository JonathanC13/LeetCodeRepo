// https://neetcode.io/problems/depth-of-binary-tree

/*
- edge case 1: if root === null: return 0

Use BFS and each enqueued node has it's depth

- Time: O(n). will have to process each node
- Space: O(n). for queue
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
     * @return {number}
     */
    maxDepth(root) {
        if (root === null) {
            return 0
        }

        let maxDepth = 0
        const qu = new Deque()
        qu.pushBack([root, 1])

        while (qu.size() > 0) {
            const [node, depth] = qu.popFront()

            maxDepth = Math.max(maxDepth, depth)

            if (node.left) {
                qu.pushBack([node.left, depth + 1])
            }
            if (node.right) {
                qu.pushBack([node.right, depth + 1])
            }
        }

        return maxDepth
    }
}
