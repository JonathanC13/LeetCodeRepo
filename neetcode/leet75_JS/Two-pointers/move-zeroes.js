// https://leetcode.com/problems/move-zeroes/description/?envType=study-plan-v2&envId=leetcode-75

/*
create one pointer that will be the swap to index due to the value being a 0
create one pointer that will search for a non-zero value

- Time: O(n)
- Space: O(1)
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let l = 0

    for (let r = 1; r < nums.length; r ++) {
        if (nums[l] !== 0) {
            l ++
            continue
        } else if (nums[r] !== 0) {
            nums[l] = nums[r]
            nums[r] = 0
            l += 1
        }
    }
};