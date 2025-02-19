// https://neetcode.io/problems/count-good-nodes-in-binary-tree

/*
- edge case 1: if root === null: return 0

DFS (node, maxPathVal, count)
    // traverse the children while passing the max value seen in that path. If the current node is greater than that value, count + 1 and pass it on.
    if (node === null) {
        return
    }

    if (node.val >= maxPathVal) {
        count[0] += 1
    }

    // traverse left
    this.dfs(node.left, Math.max(maxPathVal, node.val), count)

    // traverse right
    this.dfs(node.right, Math.max(maxPathVal, node.val), count)

    return

- Time: O(n). n is all the nodes
- Space: O(n)
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
     * @return {number}
     */
    goodNodes(root) {
        if (root === null) {
            return 0
        }

        const count = [0]
        this.dfs(root, Number.NEGATIVE_INFINITY, count)
        return count[0]
    }

    dfs(node, maxPathVal, count) {
        if (node === null) {
            return
        }

        if (node.val >= maxPathVal) {
            count[0] += 1
        }

        this.dfs(node.left, Math.max(maxPathVal, node.val), count)
        this.dfs(node.right, Math.max(maxPathVal, node.val), count)

        return
    }
}
