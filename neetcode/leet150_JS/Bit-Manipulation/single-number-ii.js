// https://leetcode.com/problems/single-number-ii/?envType=study-plan-v2&envId=top-interview-150

/**
Literally no idea how to use bit manipulation.

https://leetcode.com/problems/single-number-ii/solutions/43295/detailed-explanation-and-generalization-of-the-bitwise-operation-method-for-single-numbers/?envType=study-plan-v2&envId=top-interview-150

- Time: O(n)
- Space: O(1)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    x1 = 0
    x2 = 0
    mask = 0

    for (let i = 0; i < nums.length; i ++) {
        x2 = x2 ^ x1 & nums[i]
        x1 = x1 ^ nums[i]
        mask = ~(x1 & x2)
        x2 = x2 & mask
        x1 = x1 & mask
    }

    return x1
};