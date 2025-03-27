// https://neetcode.io/problems/invert-a-binary-tree

/*
edge case 1: if root === null: return root

method 1 DFS

recursively traverse to the last node on the left, then parent, and then right
when a call returns its left and right, swap them.

- Time: O(n)
- Space: O(n)

method 2 BFS
    Use queue to track the nodes left to be processed.

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
     * @return {TreeNode}
     */
    invertTree(root) {
        // return this.dfs(root)
        return this.bfs(root)
    }

    dfs(root) {
        if (root === null) {
            return null
        }

        const left = this.dfs(root.left)

        const right = this.dfs(root.right)

        root.left = right
        root.right = left

        return root
    }

    bfs(root) {
        if (root === null) {
            return null
        }

        const queue = new Deque()
        queue.pushBack(root)

        while (queue.size() > 0) {
            const currNode = queue.popFront()

            // swap
            const tmp = currNode.left
            currNode.left = currNode.right
            currNode.right = tmp

            // enqueue
            if (currNode.left !== null) {
                queue.pushBack(currNode.left)
            }

            if (currNode.right !== null) {
                queue.pushBack(currNode.right)
            }
        }

        return root
    }
}
