// https://neetcode.io/problems/insert-new-interval

/*
- edge case 1: if intervals.length === 0: return [newInterval]

create a result Array

i = 0
iterate the intervals while current interval end < newInterval start, non overlapping before the newInterval
    push current interval into result

now have overlapping intervals
iterate the intervals while current interval start <= newInterval end
    newInterval.start = Math.min(newInterval.start, currInterval.start)
    newInterval.end = Math.max(newInterval.end, currInterval.end)

push newInterval into result

iterate remaining intervals
    push into result

return result

- Time: O(n)
- Space: O(n)   .n for result Array


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
            newInterval[0] = Math.min(intervals[i][0], newInterval[0])
            newInterval[1] = Math.max(intervals[i][1], newInterval[1])
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
