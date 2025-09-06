// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description/

/*
// since not a search tree, must check every node until LCA found.
// Note: if problem does not guarentee p and q exists, create [pExists = false, qExists = false] and traverse to toggle bool, then at end check if both are true.

// recursive traversal, post order determine if this node is the LCA
main
    base case 1
    if (root === null)
        return null

    base case 2:
    if (root === p || root === q){
        return root // since problem guarentees that p and q exist, this is potential LCA
    }

    // traverse left
    const left = find(root.left, p, q)
    // traverse right
    const right = find(root.right, p, q)

    if (left === null && right === null) {
        return null
    else if (left !== null && right !== null) {
        return root // since the targets in the left and right. This is the LCA
    // 1. since guarenteed p and q exists finding one of the targets means it could be the LCA
    // 2. if LCA found with left and right subtree have the targets
    // propagate the LCA up
    } else if (left !== null)   
        return left
    else
        return right

- Time: O(n)
- Space: O(h)

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (root === null) {
        return null
    }

    if (root === p || root === q) {
        return root
    }

    const left = lowestCommonAncestor(root.left, p, q)
    const right = lowestCommonAncestor(root.right, p, q)

    if (left === null && right === null) {
        return null
    } else if (left !== null && right !== null) {
        return root
    } else if (left !== null) {
        return left
    } else {
        return right
    }
};