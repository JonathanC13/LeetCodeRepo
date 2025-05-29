// https://leetcode.com/problems/product-of-array-except-self/description/?envType=study-plan-v2&envId=leetcode-75

/*
create and populate an Array where i contains the prefix product
create and populate an Array where i contains the suffix product

res at i = prefix[i] * suffix[i]

- Time: O(n)    // n + n
- Space: O(n)   // 2 * n
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length
    const prefix = new Array(n).fill(1)
    const suffix = new Array(n).fill(1)

    for (let i = 1; i < n; i ++) {
        prefix[i] = prefix[i - 1] * nums[i - 1]
        suffix[n - 1 - i] = suffix[n - i] * nums[n - i]
    }

    for (let i = 0; i < n; i ++) {
        nums[i] = prefix[i] * suffix[i]
    }

    return nums
};