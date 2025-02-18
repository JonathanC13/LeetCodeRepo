// https://neetcode.io/problems/subtree-of-a-binary-tree

/*
subtree leafs are the same as the root

DFS compare the root and subRoot, if true, return true
else: evaluate at left and right child.

*DFS(root, subRoot) {
    if (!root && !subRoot) {
        return true
    }

    if (root && subRoot && root.val === subRoot) {
        const leftMatch = this.DFS(root.left, subRoot.left)
        const rightMatch = this.DFS(root.right, subRoot.right)
        return leftMatch && rightMatch
    } else {
        return false
    }
}

- Time: O(n * m). n nodes in root * m nodes in subRoot
- Space: O(n). n nodes in root

*/

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if (!root && subRoot || root && !subRoot) {
            return false
        }

        if (this.compareTree(root, subRoot)) {
            return true
        } else {
            
            return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot)
        }
    }

    compareTree(root, subRoot) {
        if (!root && !subRoot) {
            return true
        }

        if (root && subRoot && root.val === subRoot.val) {
            return this.compareTree(root.left, subRoot.left) && this.compareTree(root.right, subRoot.right)
        } else {
            return false
        }
    }
}
