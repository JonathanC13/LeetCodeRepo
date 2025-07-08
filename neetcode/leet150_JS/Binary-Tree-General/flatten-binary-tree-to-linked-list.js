// https://leetcode.com/problems/flatten-binary-tree-to-linked-list/description/?envType=study-plan-v2&envId=top-interview-150

/*
right side post order
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    let itr = root  // itr is the top of the link, itr.right is the bottom of the link
    while (itr !== null) {
        if (itr.left !== null) {
            let pre = itr.left
            while (pre.right !== null) {
                pre = pre.right // get tail of the insert subtree to link to bottom of the link
            }
            pre.right = itr.right   // insert tail to link bottom
            itr.right = itr.left    // link top to insert head
            itr.left = null
        } 
        itr = itr.right
    }
};