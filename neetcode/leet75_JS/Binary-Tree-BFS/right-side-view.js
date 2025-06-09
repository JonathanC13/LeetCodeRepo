// https://leetcode.com/problems/binary-tree-right-side-view/description/?envType=study-plan-v2&envId=leetcode-75

/*
bfs with queue.

iterate while queue is not empty
    const level = new Array()
    iterate the remaining nodes on the level. qu.size
        pop
        level.push(pop.val)
        enqueue popped children, let's do left first so that the right side view val is at index length - 1

    res.push(level[level.length - 1])

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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (root === null) {
        return []
    }

    const qu = new Queue()
    qu.enqueue(root)

    const res = new Array()

    while (qu.size() > 0) {
        const level = new Array()

        const quSize = qu.size()
        for (let i = 0; i < quSize; i ++) {
            const pop = qu.dequeue()
            level.push(pop.val)
            if (pop.left) {
                qu.enqueue(pop.left)
            }
            if (pop.right) {
                qu.enqueue(pop.right)
            }
        }

        res.push(level[level.length - 1])

    }
    // console.log(res)
    return res
};