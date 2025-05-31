// https://leetcode.com/problems/maximum-average-subarray-i/description/?envType=study-plan-v2&envId=leetcode-75

/*
edge case 1: if nums.length < k: return 0

create the initial window and get the sum
0 to k

record curr max average subarray = sum / k

l = 0
r = l + k
for r < nums.length
    subtract nums[l] from sum
    add nums[r] to sum
    eval if new sum / k is new max

return maxAvg

- Time: O(n)
- Space: O(1)

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    if (nums.length < k) {
        return 0
    }

    let windowSum = 0
    for (let i = 0; i < k; i ++) {
        windowSum += nums[i]
    }
    let maxAvg = windowSum / k

    let l = 0
    for (let r = l + k; r < nums.length; r ++) {
        windowSum = windowSum - nums[l] + nums[r]
        l += 1
        maxAvg = Math.max(maxAvg, windowSum / k)
    }

    return maxAvg
};