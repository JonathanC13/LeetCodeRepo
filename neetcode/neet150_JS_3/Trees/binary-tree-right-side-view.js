// https://neetcode.io/problems/binary-tree-right-side-view/question

/**
 * 1. Assumptions
 *  1. valid binary tree
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
 *  1. some right views nodes are not the most right child
 *      inputs
 *          root = [1, 2, 3, n, 4, n, 5, 6, n, n, n]
 *      expected output
 *          [1,3,5,6]
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  1. BFS
 *      queue for the nodes in the current level
 *      
 *      while queue is not empty
 *          res.push front queue node's value
 * 
 *          for the level's nodes
 *              dequeue and enqueue right child then left child. This is so that the first node of the queue for the next level is the most right
 * 
 *  2. DFS
 *      base case 1: if node === null: return
 *      
 *      if res.length < depth   // since right child explored first, if new depth it will be the most right node of the level
 *          res.push(node.val)
 * 
 *      go right child with depth + 1
 *      go left child with depth + 1
 * 
 *      return
 * 
 * 7. algos
 *  - BFS / DFS of binary tree
 * 
 * 8. data structures
 *  - Binary tree
 * 
 * 9. complexity
 *  Time: O(n)
 *  Space: O(h)
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
     * @return {number[]}
     */
    rightSideView(root) {
        // return this.bfs(root)
        
        const res = new Array()
        this.dfs(root, res, 1)
        return res
    }

    bfs(root) {
        if (root === null) {
            return []
        }
        const res = new Array()
        const qu = new Deque()
        qu.pushBack(root)

        while (qu.size() > 0) {
            res.push(qu.front().val)
            const quSize = qu.size()    // level
            for (let i = 0; i < quSize; i ++) {
                const node = qu.popFront()
                if (node.right) {
                    qu.pushBack(node.right)
                }
                if (node.left) {
                    qu.pushBack(node.left)
                }
            }
        }

        return res
    }

    dfs(node, res, depth) {
        if (node === null) {
            return
        }

        if (res.length < depth) {
            res.push(node.val)
        }

        this.dfs(node.right, res, depth + 1)
        this.dfs(node.left, res, depth + 1)
        return
    }
}
