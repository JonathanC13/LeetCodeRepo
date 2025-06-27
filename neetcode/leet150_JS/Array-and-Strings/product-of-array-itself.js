// https://leetcode.com/problems/product-of-array-except-self/description/?envType=study-plan-v2&envId=top-interview-150

/*
*with division

If the input array nums does not contain any zeros, the problem can be solved efficiently using division.

    Calculate the total product:
    First, compute the product of all elements in the nums array. Let this be total_product.

    Calculate individual products:
    For each element nums[i] in the array, answer[i] can be found by dividing total_product by nums[i]

*without division, Time: O(n)
prefix product
suffix product
output[i] = prefix[i] * suffix[i]

* with O(1) space (where output array does not contribute to the space complexity), can store the most recent prefix and suffix into variables
    iterate forward to store the prefix product into the output array
    iterate backward to get the suffix and calculate the result at i
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const res = new Array(nums.length).fill(1)

    for (let i = 1; i < nums.length; i ++) {
        res[i] = res[i - 1] * nums[i - 1]
    }

    let suffix = 1
    for (let i = nums.length - 2; i >= 0; i --) {
        suffix = suffix * nums[i + 1]
        res[i] = suffix * res[i]
    }

    return res
};