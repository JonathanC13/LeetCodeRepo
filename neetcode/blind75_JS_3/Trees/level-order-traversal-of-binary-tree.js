// https://neetcode.io/problems/level-order-traversal-of-binary-tree/question

/**
 * 1. Assumptions
 *  1. Exclude nulls
 * 
 * 2. input validation
 *  1. root
 *      - root instanceof TreeNode
 * 
 * 3. time and space constraints
 *  BTTC: O(n)
 *  Space: O(h)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if root === null: return []
 * 
 *  test cases
 *  1. single node
 *      inputs
 *          root = [1]
 *      expected output
 *          [[1]]
 *  2. complete binary tree
 *      inputs
 *          root = [1, 2, 3, 4]
 *      expected output
 *          [[1], [2,3], [4]]
 *  3. not complete binary tree
 *      inputs
 *          root = [1,2,3,n,4,n,5]
 *      expected output
 *          [[1], [2,3], [4,5]]
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  1. DFS method
 *      arr = []
 * 
 *      recursive
 *          base case 1:
 *          if node === null: return
 * 
 *          if depth >= arr.length
 *              arr.push(new Array())
 * 
 *          arr[depth].push(node.val)
 * 
 *          explore left child
 *          explore right child
 * 
 *          return
 * 
 *      Time: O(n)
 *      Space: O(h)
 * 
 *  2. BFS method
 *      queue = new Deque()
 *      enqueue root
 *  
 *      while (queue.size() > 0) 
 *          The current nodes in the queue are on the same level
 *          quSize = queue.size()
 *          level = []
 *          for quSize
 *              dequeue
 *              if null: continue
 *              push to level
 *              enqueue left child
 *              enqueue right child
 * 
 *          if level.length > 0
 *              res.push(level)
 * 
 *      Time: O(n)
 *      Space: O(h)
 * 
 * 7. algos
 *  - Level traversal of binary tree
 * 
 * 8. data structures
 *  - binary tree
 * 
 * 9. complexity
 *  Time: O(n)
 *  Space: O(h)
 *              
 * 
 */

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        if (root === null) {
            return []
        }

        // const dfsRes = new Array()
        // this.dfs(root, 0, dfsRes)
        // return dfsRes

        return this.bfs(root)
    }

    bfs(root) {
        const qu = new Deque()
        qu.pushBack(root)

        const res = new Array()

        while (qu.size() > 0) {
            const quSize = qu.size()
            const level = new Array()
            for (let i = 0; i < quSize; i ++) {
                const curr = qu.popFront()
                if (curr === null) {
                    continue
                }

                level.push(curr.val)
                qu.pushBack(curr.left)
                qu.pushBack(curr.right)

            }
            if (level.length > 0) {
                res.push([...level])
            }
        }

        return res
    }

    dfs(node, depth, dfsRes) {
        if (node === null) {
            return
        }

        if (depth >= dfsRes.length) {
            dfsRes.push(new Array())
        }

        dfsRes[depth].push(node.val)

        this.dfs(node.left, depth + 1, dfsRes)
        this.dfs(node.right, depth + 1, dfsRes)
        return
    }
}
