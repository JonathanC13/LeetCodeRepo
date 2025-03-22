// https://neetcode.io/problems/longest-consecutive-sequence

/*
- edge case 1: if nums.length === 0: return 0

if no restriction of Time: O(n): AND if only positive numbers
O(n) to find the largest number
create Arr of length largest + 1 fill with false
iterate nums, O(n), to place true in the index represented by the value
iterate Arr, O(n), and track the longest consecutive
- Time: O(n) // 3 * n

Since O(n) restriction and can have negative numbers
create a Map to store the k-v pairs:
    key: value from nums
    value: The length of the consecutive sequence at insertion or this value is at the end of a sequence and it is extended else where

let max = 0
iterate nums, O(n)
    // updates only occur when new value, if existing value the longest would not change.
    if (Map.get(nums[i]) === undefined) {
        insert into the Map the key: nums[i] and value: 1 + if extending sequence from value-1 + if extending sequence from value+1

        //must update the lower and upper ends of the sequence if it extended from existing. If it did not extend an existing sequence it would just update itself with the same value
        // to get the lower end of the sequence = curr num - (streak of num - 1)
        // the value to update it to is the updated longest streak, which was calculated when nums[i] was inserted into the Map
        Map.set(nums[i] - (Map.get(nums[i] - 1) || 0), Map.get(nums[i]))

        // upper end
        Map.set(nums[i] + (Map.get(nums[i] + 1) || 0), Map.get(nums[i]))

        // update global tracking of max
        max = Math.max(max, Map.get(nums[i]))
    }

return max
- Time: O(n)
- Space: O(n)

*/

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) {
            return 0
        }

        const streakMap = new Map()
        let max = 0

        for (let i = 0; i < nums.length; i ++) {
            if (streakMap.get(nums[i]) === undefined) {
                const thisStreak = 1 + (streakMap.get(nums[i] - 1) ?? 0) + (streakMap.get(nums[i] + 1) ?? 0)
                streakMap.set(nums[i], thisStreak)

                streakMap.set(nums[i] - (streakMap.get(nums[i] - 1) ?? 0), thisStreak)
                streakMap.set(nums[i] + (streakMap.get(nums[i] + 1) ?? 0), thisStreak)

                max = Math.max(max, thisStreak)
            }
        }

        return max
    }

}
