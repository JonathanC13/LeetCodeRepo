// https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/description/

/**
BFS
When it is an even level, reverse the level node values before push into res Array

- Time: O(n)
- Space: O(h)
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
var zigzagLevelOrder = function(root) {
    const qu = new Deque()
    qu.pushBack(root)

    const res = new Array()
    let n = 1

    while (qu.size() > 0) {
        const quSize = qu.size()

        const level = new Array()
        for (let i = 0; i < quSize; i ++) {
            const node = qu.popFront()
            if (node === null) {
                continue
            }

            level.push(node.val)
            qu.pushBack(node.left)
            qu.pushBack(node.right)
        }

        if (n % 2 === 0) {
            level.reverse()
        }
        n += 1

        if (level.length > 0) {
            res.push(level)
        }
    }

    return res
};