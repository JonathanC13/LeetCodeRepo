// https://neetcode.io/problems/maximum-product-subarray

/*
create an Array for the prefix products, each index stores the product of all the values before it excluding self.
create an Array for the postfix products *** instead of array, could just store the prefix and postfix into a variable since the Arrays are not referenced later at all.
While saving the max product seen
    - since from both ends, if there is a single negative one side will hold the maximum product seen. If there are an even number of negatives then the final will be the maximum product.
    - if encounter prefix or postfix at prev index === 0 then multiply by 1, want to ignore the zeroing of the product and start new subarray

- Time: O(n)    // 2 * n
- Space: O(n)   // 2 * n
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

        const n = nums.length
        const prefix = new Array(n)
        prefix[0] = nums[0]
        const postfix = new Array(n)
        postfix[n - 1] = nums[n - 1]
        let max = Math.max(nums[0], nums[n - 1])

        for (let i = 1; i < n; i ++) { 
            prefix[i] = (prefix[i - 1] === 0 ? 1 : prefix[i - 1]) * nums[i]
            postfix[n - i - 1] = (postfix[n - i] === 0 ? 1 : postfix[n - i]) * nums[n - i - 1]

            max = Math.max(max, prefix[i], postfix[n - i - 1])
        }

        return max === -0 ? 0 : max
    }
}
