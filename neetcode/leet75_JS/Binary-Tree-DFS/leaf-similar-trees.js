// https://leetcode.com/problems/leaf-similar-trees/?envType=study-plan-v2&envId=leetcode-75

/*
have to run the dfs 2 times sicne 2 trees
DFS post order if the left and right are null, push into Array

if Arrays' length !==, then return false, else iterate and compare

- Time: O(n1 + n2) // n1 + n2 + leaves
- Space: O(h1 + h2)
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

var dfs = (root, arr) => {
    if (root === null) {
        return null
    }

    const left = dfs(root.left, arr)
    const right = dfs(root.right, arr)
    if (left === null && right === null) {
        arr.push(root.val)
    }
    return root
}

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    if (root1 ^ root2) {
        return false
    }

    const arr1 = new Array()
    const arr2 = new Array()
    dfs(root1, arr1)
    dfs(root2, arr2)

    if (arr1.length !== arr2.length) {
        return false
    } else {
        for (let i = 0; i < arr1.length; i ++) {
            if (arr1[i] !== arr2[i]) {
                return false
            }
        }

        return true
    }
};