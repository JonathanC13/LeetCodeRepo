// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

/**
recursive
    base case if (l < r)    // or can just keep slicing the array to the next recursive call.
        return null

    get mid of l and r
    create new Node with nums[mid]
    node.left = rec(nums, l, mid - 1)
    node.right = rec(nums, mid + 1, r)

    return newNode

* By building with binary splitting, it will produce a balanced tree and since it is sorted in non-descending order it will produce a correct BST.

- Time: O(n)    // n since need to visit all nodes
- Space: O(n)   // n for created nodes
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

    const mid = Math.floor((nums.length - 1 - 0) / 2) + 0
    const newNode = new TreeNode(nums[mid])
    newNode.left = sortedArrayToBST(nums.slice(0, mid))
    newNode.right = sortedArrayToBST(nums.slice(mid + 1))   // to end
    return newNode
};