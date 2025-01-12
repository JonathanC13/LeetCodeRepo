// https://leetcode.com/problems/concatenation-of-array/

/*
create res array with size 2 * nums.length
iterate the nums
    res[i] = nums[i]    // first array concatenated
    res[i + n] = nums[i]    // second array concetenated

Time: O(n)
Space: O(n) // 2 * n ~= n
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    if (nums.length === 0) {
        return nums
    }

    const n = nums.length
    const res = new Array(2 * n)

    for (let i = 0; i < n; i ++) {
        res[i] = nums[i]
        res[i + n] = nums[i]
    }

    return res
};