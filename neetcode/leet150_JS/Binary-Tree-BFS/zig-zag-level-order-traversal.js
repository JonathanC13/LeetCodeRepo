// https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/description/?envType=study-plan-v2&envId=top-interview-150

/*
* could just do level traversal and reverse the level on every odd level
- Time: O(n)
- Space: O(n)

* one queue, one stack
queue to store the nodes to process
stack to store the nodes in specified order to be requeued into queue for next level
maintain flag to determine the direction of child nodes to be pushed onto stack

while q is not empty
    create Arr for level

    iterate nodes in qu
        pop
        if (pop === null) continue
        push pop.val into level
        if (odd === true) {
            push right child onto stack
            push left child
        } else 
            push left child onto stack
            push right child

    if (odd === true){
        odd = false
    } else 
        odd = true

    prepare qu for next level; push all stack into queue

- Time: O(2 * n)
- Space: O(2 * n)


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
    if (root === null) {
        return []
    }

    const qu = new Deque()
    const stk = new Array()
    qu.pushBack(root)
    let odd = false
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

            if (odd === true) {
                stk.push(pop.right)
                stk.push(pop.left)
            } else {
                stk.push(pop.left)
                stk.push(pop.right)
            }

        }

        odd = !odd
        if (level.length !== 0) {
            res.push(level)
        }
        
        while (stk.length > 0) {
            qu.pushBack(stk.pop())
        }
    }

    return res
};