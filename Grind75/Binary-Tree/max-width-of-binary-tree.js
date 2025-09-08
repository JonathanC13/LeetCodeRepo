// https://leetcode.com/problems/maximum-width-of-binary-tree/

/**
BFS traversal

Each level has max 2^n nodes. n starts at 0
Each index of Array is the parent to left (2*n) and right (2*n + 1) children

create a queue for the nodes
    elements of: [node, nodeNum]
enqueue root: [root, 1]

let maxWidth

while qu.size() > 0
    const quSize = qu.size()
    start = 0
    end = 0
    for (let i = 0; i < quSize; i ++)
        const [popNode, nodeNum] = qu.popFront()

        if (i === 0) {
            // get the most left node of this level
            start = nodeNum
        }
        if (i === quSize - 1) {
            // get the most right node of this level
            end = nodeNum
        }

        // ignoring null nodes
        if (popNode.left !== null){
            qu.pushBack(popNode.left, 2*nodeNum)
        }
        if (popNode.right !== null) {
            qu.pushBack(popNode.right, 2*nodeNum + 1)
        }

    maxWidth = Math.max(maxWidth, end - start + 1)

return maxWidth

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
 * @return {number}
 */
var widthOfBinaryTree = function(root) {
    const qu = new Deque()
    qu.pushBack([root, 1])

    let maxWidth = 0

    while (qu.size() > 0) {
        const quSize = qu.size()
        let start = 0
        let end = -1

        for (let i = 0; i < quSize; i ++) {
            let [popNode, nodeNum] = qu.popFront()
            nodeNum = BigInt(nodeNum)
            if (i === 0) {
                start = nodeNum
            }
            if (i === quSize - 1) {
                end = nodeNum
            }

            if (popNode.left !== null) {
                qu.pushBack([popNode.left, BigInt(2) * nodeNum])
            }
            if (popNode.right !== null) {
                qu.pushBack([popNode.right, BigInt(2) * nodeNum + BigInt(1)])
            }
        }
        maxWidth = Math.max(maxWidth, Number(end - start + BigInt(1)))
    }
    console.log(maxWidth)
    return maxWidth
};