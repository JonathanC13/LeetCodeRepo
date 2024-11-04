// https://neetcode.io/problems/products-of-array-discluding-self

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        if (nums.length === 0) {
            return 0
        }

        // without division and O(n) time
        const leng = nums.length
        const left = Array(leng).fill(1)
        const right = Array(leng).fill(1)

        for (let i = 1; i < leng; i++) {
            left[i] = left[i-1] * nums[i-1]
        }

        for (let i = leng-2; i >= 0; i--) {
            right[i] = right[i+1] * nums[i+1]
        }

        for (let i = 0; i < leng; i++) {
            nums[i] = left[i] * right[i]
        }

        return nums
    }
}
