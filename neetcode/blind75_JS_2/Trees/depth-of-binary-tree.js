// https://neetcode.io/problems/depth-of-binary-tree

/*
edge case 1: if root === null: return 0

method 1: dfs

recursively traverse the left child, parent, thn right child
    when node is null return 0
    when a node's children return, get the max depth of the left and right child then + 1 for itself. This is the max depth from this node and below. Return to parent

    - Time: O(n)
    - Space: O(n)

method 2: bfs

    let max = 0
    use a queue to track the nodes to be processed
    each queue item contians [node, depth]

    while queue is not empty
        pop the front
        max = Math.max(max, depth)
        enqueue the children with depth + 1 since they are a level lower
        
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
     * @return {number}
     */
    maxDepth(root) {
        // return this.dfs(root)
        return this.bfs(root)
    }

    dfs(root) {
        if (root === null) {
            return 0
        }

        const leftDepth = this.dfs(root.left)
        const rightDepth = this.dfs(root.right)

        return Math.max(leftDepth, rightDepth) + 1
    }

    bfs(root) {
        if (root === null) {
            return 0
        }
        let maxDepth = 0
        const queue = new Deque()
        queue.pushBack([root, 1])

        while(queue.size() > 0) {
            const [currNode, depth] = queue.popFront()
            maxDepth = Math.max(maxDepth, depth)
            
            if (currNode.left) {
                queue.pushBack([currNode.left, depth + 1])
            }
            if (currNode.right) {
                queue.pushBack([currNode.right, depth + 1])
            }
        }

        return maxDepth
    }
}
