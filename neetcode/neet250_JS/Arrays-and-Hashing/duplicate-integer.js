// https://neetcode.io/problems/duplicate-integer

/*
maintain a Set of the seen numbers
iterate the nums
    if Set has num:
        return true
    else
        insert num into the Set

return false

Time: O(n)
Space: O(n) // if all unique, max space is n
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

        const n = nums.length
        const seen = new Set()

        for (let i = 0; i < n; i ++) {
            if (seen.has(nums[i])) {
                return true
            } else {
                seen.add(nums[i])
            }
        }
        
        return false
    }
}
