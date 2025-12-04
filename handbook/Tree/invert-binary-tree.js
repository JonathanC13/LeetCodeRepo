// https://leetcode.com/problems/invert-binary-tree/

/**
1. Assumptions
    1. None

2. input validation
    1. it is a binary tree. Max two children, directed, and acyclic

3. time and space constraints
    BTTC: O(n)  // must visited each node to invert
    Space: O(h) // h = height for the recursive stack

4. edge cases and some test cases
    edge cases
    1. empty
        if root === null: return root
    2. 1 node
        if root.left === null AND root.right === null
            return root
    test cases
    1.
        input
            root = [4,2,7,1,3,6,9]
        expected output
            [4,7,2,9,6,3,1]

5. visualize by drawing and manually solve
6. break into subproblems
    Depth first search and for each node invert the left child to the right and vice versa

7. algos
    - Binary tree depth first traversal

8. Data structures
    - Binary Tree

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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (root === null || (root.left === null && root.right === null)) {
        return root
    }

    // need to swap first
    const tmp = root.left
    root.left = root.right
    root.right = tmp

    invertTree(root.left)
    invertTree(root.right)

    return root
};