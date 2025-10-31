// https://leetcode.com/problems/subsets/

/**
Time: O(n * 2^n)    // each n * has 2 paths
Space: O(n)
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    if (nums.length === 0) {
        return []
    }

    const res = new Array()
    rec(nums, 0, new Array(), res)
    return res
};

const rec = (nums, i ,subset, res) => {
    if (i === nums.length) {
        // no more elements to choose
        res.push(Array.from(subset))
        return
    }

    // path 1: do not use current element at index i
    rec(nums, i + 1, subset, res)

    // path 2: use current element at index i
    subset.push(nums[i])
    rec(nums, i + 1, subset, res)
    subset.pop()

    return
}