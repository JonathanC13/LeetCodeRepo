// https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/description/?envType=study-plan-v2&envId=leetcode-75

/*
bfs with queue

while qu not empty
    level += 1
    get quSize for the number of level nodes
    iterate the nodes
        levelSum += pop.val

    if (levelSum > maxSum) {
        maxSum = levelSum
        maxLevel = level
    }

return level

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
 * @return {number}
 */
var maxLevelSum = function(root) {
    if (root === null) {
        return 0
    }

    const qu = new Queue()
    qu.enqueue(root)
    let level = 0
    let maxLevel = 0
    let maxSum = Number.NEGATIVE_INFINITY
    while (qu.size() > 0) {
        const quSize = qu.size()
        level += 1
        let levelSum = 0
        for (let i = 0; i < quSize; i ++) {
            const pop = qu.dequeue()
            levelSum += pop.val
            if (pop.left) {
                qu.enqueue(pop.left)
            }
            if (pop.right) {
                qu.enqueue(pop.right)
            }
        }

        if (levelSum > maxSum) {
            maxSum = levelSum
            maxLevel = level
        }
    }

    return maxLevel
};