// https://neetcode.io/problems/maximum-product-subarray

/*
Brute force
for let i = 0; i < nums.length; i ++
    curr = nums[i]
    maxProd = Math.max(maxProd, curr)
    for (let j = i + 1; j < nums.length; j ++) {
        curr *= nums[j]
        maxProd = Math.max(maxProd, curr)
    }
return maxProd
- Time: O(n^2)
- Space: O(1)

Prefix, suffix soln

iterate the nums
    get the prefix product at i, if encounter a 0, disregard and mutliply by 1 instead
    get the suffix product at nums.length - i - 1 , if encounter a 0, disregard and mutliply by 1 instead
    
    track the max of the curr prefix and curr suffix product

return max

This works because if even number of negative values, it wouldn't matter which end we traversed from but if odd number of negatives, by traversing prefix and suffix we will record the max before it goes negative.

- Time: O(n)
- Space: O(1)
*/

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        if (nums.length === 0) {
            return 0
        }
        if (nums.length === 1) {
            return nums[0]
        }

        let prefix = nums[0]
        let suffix = nums[nums.length - 1]
        let max = Math.max(prefix, suffix)
        for (let i = 1; i < nums.length; i ++) {
            prefix = nums[i] * (prefix === 0 ? 1 : prefix)
            suffix = nums[nums.length - i - 1] * (suffix === 0 ? 1 : suffix)
            max = Math.max(max, prefix, suffix)
        }

        return max === -0 ? 0 : max
    }
}
