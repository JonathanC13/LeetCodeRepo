// https://neetcode.io/problems/depth-of-binary-tree/question

/**
 * 1. Assumptions
 *  1. None
 * 
 * 2. input validation
 *  1. root
 *      - root instanceof TreeNode
 * 
 * 3. time and space constraints
 *  BTTC: O(n)  // n = all nodes
 *  Space: O(h) // h = height, max nodes held to process
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if root === null: return 0
 * 
 *  test cases
 *  1. single node
 *      inputs
 *          root = [1]
 *      expected output
 *          1
 *  2. > 1 node
 *      inputs
 *          root = [1, 2, 3, n, n, 4, n]
 *      expected output
 *          3
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  1. dfs method
 *      recursive
 *          base case 1:
 *          if node === null
 *              return 0
 * 
 *          get the max depth of the left child subtree
 *          get the max depth of the right child subtree
 * 
 *          return max(left, right) + 1 // 1 for the current node
 *      Time: O(n)
 *      Space: O(h) // h = height = max recursive stack
 * 
 *  2. bfs method
 *      queue to hold nodes to process
 *      height = 0
 * 
 *      while qu is not empty
 *          height += 1
 *          get the number of nodes in the queue, this is the number of nodes on this depth level
 *          pop all nodes on the level and enqueue nodes that are not null
 * 
 *      return height
 * 
 *      Time: O(n)
 *      Space: O(h)
 * 
 * 7. algos
 *  - Binary Tree traversal
 * 
 * 8. data structure
 *  - Binary Trees
 * 
 * 9. complexity
 *  Time: O(n)
 *  Space: O(h)
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
     * @return {number}
     */
    maxDepth(root) {
        if (root === null) {
            return 0
        }

        // return this.dfs(root)
        return this.bfs(root)
    }

    bfs(node) {
        const qu = new Deque()
        qu.pushBack(node)
        let height = 0

        while(qu.size() > 0) {
            height += 1
            const levelNodesSize = qu.size()
            for (let i = 0; i < levelNodesSize; i ++) {
                const curr = qu.popFront()
                if (curr.left !== null) {
                    qu.pushBack(curr.left)
                }
                if (curr.right !== null) {
                    qu.pushBack(curr.right)
                }
            }
        }

        return height
    }

    dfs(node) {
        if (node === null) {
            return 0
        }

        const left = this.dfs(node.left)
        const right = this.dfs(node.right)

        return Math.max(left, right) + 1
    }
}
