// https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/

/**
From Tree create undirected adjMap
    key: node.val
    val: Array of connected, up and down

res = []

create queue
enqueue(target)

while qu not empty && k > 0
    quSize = qu.size()
    k -= 1

    for (0 to quSize)
        const pop = popFront

        enqueue all connected to pop

    if (k === 0) {
        break
    }

the remaining values in the queue are the node values that are k edges away

return res = dequeue all

- Time: O(n + n)
- Space: O(n + e)
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {
    const adjMap = new Map()
    const qu = new Deque()
    adjMap.set(root.val, new Array())
    qu.pushBack(root)
    while (qu.size() > 0) {
        const pop = qu.popFront()

        if (pop.left !== null) {
            adjMap.get(pop.val).push(pop.left.val)

            adjMap.set(pop.left.val, new Array())
            adjMap.get(pop.left.val).push(pop.val)

            qu.pushBack(pop.left)
        }
        if (pop.right !== null) {
            adjMap.get(pop.val).push(pop.right.val)

            adjMap.set(pop.right.val, new Array())
            adjMap.get(pop.right.val).push(pop.val)

            qu.pushBack(pop.right)
        }
    }
    //console.log(adjMap)
    qu.pushBack(target.val)
    const visited = new Set()
    visited.add(target.val)
    
    while (qu.size() > 0 && k > 0) {
        const quSize = qu.size()
        k -= 1
        for (let i = 0; i < quSize; i ++) {
            const pop = qu.popFront()

            for (let j = 0; j < adjMap.get(pop).length; j ++) {
                if (visited.has(adjMap.get(pop)[j])) {
                    continue
                }

                visited.add(adjMap.get(pop)[j])
                
                qu.pushBack(adjMap.get(pop)[j])
            }
        }
        if (k === 0) {
            break
        }
    }

    const res = new Array()
    while (qu.size() > 0) {
        res.push(qu.popFront())
    }

    return res
};