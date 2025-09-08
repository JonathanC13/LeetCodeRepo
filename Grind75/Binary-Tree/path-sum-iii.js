// https://leetcode.com/problems/path-sum-iii/description/

/**
recusively traverse and memoization with Map
    globl map = new Map // the map holds the previous path sums from root to that node.
    // initial state is {0: 1} since if the currPathSum - target === 0, then there is a path
    map.set(0, 1)

    rec(...)

recursive
    currPathSum += node.val // sum from root to current node
    prevPathSumNeeded = currPathSum - target   // get the prev path sum that if exists means there is a path from root to current node that equals target. target = (sum from path to curr node) - (connected prev path from root to that node)

    numPaths += memo.get(prevPathSumNeeded) || 0
    // in memo set the currPathSum with +1 ways to 0
    memo.set(currPathSum, (memo.get(currPathSum) || 0) + 1)
    //
    e.g. 10 -> 8, tar = 8
    1.
        currPathSum = 8
        prevPathSumNeeded = 10 - 8 = 2 // meaning there needs to be a previous path that has sum 2 so that curr(10) - old(2) = target
        memo does not have 2, response = 0
        memo set 10: 1

    2.
        currPathSum = 18
        prevPathSumNeeded = 10
        memo has 10, response = 1   // since currPath(18) - prevPath(10) = target, the number of paths is added.
        memo set 18: 1
    //

    // go left
    rec(...left)
    // go right
    rec(...right)

    memo set currPathSum -= 1 ways  // since this node fully processed, the path returns to its parent therefore this node is not included in the path anymore

- Time: O(n)
- Space: O(h)



** brute
must use each node as the starting point for a path in search for targetSum and also if targetSum found on path if there are more nodes continue.

- Time: O(n log n)
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
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    const numPaths = [0]
    const paths = new Array()
    const memo = new Map([[0,1]])
    dfs(root, targetSum, 0, memo, numPaths)

    // brute
    //startingPoint(root, targetSum, numPaths, paths)
    //console.log(paths)
    return numPaths[0]
};

const dfs = function(node, targetSum, currPathSum, memo, numPaths) {
    if (node === null) {
        return
    }

    currPathSum += node.val
    const prevPathSumNeeded = currPathSum - targetSum

    numPaths[0] += memo.get(prevPathSumNeeded) || 0
    memo.set(currPathSum, (memo.get(currPathSum) || 0) + 1)

    dfs(node.left, targetSum, currPathSum, memo, numPaths)
    dfs(node.right, targetSum, currPathSum, memo, numPaths)

    memo.set(currPathSum, memo.get(currPathSum) - 1)
    return
}

const startingPoint = (root, targetSum, numPaths, paths) => {
    if (root === null) {
        return
    }

    search(root, targetSum, 0, numPaths, paths, new Array())

    startingPoint(root.left, targetSum, numPaths, paths)
    startingPoint(root.right, targetSum, numPaths, paths)
    return
}

const search = (node, targetSum, currSum, numPaths, paths, currPath) => {
    if (node === null) {
        return
    }

    currSum += node.val
    //currPath.push(node.val)
    if (targetSum === currSum) {
        numPaths[0] += 1
        //paths.push(Array.from(currPath))  // if include, heap out of memory
    }

    search(node.left, targetSum, currSum, numPaths, paths, currPath)
    search(node.right, targetSum, currSum, numPaths, paths, currPath)
    //currPath.pop()

    return
}