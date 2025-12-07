// https://leetcode.com/problems/binary-tree-right-side-view/

/**
1. Assumptions
    1. None

2. input validation
    1. root is a node and connected is a valid binary tree

3. time and space constraints
    BTTC: O(n)
    Space: O(m) // m = max nodes on a level

4. edge cases and some test cases
    edge cases
    1. if root === null: return []
    test cases
    1. all levels have far right child
        inputs
            [1, 2, 3, 4, 5, 6, 7]
        expected output
            [1, 3, 7]
    2. some levels do not have have right child
        inputs
            [1, 2, 3, 4, 5, n, n, n, 6, n, n]
        expected output
            [1, 3, 5, 6]

5. visualize by drawing and manually solve
6. break into subproblems
    BFS and enqueue the right child first.
    push only the first right child that is not null into the result Array.
    process the rest of the nodes on the level and enqueue their children

7. algos
    - Breadth first traversal

8. data structures
    - Binary Tree

9. complexity
    Time: O(n)
    Space: O(m) // m = max nodes on a level
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

    const qu = new Deque()
    const res = new Array()
    qu.pushBack(root)
    while (qu.size() > 0) {
        const size = qu.size()
        let needFirst = true

        for (let i = 0; i < size; i ++) {
            const node = qu.popFront()
            if (node === null) {
                continue
            }

            if (needFirst) {
                res.push(node.val)
                needFirst = false
            }
            
            qu.pushBack(node.right)
            qu.pushBack(node.left)
            
        }
    }

    return res
};