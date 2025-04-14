// https://neetcode.io/problems/products-of-array-discluding-self

/*
get the prefix and suffix products and then for i the product except itself is pre[i] * suff[i]

- Time: O(n)
- Space: O(n)   // 2 * n
*/


class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const pre = new Array(nums.length).fill(1)
        const suff = new Array(nums.length).fill(1)

        for (let i = 1; i < nums.length; i ++) {
            pre[i] = nums[i - 1] * pre[i - 1]   // pre[i - 1] is the product of the nums before nums[i - 1], * nums[i - 1] to include it
            suff[nums.length - i - 1] = nums[nums.length - i] * suff[nums.length - i]
        }

        const res = new Array(nums.length)
        for (let i = 0; i < nums.length; i ++) {
            res[i] = pre[i] * suff[i]
        }

        return res
    }
}
