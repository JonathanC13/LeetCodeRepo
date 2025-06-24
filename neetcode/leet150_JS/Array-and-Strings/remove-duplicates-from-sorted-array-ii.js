// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/?envType=study-plan-v2&envId=top-interview-150

/*
create a variable to record the previous value seen
create a variable for the number of times it is allowed to be seen

two pointer
    1. i = overwrite index
    2. j = find values that are seen < 2 times

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
    let maxSeen = 2
    let freqSeen = 0
    let i = 0
    for (let j = 0; j < nums.length; j ++) {
        if (seen < nums[j]) {
            nums[i] = nums[j]
            seen = nums[j]
            freqSeen = 1
            i += 1
        } else if (seen === nums[j] && freqSeen < maxSeen) {
            nums[i] = nums[j]
            freqSeen += 1
            i += 1
        }
    }

    return i
};