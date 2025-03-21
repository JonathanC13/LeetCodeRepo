// https://neetcode.io/problems/duplicate-integer

/*
edge case 1: if nums.length < 2: return false

create a Set that holds the values already seen
iterate the nums Array
    if nums[i] in Set: return true
    else
        add nums[i] to Set

return false

- Time: O(n)
- Space: O(n)   // potentially all unqiue
*/

class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        if (nums.length < 2) {
            return false
        }

        const seen = new Set()
        for (let i = 0; i < nums.length; i ++) {
            if (seen.has(nums[i])) {
                return true
            } else {
                seen.add(nums[i])
            }
        }

        return false
    }
}
