// https://leetcode.com/problems/count-good-nodes-in-binary-tree/description/?envType=study-plan-v2&envId=leetcode-75

/*
create variable for global count of good nodes
each recursive call, pass the node, max value seen on path
    base case 1: if node === null: return null

    if (node.val >= prevMax) {
        goodNodes += 1
    }

    go to left child with max(node.val, prevMax)
    go to right child with max(node.val, prevMax)
    return

- Time: O(n)    // n = number of nodes
- Space: O(h)   // h = height
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const dfs = (node, prevMax, goodNodes) => {
    if (node === null) {
        return
    }

    if (node.val >= prevMax) {
        goodNodes[0] += 1
    }
    
    dfs(node.left, Math.max(prevMax, node.val), goodNodes)
    dfs(node.right, Math.max(prevMax, node.val), goodNodes)

    return
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function(root) {
    if (root === null) {
        return 0
    }

    const goodNodes = [0]
    dfs(root, Number.NEGATIVE_INFINITY, goodNodes)
    return goodNodes[0]
};