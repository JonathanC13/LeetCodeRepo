// https://neetcode.io/problems/insert-new-interval

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
            i ++
        }

        while(i < intervals.length && intervals[i][0] <= newInterval[1]) {
            newInterval[0] = Math.min(intervals[i][0], newInterval[0])
            newInterval[1] = Math.max(intervals[i][1], newInterval[1])
            i ++
        }
        res.push(newInterval)

        while (i < intervals.length) {
            res.push(intervals[i])
            i ++
        }

        return res

    }
}
