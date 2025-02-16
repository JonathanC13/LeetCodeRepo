// https://neetcode.io/problems/invert-a-binary-tree

/*
Either can use DFS or BFS

Let's use BFS because visually makes sense

- edge case 1: if (root === null) { return root }
Enqueue the root

while qu is not empty
    pop a node

    swap the left and right children

    enqueue the non null children

- Time: O(n). n is the number of nodes to process
- Space: O(n). n is the number of nodes
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
        if (root === null) {
            return root
        }

        const qu = new Deque()
        qu.pushBack(root)
        while (qu.size() > 0) {
            const node = qu.popFront()

            const temp = node.left
            node.left = node.right
            node.right = temp

            if (node.left) {
                qu.pushBack(node.left)
            }
            if (node.right) {
                qu.pushBack(node.right)
            }
        }

        return root
    }
}
