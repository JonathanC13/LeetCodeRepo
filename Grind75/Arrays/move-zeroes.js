// https://leetcode.com/problems/move-zeroes/description/

/**
r = 0
iterate l in nums
    if (nums[l] === 0)
        find first non zero value to swap
        r = max(r, l)   // to keep r in front of left to prevent swapping backwards
        while (r < nums.length and nums[r] === 0)
            r += 1

        if r >= nums.length
            return  // no more values to swap with
        else
            swap nums[l] and nums[r]

- Time: O(n)
- Space: O(1)
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if (nums.length < 2) {
        return
    }

    let r = 0
    for (let l = 0; l < nums.length; l ++) {
        if (nums[l] === 0) {
            r = Math.max(r, l)
            while (r < nums.length && nums[r] === 0) {
                r += 1
            }

            if (r >= nums.length) {
                return
            } else {
                const tmp = nums[l]
                nums[l] = nums[r]
                nums[r] = tmp
            }
        }
    }

    return
};