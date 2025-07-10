// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description/?envType=study-plan-v2&envId=top-interview-150

/*
*If p or q not guarenteed to exists, before starting traverse once, Time O(n), to check if both exist. exists = [false, false] then update when seen.

since binary tree not in particular order, need to traverse each node to treat as potential LCA

if p or q exists in left subtree and p or q exists in right subtree, return root as LCA
else since guarenteed both p and q exists return left or right that is not null. This is due to p or q can be the LCA and the 'missing' one is in a subtree of the 'found' one

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
    if (left !== null && right !== null) {
        return root
    } else {
        return left !== null ? left : right
    }
};