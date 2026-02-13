// https://neetcode.io/problems/lowest-common-ancestor-in-binary-search-tree/question

/**
 * 1. Assumptions
 *  1. Nodes with p.val and q.val exist, if not guarenteed do a search for p and q and only continue if both exist
 *      Note, p and q are not the TreeNodes in BST root, they are different objects.
 * 
 * 2. input validation
 *  1. root, p, and q
 *      - root instanceof TreeNode
 * 
 * 3. time and space constraints
 *  BTTC: O(n)
 *  Space: O(h)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if root === p || root === q: return root
 * 
 *  test cases
 *  1. LCA is a not p or q
 *      inputs
 *          root = [5,3,8,1,4,7,9]
 *          p = 1, q = 4
 *      expected output
 *          3
 * 
 *  2. LCA is either p or q
 *      inputs
 *          root = [5,3,8,1,4,7,9]
 *          p = 8, q = 9
 *      expected output
 *          8
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  DFS or BFS
 *  - DFS
 *      set up by making p the low value and q the high value so that the condition to determine if the current node is LCA is straight forward.
 * 
 *      recursive
 *          base case 1: if p or q is the LCA
 *          if node === p || node === q:
 *              return node
 * 
 *          if both p and q are greater than current node
 *              return go right
 *          else if less than current node
 *              return go left
 *          else
 *              return node
 * 
 * 7. algos
 *  - Binary search tree traversal
 * 
 * 8. data structures
 *  - Binary search tree
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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        if (root === null || !this.checkExist(root, p) || !this.checkExist(root, q)) {
            return root
        }

        if (p.val > q.val) {
            const temp = p
            p = q
            q = temp
        }

        return this.dfs(root, p, q)
    }

    dfs(node, p, q) {
        // if (node.val === p.val || node.val === q.val) {
        //     return node
        // }

        if (p.val > node.val && q.val > node.val) {
            return this.dfs(node.right, p, q)
        } else if (p.val < node.val && q.val < node.val) {
            return this.dfs(node.left, p, q)
        } else {
            return node
        }
    }

    checkExist(root, node) {
        if (root === null) {
            return false
        }
        if (root.val === node.val) {
            return true
        }

        if (node.val > root.val) {
            return this.checkExist(root.right, node)
        } else if (node.val < root.val) {
            return this.checkExist(root.left, node)
        } else {
            return false
        }
    }
}
