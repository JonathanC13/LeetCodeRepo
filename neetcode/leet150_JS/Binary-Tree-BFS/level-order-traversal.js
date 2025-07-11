// https://leetcode.com/problems/binary-tree-level-order-traversal/description/?envType=study-plan-v2&envId=top-interview-150

/*
create a Queue with a Deque()
enqueue root
create res Array for the levels

while q is not empty
    create new array for level

    iterate all the queue elements and push into Array

    push Array into res Array

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
    if (root === null) {
        return []
    }

    const qu = new Deque()
    const res = new Array()
    qu.pushBack(root)

    while (qu.size() > 0) {
        const level = new Array()
        const quSize = qu.size()
        for (let i = 0; i < quSize; i ++) {
            const pop = qu.popFront()
            level.push(pop.val)

            if (pop.left !== null) {
                qu.pushBack(pop.left)
            }
            if (pop.right !== null) {
                qu.pushBack(pop.right)
            }
        }

        res.push([...level])
    }

    return res
};