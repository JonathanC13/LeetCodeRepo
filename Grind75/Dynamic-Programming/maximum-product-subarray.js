// https://leetcode.com/problems/maximum-product-subarray/description/

/**
prefix products
postfix products

if even number of negatives, once nums traversed the final product is the max
if odd number of negatives, since traversing pre and post, one side will get and save the max.
when encounter 0, set prod = 1 when evaluating the next product

- Time: O(n)
- Space: O(1)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let pre = 1
    let post = 1
    let max = nums[0]

    for (let i = 0; i < nums.length; i ++) {
        pre = pre * nums[i]
        post = post * nums[nums.length - i - 1]

        max = Math.max(max, pre, post)

        if (pre === 0) {
            pre = 1
        }
        if (post === 0) {
            post = 1
        }
    }
    return max === -0 ? 0 : max
};