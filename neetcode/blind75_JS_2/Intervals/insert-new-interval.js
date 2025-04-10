// https://neetcode.io/problems/insert-new-interval

/*
Note: Intervals are non-overlapping if they have no common point. For example, [1,2] and [3,4] are non-overlapping, but [1,2] and [2,3] are overlapping.

edge case 1: if intervals.length === 0: return [newInterval]

create res Array

iterate and push intervals into res that are < newInterval

iterate while intervals can be merged
Then push into res

iterate the remaining intervals and push into res

return res

- Time: O(n)
- Space: O(n)
*/

class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        if (intervals.length === 0) {
            return [newInterval]
        }

        const res = []
        let i = 0

        while (i < intervals.length && intervals[i][1] < newInterval[0]) {
            res.push(intervals[i])
            i += 1
        }

        while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
            newInterval[0] = Math.min(newInterval[0], intervals[i][0])
            newInterval[1] = Math.max(newInterval[1], intervals[i][1])
            i += 1
        }
        res.push(newInterval)

        while (i < intervals.length) {
            res.push(intervals[i])
            i += 1
        }

        return res

    }
}
