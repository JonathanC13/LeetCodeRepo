// https://neetcode.io/problems/binary-tree-diameter/question

/**
 * 1. Assumptions
 *  1. valid binary tree
 * 
 * 2. input validation
 *  - root instanceof TreeNode
 * 
 * 3. time and space constraints
 *  BTTC: O(n)  // visit every node
 *  Space: O(h) // height
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if root === null: return 0
 * 
 *  test cases
 *  1. longest path passes through root
 *      inputs
 *          preorder = [1,2,n,n,3]
 *      expected output
 *          3
 *  
 *  2. longest path does not pass throught root
 *      inputs
 *          preorder = [1,2,3,4,n,n,n,5,6,n,n,n]
 *      expected output
 *          4
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  1. cannot do bfs since need the depth of children
 *  2. DFS
 *      track global max diameter since
 *      max = math.max(max, left depth + right depth)
 *      once a node returns it returns the max depth of either left and right + 1 for self edge to parent.
 *          It is either left or right since node cannot appear twice
 * 
 * 7. algos
 *  - DFS of binary tree
 * 
 * 8. data structures
 *  - binary tree
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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        if (root === null) {
            return 0
        }

        const maxDia = [0]
        this.dfs(root, maxDia)
        return maxDia[0]
    }

    dfs(node, maxDia) {
        if (node === null) {
            return 0
        }

        const left = this.dfs(node.left, maxDia)
        const right = this.dfs(node.right, maxDia)
        maxDia[0] = Math.max(maxDia[0], left + right)

        return Math.max(left, right) + 1
    }
}
