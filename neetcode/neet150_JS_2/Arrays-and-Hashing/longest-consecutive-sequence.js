// https://neetcode.io/problems/longest-consecutive-sequence

/*
create a Map
    key: num
    val: the length of the consecutive sequence at insertion or updated if at the end of a sequence that was extended.

insert into the Map with the length of the sequence by checking -1 and +1 if it can attach to an existing sequence
upate the ends of the sequence to the new length since if another num is inserted to again extend it can get the correct current length.
    To get the low end = nums[i] - streak length of nums[i] - 1
    To get the high end = nums[i] + streak length of nums[i] + 1

- Time: O(n)
- Space: O(n)
*/

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length < 2) {
            return nums.length
        }

        const consec = new Map()
        let maxConsec = 0

        for (let i = 0; i < nums.length; i ++) {
            if (!consec.has(nums[i])) {
                // insert
                consec.set(nums[i], (consec.get(nums[i] - 1) || 0) + (consec.get(nums[i] + 1) || 0) + 1)

                // update ends
                consec.set(nums[i] - (consec.get(nums[i] - 1) || 0), consec.get(nums[i]))
                consec.set(nums[i] + (consec.get(nums[i] + 1) || 0), consec.get(nums[i]))

                maxConsec = Math.max(maxConsec, consec.get(nums[i]))
            }
        }

        return maxConsec
    }
}
