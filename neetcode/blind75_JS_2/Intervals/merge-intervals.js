// https://neetcode.io/problems/merge-intervals

/*
Note: Intervals are non-overlapping if they have no common point. For example, [1, 2] and [3, 4] are non-overlapping, but [1, 2] and [2, 3] are overlapping.

edge case 1: if intervals.length <= 1: return intervals

sort the intervals by start_i in non-descending order so that it can be merged by iterating in one direction.

create res Array

iterate intervals
    iterate to merge intervals until cannot then push into res.

- Time: O(n log n). n log n for sort + n to merge
- Space: O(log n)
*/

class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        if (intervals.length <= 1) {
            return intervals
        }

        intervals.sort((a,b) => a[0] - b[0])

        const res = []
        let i = 0

        while (i < intervals.length) {
            let merge = intervals[i]

            while (i < intervals.length && intervals[i][0] <= merge[1]) {
                merge[0] = Math.min(merge[0], intervals[i][0])
                merge[1] = Math.max(merge[1], intervals[i][1])
                i += 1
            }
            res.push(merge)
        }

        return res
    }
}
