// https://neetcode.io/problems/count-good-nodes-in-binary-tree

/*
recursive dfs, track: node <TreeNode>, goodNodes <arr size 1>, max value seen on path to current node
    if (node === null)
        return
    if (node.val >= maxSeen) {
        goodNodes[0] += 1
    }

    // continue left
    this.dfs(node.left, goodNodes, Math.max(node.val, maxSeen))
    // and right
    this.dfs(node.right, goodNodes, Math.max(node.val, maxSeen))

    return

- Time: O(n)
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

        const goodNodes = [0]
        this.dfs(root, goodNodes, Number.NEGATIVE_INFINITY)
        return goodNodes[0]
    }

    dfs(node, goodNodes, maxSeen) {
        if (node === null) {
            return
        }
        if (node.val >= maxSeen) {
            goodNodes[0] += 1
        }

        this.dfs(node.left, goodNodes, Math.max(node.val, maxSeen))
        this.dfs(node.right, goodNodes, Math.max(node.val, maxSeen))

        return
    }
}


// dfs(node, maxVal) {
//     if (!node) {
//         return 0;
//     }

//     let res = node.val >= maxVal ? 1 : 0;
//     maxVal = Math.max(maxVal, node.val);
//     res += this.dfs(node.left, maxVal);
//     res += this.dfs(node.right, maxVal);
//     return res;
// }