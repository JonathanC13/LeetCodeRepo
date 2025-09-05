// https://leetcode.com/problems/binary-tree-level-order-traversal/description/

/**
BFS

create a queue
enqueue the root

const res = []

while qu.size() > 0
    quSize = qu.size()
    const level = []
    for (let i = 0; i < quSize; i ++) {
        const pop = qu.popFront()
        if (pop === null) {
            continue
        }

        level.push(pop.val)

        // enqueue children, left to right
        qu.pushBack(pop.left)
        qu.pushBack(pop.right)
    }

    if (level.length > 0) {
        res.push(level)
    }

return res

- Time: O(n)
- Space: O(n)
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const qu = new Deque()
    qu.pushBack(root)
    const res = new Array()

    while (qu.size() > 0) {
        const quSize = qu.size()
        const level = new Array()
        for (let i = 0; i < quSize; i ++) {
            const pop = qu.popFront()
            if (pop === null) {
                continue
            }

            level.push(pop.val)
            qu.pushBack(pop.left)
            qu.pushBack(pop.right)
        }
        if (level.length > 0) {
            res.push(level)
        }
    }

    return res
};