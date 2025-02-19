// https://neetcode.io/problems/level-order-traversal-of-binary-tree

/*
- edge case 1: if root === null: return []

Can either do BFS or DFS

Let's use BFS

create a queue
enqueue the root

while (qu.size() > 0) {
    level = []
    const quSize = qu.size()
    for (let i = 0; i < quSize; i ++) {
        const node = qu.popFront()
        
        if (node !== null) {
            level.push(node.val)
            qu.pushBack(node.left)
            qu.pushBack(node.right)
        }
        
    }
    if (level.length > 0) {
        res.push(level)
    }
}

- Time: O(n). n for each node
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
     * @return {number[][]}
     */
    levelOrder(root) {
        if (root === null) {
            return []
        }

        const res = []
        const qu = new Deque()
        qu.pushBack(root)

        while (qu.size() > 0) {
            const level = []

            const quSize = qu.size()
            for (let i = 0; i < quSize; i ++) {
                const node = qu.popFront()
                
                if (node !== null) {
                    level.push(node.val)
                    qu.pushBack(node.left)
                    qu.pushBack(node.right)
                }
                
            }
            if (level.length > 0) {
                res.push(level)
            }
            
        }

        return res
    }
}
