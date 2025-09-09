// https://leetcode.com/problems/subtree-of-another-tree/description/

/**
for every node in Tree with root
    eval if Tree with subRoot fits

- Time: O(n * m)
- Space: O(h)   // h = height of Tree root
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    if (root === null && subRoot === null) {
        return true
    }
    if (root === null) {
        return false
    }

    if (isSameTree(root, subRoot) === true) {
        return true
    }

    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
};

const isSameTree = function(root, subRoot) {
    if (root === null && subRoot === null) {
        return true
    }

    if (root !== null && subRoot !== null && root.val === subRoot.val) {
        return isSameTree(root.left, subRoot.left) && isSameTree(root.right, subRoot.right)
    } else {
        return false
    }
}