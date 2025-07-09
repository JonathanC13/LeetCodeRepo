// https://leetcode.com/problems/sum-root-to-leaf-numbers/description/?envType=study-plan-v2&envId=top-interview-150

/*
recursive dfs, parameter to maintin current vals in path
    base case 1: if root === null, leaf terminate so push arr.join('') into num arr

    arr.push(root.val)
    build(root.left, arr, numArr)
    build(root.right, arr, numArr)
    arr.pop()

    return

after sum all the numbers in numArr

- Time: O(n)
- Space: O(h)

** faster to maintain and update total sum as reach leaf node
- Time: O(n)
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

const dfs = (node, arr, total) => {
    if (node === null) {
        return
    }

    arr.push(node.val)
    if (node.left === null && node.right === null) {
        // console.log(arr)
        total[0] += Number(arr.join(''))
        arr.pop()
        return
    }

    dfs(node.left, arr, total)
    dfs(node.right, arr, total)
    arr.pop()

    return
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    if (root === null) {
        return 0
    }
    const arr = new Array()
    const total = [0]
    dfs(root, arr, total)
    return total[0]
};