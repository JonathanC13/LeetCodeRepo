// https://neetcode.io/problems/count-good-nodes-in-binary-tree/question

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
 *  1. if root === null: return 0
 * 
 *  test cases
 *  1. some bad nodes
 *      inputs
 *          root = [1, 1, 1, 2, n, 0, 3]
 *      expected output
 *          3
 *  2. some nodes are equal
 *      inputs
 *          root = [3,3,n]
 *      expected output
 *          2
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  BFS or DFS will work, just need to maintain the max value from root to current node's parent.
 * 
 * 7. algos
 *  - DFS / BFS of binary tree
 * 
 * 8. data structures
 *  - binary tree
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
    goodNodes(root) {
        if (root === null) {
            return 0
        }

        const res = this.dfs(root, Number.NEGATIVE_INFINITY)
        return res
    }

    dfs(node, pathMax) {
        if (node === null) {
            return 0
        }

        const leftGood = this.dfs(node.left, Math.max(pathMax, node.val))
        const rightGood = this.dfs(node.right, Math.max(pathMax, node.val))

        return leftGood + rightGood + (node.val >= pathMax ? 1 : 0) // no nodes greater, therefore can be equal
    }
}
