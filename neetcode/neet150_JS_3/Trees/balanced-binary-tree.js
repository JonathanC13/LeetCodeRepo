// https://neetcode.io/problems/balanced-binary-tree/question

/**
 * 1. Assumptions
 *  1. valid binary tree
 * 
 * 2. input validation
 *  - root instanceof TreeNode
 * 
 * 3. time and space constraints
 *  BTTC: O(n)
 *  Space: O(h)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if root === null: return true
 * 
 *  test cases
 *  1. balanced
 *      inputs
 *          root = [1,2,3,n,n,4]
 *      expected output
 *          true
 *  2. not balanced
 *      inputs
 *          root = [1,2,3,n,n,n,n]
 *      expected output
 *          false
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  DFS to compare depths of children
 *      base case 1:
 *      if node === null: return 0
 * 
 *      get left child depth
 *      can add early terminate, if -1 === false: return -1
 *      get right child depth
 * 
 *      return abs(left - right) > 1 ? -1 : max(left, right) + 1 for self
 * 
 * 7. algos
 *  - dfs inorder tree traversal
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
     * @return {boolean}
     */
    isBalanced(root) {
        if (root === null) {
            return true
        }

        const res = this.dfs(root)
        return res === -1 ? false : true
    }

    dfs(node) { 
        if (node === null) {
            return 0
        }

        const leftDep = this.dfs(node.left)
        if (leftDep === -1) {
            return -1
        }
        const rightDep = this.dfs(node.right)

        return (rightDep === -1 || Math.abs(leftDep - rightDep) > 1) ? -1 : Math.max(leftDep, rightDep) + 1
    }
}
