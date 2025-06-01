// https://leetcode.com/problems/find-pivot-index/description/?envType=study-plan-v2&envId=leetcode-75

/*
edge case 1: if nums.length === 0: return -1

iterate nums to get the total sum

prefixSum = 0
iterate nums
    if (prefixSum === (total - nums[i]) / 2) {
        return i
    }
    prefixSum += nums[i]

return -1

- Time: O(n)
- Space: O(1)
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    if (nums.length === 0) {
        return -1
    }

    let total = 0
    for (let i = 0; i < nums.length; i ++) {
        total += nums[i]
    }

    let prefixSum = 0
    for (let i = 0; i < nums.length; i ++) {
        
        if (prefixSum === (total - nums[i]) / 2) {
            return i
        }

        prefixSum += nums[i]
    }

    return -1
};