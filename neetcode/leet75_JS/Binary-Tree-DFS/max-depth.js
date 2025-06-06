// https://leetcode.com/problems/maximum-depth-of-binary-tree/?envType=study-plan-v2&envId=leetcode-75

/*
traverse depth first, once the node node is null, return 0
each node will return the max depth of its left and right subtree (evaluated post order so depth count occurs when both children evaluated) + itself (1)

- Time: O(n)    //n = number of nodes
- Space: O(h)   // height of the tree
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

    return 1 + Math.max(left, right)
};