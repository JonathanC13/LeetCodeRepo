// https://leetcode.com/problems/maximum-sum-circular-subarray/

/*
case 1: maxSum is within 0 to n
case 2: max sum = total Sum - min Sum subarray

- Time: O(n)
- Space: O(1)
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
    if (nums.length === 0) {
        return 0
    }

    let currMax = 0
    let maxSum = nums[0]
    let currMin = 0
    let minSum = nums[0]
    let total = 0
    for (let i = 0; i < nums.length; i ++) {
        total += nums[i]

        currMax = Math.max(currMax + nums[i], nums[i])
        maxSum = Math.max(maxSum, currMax)
        currMin = Math.min(currMin + nums[i], nums[i])
        minSum = Math.min(minSum, currMin)
    }

    return maxSum > 0 ? Math.max(maxSum, total - minSum) : maxSum
};