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

        // console.log(intervals)
        // console.log(newInterval)

        let i = 0
        const res = []

        while (i < intervals.length && intervals[i][1] < newInterval[0]) {
            res.push(intervals[i])
            i += 1
        }

        // merge left
        while (i < intervals.length && newInterval[1] >= intervals[i][0]) {
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
