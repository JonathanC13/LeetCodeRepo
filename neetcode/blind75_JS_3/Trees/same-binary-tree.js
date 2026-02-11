// https://neetcode.io/problems/same-binary-tree/question

/**
 * 1. Assumptions
 *  1. None
 * 
 * 2. input validation
 *  1. p and q
 *      - p instanceof TreeNode
 * 
 * 3. time and space constraints
 *  BTTC: O(n)  // n = total nodes in shortest tree
 *  Space: O(h) // h = depth of the shortest tree
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if p === null && q === null: return true
 *  2. if p === null || q === null: return false
 * 
 *  test cases
 *  1. same tree
 *      inputs
 *          p = [1, 2, 3]
 *          q = [1, 2, 3]
 *      expected output
 *          true
 * 
 *  2. diff tree
 *      inputs
 *          p = [1, 2, 3]
 *          q = [1, 2, n, 3]
 *      expected output
 *          false
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  1. DFS method
 *      recursive
 *          base case 1: terminate at same
 *          if p === null and q === null:
 *              return true
 * 
 *          base case 2: not terminate at same or values are different
 *          if p === null || q === null || p.val !== q.val:
 *              return false
 * 
 *          // return true if left subtree is the same and right subtree is the same
 *          return rec(p.left, q.left) && rec(p.right, q.right)
 *      Time: O(n)
 *      Space: O(h)
 * 
 *  2. BFS method
 *      queue for tree p
 *      queue for tree q
 * 
 *      while p || q not empty
 *          currP = dequeue
 *          currQ = dequeue
 *          
 *          if currP === null && currQ === null: continue
 * 
 *          if currP === null || currQ === null || currP.val !== currQ.val
 *              return false
 * 
 *          enqueue children of currP   // even nulls since need to maintain the next level left to right
 *          enqueue children of currQ   // even nulls
 * 
 *      if pQueue not empty && qQueue not empty
 *          return false
 *      return true
 * 
 *      Time: O(n)
 *      Space: O(h)
 * 
 * 7. algos
 *  - Binary tree traversal
 * 
 * 8. data structures
 *  - Binary trees
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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        if (p === null && q === null) {
            return true
        }
        if (p === null || q === null || p.val !== q.val) {
            return false
        }

        // return this.dfs(p, q)
        return this.bfs(p, q)
    }

    bfs(p, q) {
        const pQ = new Deque()
        const qQ = new Deque()

        pQ.pushBack(p)
        qQ.pushBack(q)

        while (pQ.size() > 0 && qQ.size() > 0) {
            const currP = pQ.popFront()
            const currQ = qQ.popFront()

            if (currP === null && currQ === null) {
                continue
            }
            if (currP === null || currQ === null || currP.val !== currQ.val) {
                return false
            }

            pQ.pushBack(currP.left)
            pQ.pushBack(currP.right)
            qQ.pushBack(currQ.left)
            qQ.pushBack(currQ.right)
        }

        if (pQ.size() > 0 || qQ.size() > 0) {
            return false
        }
        return true
    }

    dfs(p, q) {
        if (p === null && q === null) {
            return true
        }
        if (p === null || q === null || p.val !== q.val) {
            return false
        }

        return this.dfs(p.left, q.left) && this.dfs(p.right, q.right)
    }
}
