// https://neetcode.io/problems/binary-tree-maximum-path-sum/question

/**
 * 1. Assumptions
 *  1. None
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
 *  1. if root.left === null && root.right === null: return root.val
 * 
 *  test cases
 *  1. max path sum includes root
 *      inputs
 *          level order root = [1, 2, 3, -5]
 *      expected output
 *          6
 *  2. does not include root
 *      inputs
 *          root = [-5, 1, 2, n, n, 3]
 *      expected output
 *          5
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  global max = [root.val]
 * 
 *  recursive solution where each node:
 *      base case 1:
 *      if root === null: return 0
 * 
 *      get max from left subtree: max(0) since if negative it doesn't contribute to max path sum
 *      get max from right subtree: max(0)
 * 
 *      max[0] = (max[0], left subtree + curr node val, right subtree + curr node val, left + right + curr node val)
 *      * note do not need extra curr node val by itself since if left and right are negative they convert to 0, therefore 0 + 0 + curr node val
 * 
 *      return max(left + curr, right + curr)   // since path cannot include same node (curr) twice, return valid paths
 * 
 * 7. algos
 *  - Binary tree traversal
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
    maxPathSum(root) {
        if (root.left === null && root.right === null) {
            return root.val
        }

        const max = [root.val]
        this.dfs(root, max)
        return max[0]
    }

    dfs(node, max) {
        if (node === null) {
            return 0
        }

        const left = Math.max(this.dfs(node.left, max), 0)
        const right = Math.max(this.dfs(node.right, max), 0)
        max[0] = Math.max(max[0], left + node.val, right + node.val, left + right + node.val)

        return Math.max(left + node.val, right + node.val)
    }
}
