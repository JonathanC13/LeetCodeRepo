// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/description/?envType=study-plan-v2&envId=top-interview-150

/*
- height balanced binary tree
    1. The height of two subtrees of every node are never greater than 1.

recursive solution.
    if (nums.length === 0) {
        return null
    }

    get mid value = floor((r - l) / 2) + l
    create node with mid value

    newNode.left = rec(nums.slice(0, mid))  // so the left children are only created from the sliced left portion
    newNode.right = rec(nums.slice(mid + 1))    // mid + 1 to end

    return newNode

- Time: O(n)
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if (nums.length === 0) {
        return null
    }

    const mid = Math.floor((nums.length - 0) / 2) + 0
    const newNode = new TreeNode(nums[mid])
    newNode.left = sortedArrayToBST(nums.slice(0, mid))
    newNode.right = sortedArrayToBST(nums.slice(mid + 1))
    return newNode
};