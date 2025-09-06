// https://leetcode.com/problems/binary-tree-right-side-view/description/

/**
BFS. level travsersal, go right subtree first and res.push the first value on the level

- Time: O(n)    // must still visit every node side the most right for a level can be not on the most right child
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
 * @return {number[]}
 */
var rightSideView = function(root) {
    const res = new Array()
    const qu = new Deque()
    qu.pushBack(root)

    while (qu.size() > 0) {
        const quSize = qu.size()
        let right = true
        for (let i = 0; i < quSize; i ++) {
            const pop = qu.popFront()
            if (pop === null) {
                continue
            }

            if (right === true) {
                res.push(pop.val)
                right = false
            }

            if (pop.right !== null) {
                qu.pushBack(pop.right)
            }
            if (pop.left !== null) {
                qu.pushBack(pop.left)
            }
            
        }
    }

    return res
};