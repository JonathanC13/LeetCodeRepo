// https://leetcode.com/problems/maximum-depth-of-binary-tree/description/?envType=study-plan-v2&envId=top-interview-150

/*
Must explore each branch to each leaf node and return the max depth seen

recursively traverse 
    base case 1: if null: return 0

    traverse left and then right child of the node

    return max depth(left, right) + 1 for this node

- Time: O(n)    // n = number of nodes
- Space: O(h)   // h = height of the tree
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

    const left = maxDepth(root.left)
    const right = maxDepth(root.right)

    return Math.max(left, right) + 1
};