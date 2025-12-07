// https://leetcode.com/problems/binary-tree-level-order-traversal/

/**
1. Assumptions
    1. Include nulls? No.

2. input validation
    1. Valid binary tree

3. time and space constraints
    BTTC: O(n)
    Space: O(n) // n for result Array. if DFS recursive stack is O(h), if BFS Queue is O(m) where m = max nodes on a level

4. edge cases and some test cases
    edge cases
    1. if root === null
        return []
    test cases
    1. compelete binary tree
        inputs
            [1, 2, 3, 4, 5, 6]
        expected output
            [[1], [2, 3], [4, 5, 6]]
    2. non-complete binary tree
        inputs
            [1, 2, 3, n, n, 4, 5]
        expected output
            [[1], [2, 3], [4, 5]]

5. visualize by drawing and manaully solve
6. break into subproblems
    Can be done recursively with DFS where each node keeps track of its depth and if the result Array length <= depth, push new level else push into exiting level Array

    BFS more intuitive
    traverse level by level from left to right with a Breadth first traversal

7. algos
    - binary tree BFS

8. data structures
    - binary tree

9. complexity
    Time: O(n)
    Space: O(n)
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

    const res = new Array()
    const qu = new Deque()
    qu.pushBack(root)

    while (qu.size() > 0) {
        // get all nodes on the current level
        const level = new Array()
        const size = qu.size()
        for (let i = 0; i < size; i ++) {
            const node = qu.popFront()
            if (node === null) {
                continue
            }

            qu.pushBack(node.left)
            qu.pushBack(node.right)
            level.push(node.val)
        }
        if (level.length > 0) {
            res.push(level)
        }
    }

    return res
};