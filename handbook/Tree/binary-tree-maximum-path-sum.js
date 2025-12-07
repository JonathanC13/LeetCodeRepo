// https://leetcode.com/problems/binary-tree-maximum-path-sum/

/**
 * 1. Assumptions
 *  1. Can have any Number
 * 
 * 2. Input validation
 *  1. Binary tree is valid.
 * 
 * 3. time and space constraints
 *  BTTC: O(n)  // need to visit every node
 *  Space: O(h)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if root === null: return 0
 *  test cases
 *  1. All positive Numbers
 *      inputs
 *          [1, 2, 3]
 *      expected output
 *          6
 *  2. Contains negative Numbers
 *      inputs
 *          [-1, 2, 3, n, n, 4, 5]
 *      expected output
 *          12
 * 
 *  5. visualize by drawing and manually solve
 *  6. break into subproblems
 *      Need to track the maximum path globally since each recursive call returns the max from the left OR right subtree + current node.
 *      The max path sum can be any node + left max sum + right max sum
 * 
 *      recursive dfs
 *      base case 1:
 *      if root === null
 *          no more node remaining
 *          return 0
 * 
 *      get the max Sum from the left subtree
 *      get the max Sum from the right subtree
 * 
 *      update Max path sum
 *      max[0] = max(max[0], left max + current node val, right max + current node val, combine path = left max + right max + current nodeval)
 * 
 *      only return the max of:
 *      left max + current node val, right max + current node val, 0
 *      // since path can only contain a node once, return the max of a branch.
 *      // if all negative, return 0 so that the caller node can evaluate itself from 0
 * 
 * 7. algos
 *  - binary tree traversal
 * 
 * 8. data structures
 *  - Binary tree
 * 
 * 9. complexity
 *  Time: O(n)
 *  Space: O(h)
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
var maxPathSum = function(root) {
    if (root === null) {
        return 0
    }

    let max = [root.val]    // need external tracking since max path can be a sub tree and each recursive call returns the max of a branch so that the current node can try to get a better max
    dfs(root, max)
    return max[0]
};

const dfs = (node, max) => {
    if (node === null) {
        return 0
    }

    const leftMax = dfs(node.left, max)
    const rightMax = dfs(node.right, max)
    max[0] = Math.max(max[0], leftMax + node.val, rightMax + node.val, leftMax + rightMax + node.val)

    return Math.max(leftMax + node.val, rightMax + node.val, 0) // path can only have a node once, so return max branch + current node. Or return 0 if others negative since desire max path reset to 0.
}