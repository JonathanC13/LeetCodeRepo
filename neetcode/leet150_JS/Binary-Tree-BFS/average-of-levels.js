// https://leetcode.com/problems/average-of-levels-in-binary-tree/description/?envType=study-plan-v2&envId=top-interview-150

/*
create a Queue with Deque()

iterate the levels; enqueuing the children of the next level and get the total of the current level
calc and store average

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
var averageOfLevels = function(root) {
    if (root === null) {
        return []
    }

    const qu = new Deque()
    qu.pushBack(root)

    const res = new Array()
    while (qu.size() > 0) {
        let total = 0
        const quSize = qu.size()
        for (let i = 0; i < quSize; i ++) {
            const popped = qu.popFront()
            total += popped.val
            if (popped.left !== null) {
                qu.pushBack(popped.left)
            }
            if (popped.right !== null) {
                qu.pushBack(popped.right)
            }
        }
        res.push(Number((total/quSize).toFixed(5)))
    }
    
    return res
};