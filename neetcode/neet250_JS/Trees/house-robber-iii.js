// https://leetcode.com/problems/house-robber-iii/

/*
- edge case 1: if root === null: return 0

At each node, the thief has 2 options, to rob or not rob. If they choose to rob, then they children nodes cannot be robbed

rob(root) {
    if (root === null) {
        return 0    // nothing to rob
    }

    // two options, rob current house or do not. 
    // 1. If rob current house, cannot rob the children houses, but can rob the grandchildren
    let robbed = node.val
    if (node.left) {
        robbed += rob(node.left.left) + rob(node.left.right)
    }
    if (node.right) {
        robbed += rob(node.right.left) + rob(node.right.right) 
    }
    
    // 2. If not rob the current house, can rob the children houses
    const notRobbed = rob(root.left) + rob(root.right)

    // return the max value path that resulted in robbing or not robbing the current node
    return Math.max(robbed, notRobbed)

}

- Time: O(n * (4^n + 2^n)). each node has 2 decisions 2^n. For rob, n = 4^n due to 4 grandchilren. For not rob, n = 2^n. Result is n * (4^n + 2^n)
- Space: O(n)

TLE , to optimize use dynamic programming with memoization for the already calculated results.
Use a Map for the reference of the node : maxValue
   
- Time: (n * (4^log n + 2^log n))
- Space: O(n)
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
 * @return {number}
 */
var rob = function(root) {
    if (root === null) {
        return 0
    }

    const dpMap = new Map()
    return dfs(root, dpMap)
    
};

var dfs = function(root, dpMap) {
    if (root === null) {
        return 0
    }
    if (dpMap.has(root)) {
        return dpMap.get(root)
    }

    // two options, rob current house or do not. 
    // 1. If rob current house, cannot rob the children houses, but can rob the grandchildren
    let robbed = root.val
    if (root.left) {
        robbed += dfs(root.left.left, dpMap) + dfs(root.left.right, dpMap)
    }
    if (root.right) {
        robbed += dfs(root.right.left, dpMap) + dfs(root.right.right, dpMap) 
    }
    
    // 2. If not rob the current house, can rob the children houses
    const notRobbed = dfs(root.left, dpMap) + dfs(root.right, dpMap)

    dpMap.set(root, Math.max(robbed, notRobbed))

    // return the max value path that resulted in robbing or not robbing the current node
    return dpMap.get(root)
}