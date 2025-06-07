// https://leetcode.com/problems/path-sum-iii/description/?envType=study-plan-v2&envId=leetcode-75

/*
create global var to record the number of paths

dfsRoot each node as the root to call dfsPaths

dfsPaths. for the root, must evaluate all child nodes to leaf because there many be multiple paths on the same branch
    each recursive call passes the node, currSum, paths
        base case 1: if node === null: return

        currSum = currSum - node.val
        if (currSum === 0) {
            paths[0] += 1
        }

        go left with currSum
        go right with currSum

        return

- Time: O(n^2) // n for number of nodes to pick as root * n for number of nodes to traverse in search of paths
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

const dfsPaths = (node, targetSum, paths) => {
    if (node === null) {
        return
    }

    targetSum = targetSum - node.val
    if (targetSum === 0) {
        paths[0] += 1
    }

    dfsPaths(node.left, targetSum, paths)
    dfsPaths(node.right, targetSum, paths)
    return
}

const dfsRoot = (node, targetSum, paths) => {
    if (node === null) {
        return
    }

    dfsPaths(node, targetSum, paths)

    dfsRoot(node.left, targetSum, paths)
    dfsRoot(node.right, targetSum, paths)
    return
}
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    const paths = [0]

    dfsRoot(root, targetSum, paths)
    return paths[0]
};