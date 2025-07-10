// https://leetcode.com/problems/binary-tree-right-side-view/description/?envType=study-plan-v2&envId=top-interview-150

/*
BFS
create a Queue using a Deque() to hold the nodes to process.
    Using library Deque instead of Array because shifting for dequeue is expensive.
enqueue the root

while q not empty
    pop first element, push to res Array
    push children into queue

    for remainder of nodes on this level, enqueue children right to left.   // alterantively left to right and the final node is pushed into res

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
    const res = new Array()
    const qu = new Deque()
    qu.pushBack(root)
    while (qu.size() > 0) {
        const quSize = qu.size()
        let pop = null
        for (let i = 0; i < quSize; i ++) {
            pop = qu.popFront()
            if (pop.left) {
                qu.pushBack(pop.left)
            }
            if (pop.right) {
                qu.pushBack(pop.right)
            }
        }
        res.push(pop.val)
    }

    return res

};