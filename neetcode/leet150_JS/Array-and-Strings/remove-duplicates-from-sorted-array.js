// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150

/*
create variable to record last seen value

two pointers
    1. i = where to insert unique value
    2. j = iterate nums looking for value that is larger than previously picked

return i

- Time: O(n)
- Space: O(1)
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let seen = Number.NEGATIVE_INFINITY
    let i = 0
    for (let j = 0; j < nums.length; j ++) {
        if (seen < nums[j]) {
            nums[i] = nums[j]
            seen = nums[j]
            i += 1
        }
    }

    return i
};