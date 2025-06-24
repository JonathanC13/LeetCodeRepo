// https://leetcode.com/problems/remove-element/description/?envType=study-plan-v2&envId=top-interview-150

/*
two pointers
    1. i = where to overwrite value that is not val
    2. to find values that are not val

return i

- Time: O(n)
- Space: O(1)
*/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i = 0
    for (let j = 0; j < nums.length; j ++) {
        if (nums[j] !== val) {
            nums[i] = nums[j]
            i += 1
        }
    }
    console.log(nums)
    return i
};