// https://leetcode.com/problems/product-of-array-except-self/description/

/**
create res array

iterate nums forward
    store the prefix product in res

iterate nums backward
    store the suffix product * res[i] in res

- Time: O(n)
- Space: O(n)   // n for result array
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    if (nums.length === 0) {
        return []
    }

    const res = new Array(nums.length).fill(1)

    let prefix = 1
    for (let i = 1; i < nums.length; i ++) {
        res[i] = prefix * nums[i - 1]
        prefix = res[i]
    }

    let suffix = 1
    for (let i = nums.length - 2; i >= 0; i --) {
        res[i] = suffix * nums[i + 1] * res[i]
        suffix = suffix * nums[i + 1]
    }

    return res

};