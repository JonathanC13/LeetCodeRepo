// https://leetcode.com/problems/validate-binary-search-tree/description/

/**
1. Assumptions
    1. unique values

2. input validation
    1. root is a TreeNode and is the root to a valid binary tree

3. time and space constraints
    BTTC: O(n)  // need to check every node
    Space: O(h) // recursive stack maxes at height of tree

4. edge cases and some test cases
    edge cases
    1. if root === null: return true
    test cases
    1. invalid BST
        input
            [2, 2, 3]
        expected output
            false
    2. valid BST
        input
            [2, 1, 3, 0]
        expected output
            true

5. visualize by drawing and manually solve
6. break into subproblems
    recursive dfs
        each recursive call has the left limit and right limit that the current node's value can be, if violate the range return false
    
        base case 1
        if root === null:
            return true
        
        base case 2
        if (root.val <= left limit || root.val >= right limit) {
            return false
        }

        when checking if the children satisfy BST, need to adjust range of values it can be in.
        left child right limit updates to this node's value since BST requirement is the left child is < parent node
        right child is > parent node
        return checkValue(root.left, left limit, root.val) && checkValue(root.right, root.val, right limit)

7. algos
    - Binary tree Depth first traversal

8. data structures
    - Binary tree

9. complexity
    Time: O(n)
    Space: O(h)
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {

    const checkValue = (root, left, right) => {
        if (root === null) {
            return true
        }
        if (root.val <= left || root.val >= right) {
            return false
        }

        return checkValue(root.left, left, root.val) && checkValue(root.right, root.val, right)
    }

    return checkValue(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY)
};