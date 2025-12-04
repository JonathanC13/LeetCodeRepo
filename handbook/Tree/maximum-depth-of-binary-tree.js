// https://leetcode.com/problems/maximum-depth-of-binary-tree/description/

/**
1. Assumptions
    1. None

2. input validation
    1. Stated it is a Binary tree. Max two children, directed, and acyclic

3. time and space constraints
    BTTC: O(n)  // need to traverse every node to get the max depth
    Space: O(h) // h = height

4. edge cases and some test cases
    edge cases
    1. empty
        if root === null
            return 0
    2. 1 node
        if root.left === null AND root.right === null
            return 1
    test cases
    1. 
        input
            root = [3,9,20,null,null,15,7]
        expected output
            3

5. visualize by drawing and manually solve
6. break into subproblems
    traverse in depth first search
    when hit base case of node === null: return 0
    At each node returns the max(depth left subtree, depth right subtree) + 1. The 1 is for this node.

7. algos
    - Tree DFS traversal

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
 * @return {number}
 */
var maxDepth = function(root) {
    if (root === null) {
        return 0
    }
    if (root.left === null && root.right === null) {
        return 1
    }

    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};