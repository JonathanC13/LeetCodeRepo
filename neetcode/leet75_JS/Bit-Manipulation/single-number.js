// https://leetcode.com/problems/single-number/description/?envType=study-plan-v2&envId=leetcode-75

/*
iterate the nums and XOR each, the elements that appear twice will cancel eachother and at the end the single int will be remaining.

- Time: O(n)
- Space: O(1)
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let res = 0
    for (let i = 0; i < nums.length; i ++) {
        res ^= nums[i]
    }

    return res
};