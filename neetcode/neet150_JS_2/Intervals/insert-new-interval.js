// https://neetcode.io/problems/insert-new-interval

/*
Note: Intervals are non-overlapping if they have no common point. For example, [1,2] and [3,4] are non-overlapping, but [1,2] and [2,3] are overlapping

res = new Array
i = 0

iterate intervals while interval.end < newInterval.start
    push into res

at this point, merge intervals and newInterval if necessary
iterate intervals while interval.start <= newInterval.end
    newInterval.start is assigned the Min of the starts
    newInterval.end is assigned the Max of the ends

push newInterval into res

iterate the remaining intervals and push into res

return res

- Time: O(n)
- Space: O(n)   // n for the result

*/

class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        const n = intervals.length
        const res = new Array()
        let i = 0

        while (i < n && intervals[i][1] < newInterval[0]) {
            res.push(intervals[i])
            i += 1
        }

        while (i < n && intervals[i][0] <= newInterval[1]) {
            newInterval[0] = Math.min(intervals[i][0], newInterval[0])
            newInterval[1] = Math.max(intervals[i][1], newInterval[1])
            i += 1
        }
        res.push(newInterval)

        while (i < n) {
            res.push(intervals[i])
            i += 1
        }

        return res
    }
}
