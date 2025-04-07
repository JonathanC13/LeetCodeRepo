// https://neetcode.io/problems/maximum-product-subarray

/*
edge case 1: if nums.length === 0: return []

prefix & suffix soln
iterate the i to nums.length
    get the prefix product from 0 to i
    get the suffix product from nums.length - i - 1
    save the max = max(max, prefix, suffix)

- Time: O(n)
- Space: O(1)

This works because:
    1. if there are odd number of negative prefix or suffix will get the soln max before includes the last negative to keep it negative
    2. if there are even negatives, by iterating the whole nums it will include all negatives and get the max.
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

        let prefix = 0
        let suffix = 0
        let res = Number.NEGATIVE_INFINITY

        for (let i = 0; i < nums.length; i ++) {
            prefix = nums[i] * (prefix === 0 ? 1 : prefix)
            suffix = nums[nums.length - i - 1] * (suffix === 0 ? 1 : suffix)
            res = Math.max(res, prefix, suffix)
        }

        return res === -0 ? 0 : res
    }
}
