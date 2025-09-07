// https://leetcode.com/problems/path-sum-ii/description/

/**
main
    create var to hold res = new Array()
    
    dfs(root, targetSum, currSum, current path vals, res)

    return res

recursive traverse
    base case 1:
    if (node === null) {
        return
    }

    currSum += node.val
    currPath.push(node.val)
    if (targetSum === currSum && node.left === null && node.right === null) {
        res.push(new Array(...currPath))
        currPathVals.pop()
        return
    }

    dfs(node.left, ...)
    dfs(node.right, ...)
    currPath.pop()

    return

- Time: O(n)    // must visit every node
- Space: O(h)
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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    const res = new Array()
    dfs(root, targetSum, 0, new Array(), res)
    return res
};

const dfs = function(node, targetSum, currSum, currPathVals, res) {
    if (node === null) {
        return
    }

    currSum += node.val
    currPathVals.push(node.val)
    if (targetSum === currSum && node.left === null && node.right === null) {
        res.push(Array.from(currPathVals))
        currPathVals.pop()
        return
    }
    
    dfs(node.left, targetSum, currSum, currPathVals, res)
    dfs(node.right, targetSum, currSum, currPathVals, res)
    currPathVals.pop()

    return
}