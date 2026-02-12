// https://neetcode.io/problems/subtree-of-a-binary-tree/question

/**
 * 1. Assumptions
 *  1. None
 * 
 * 2. input validation
 *  1. root and subRoot
 *      - root instanceof TreeNode
 * 
 * 3. time and space constraints
 *  BTTC: O(n * m)  // n = # of nodes in Tree root. m = # of nodes in Tree subRoot
 *  Space: O(h) // h = height of Tree root
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if root === null && subRoot === null: return true
 *  2. if root === null || subRoot === null: return false
 * 
 *  test cases
 *  1. root and subRoot are exactly the same
 *      inputs
 *          root = [1, 2, 3]
 *          subRoot = [1, 2, 3]
 *      expected output
 *          true
 *  2. subRoot is a subtree of Tree root
 *      inputs
 *          root = [1, 2, 3, 4, 5]
 *          subRoot = [3, 4, 5]
 *      expected output
 *          true
 * 
 *  3. subRoot is not a subtree of Tree root
 *      inputs
 *          root = [1, 2, 3, 4, 5]
 *          subRoot = [1, 2, 4]
 *      expected output
 *          false
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  For each node in Tree root, must evaluate if Tree subRoot is a subtree starting at that node.
 *  DFS or BFS to traverse Tree root and then check if same Tree
 * 
 * 7. algos
 *  - Binary Tree traversal
 * 
 * 8. data structures
 *  - Binary Trees
 * 
 * 9. complexity
 *  Time: O(n * m)
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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if (root === null && subRoot === null) {
            return true
        }
        if (root === null || subRoot === null) {
            return false
        }

        if (this.isSameTree(root, subRoot)) {
            return true
        }

        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot)
    }

    isSameTree(root, subRoot) {
        if (root === null && subRoot === null) {
            return true
        }
        
        if (root !== null && subRoot !== null && root.val === subRoot.val) {
            return this.isSameTree(root.left, subRoot.left) && this.isSameTree(root.right, subRoot.right)
        } else {
            return false
        }
    }
}
