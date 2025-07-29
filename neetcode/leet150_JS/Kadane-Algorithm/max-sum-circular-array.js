// https://leetcode.com/problems/maximum-sum-circular-subarray/description/?envType=study-plan-v2&envId=top-interview-150

/*
get the total sum
get the max subarray sum
get the min subarray sum

if maxSum > 0: 
    if maxSum > totalSum - minSum    // max subarray does not wrap in circular
        return maxSum   
    else return totalSum - minSum   // removing the minimum core will result in the max sum that wraps
else maxSum                     

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

    let total = 0
    let maxSum = nums[0]
    let minSum = nums[0]
    let currMax = 0
    let currMin = 0

    for (let i = 0; i < nums.length; i ++) {
        total += nums[i]
        currMax += nums[i]
        currMin += nums[i]

        maxSum = Math.max(maxSum, currMax)
        minSum = Math.min(minSum, currMin)
        if (currMax < 0) {
            currMax = 0
        }
        if (currMin > 0) {
            currMin = 0
        }
    }

    return maxSum > 0 ? Math.max(maxSum, total - minSum) : maxSum
};