// https://neetcode.io/problems/duplicate-integer

/*
create Set and if the current value is already in the Set, then it is a duplicate

- Time: O(n)
- Space: O(n)
*/

class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const st = new Set()
        for (let i = 0; i < nums.length; i ++) {
            if (st.has(nums[i])) {
                return true
            }

            st.add(nums[i])
        }

        return false
    }
}
