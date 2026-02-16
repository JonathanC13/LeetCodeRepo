// https://neetcode.io/problems/kth-smallest-integer-in-bst/question

/**
 * 1. Assumptions
 *  1. k <= number of nodes in BST
 * 
 * 2. input validation  
 *  1. root
 *      - root instanceof TreeNode
 *  2. k
 *      - typeof k === 'number'
 *      - k > 0 and k <= number of nodes in BST
 * 
 * 3. time and space constraints
 *  BTTC: O(n)
 *  Space: O(h)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if root === null: return root
 * 
 *  test cases
 *  1. first
 *      inputs
 *          root = [2, 1, 3]
 *          k = 1
 *      expected output
 *          1
 *  2. last
 *      inputs
 *          root = [2, 1, 3]
 *          k = 3
 *      expected output
 *          3
 *  3. mid
 *      inputs
 *          root = [2, 1, 3]
 *          k = 2
 *      expected output
 *          2
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  1. method 1: traverse BST inorder order and place into Array then return arr[k - 1]
 *      Time: O(n)
 *      Space: O(n)
 *  2. method 2: traverse inorder order and k -= 1, then once k = 0 pop all the way out
 *      Time: O(n)
 *      Space: O(h)
 *      
 * 7. algos
 *  - BST traversal
 * 
 * 8. data structures
 *  - Binary search tree
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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        if (root === null) {
            return root
        }

        const kth = [k, 0]
        this.dfs(root, kth)
        return kth[1]
    }

    dfs(node, kth) {
        if (node === null) {
            return
        }

        // go left
        const left = this.dfs(node.left, kth)
        kth[0] -= 1
        if (kth[0] === 0) {
            // assign once
            kth[1] = node.val
            return
        } else if (kth[0] < 0) {
            return
        }

        const right = this.dfs(node.right, kth)
        return
    }
}
