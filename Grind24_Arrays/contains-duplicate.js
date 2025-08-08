// https://leetcode.com/problems/contains-duplicate/description/

/*
create a Set

iterate i in nums
    if nums[i] in Set
        return true
    else
        add nums[i] to set

return false

- Time: O(n)
- Space: O(n)
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    if (nums.length === 0) {
        return false
    }

    const occur = new Set()
    for (let i = 0; i < nums.length; i ++) {
        if (occur.has(nums[i])) {
            return true
        } else {
            occur.add(nums[i])
        }
    }

    return false
};