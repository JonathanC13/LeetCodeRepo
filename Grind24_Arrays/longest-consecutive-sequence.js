// https://leetcode.com/problems/longest-consecutive-sequence/description/

/**
create a Map that will hold the:
    key: value
    val: the longest sequence it is a part of when added/updated

iterate i in nums
    if (map not has nums[i])
        //insert nums[i] into the map with value of it if extends a current sequeuence
        key: nums[i], val: map.get(nums[i] - 1) + 1 + map.get(nums[i] + 1)  // if connects from below + itself + from above

        longest = max(longest, map.get(nums[i]))

        // must update the ends of the sequence that nums[i] contributed to
        // to get the bottom of the sequence: nums[i] - map.get(nums[i] - 1)    e.g. 1: 1. add key 2. Therefore to get to key 1 it is key 2 - val 1 = key 1
        // to get to the top: nums[i] + map.get(nums[i] + 1)

return longest

- Time: O(n)
- Space: O(n)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const seq = new Map()
    let longest = 0

    for (let i = 0; i < nums.length; i ++) {
        if (!seq.has(nums[i])) {
            seq.set(nums[i], (seq.get(nums[i] - 1) || 0) + 1 + (seq.get(nums[i] + 1) || 0))
            longest = Math.max(longest, seq.get(nums[i]))

            seq.set(nums[i] - (seq.get(nums[i] - 1) || 0), seq.get(nums[i]))
            seq.set(nums[i] + (seq.get(nums[i] + 1) || 0), seq.get(nums[i]))
        }
    }
    return longest
};