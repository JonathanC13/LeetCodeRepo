// https://neetcode.io/problems/merge-intervals

class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        if (intervals.length < 2) {
            return intervals
        }

        const res = []
        intervals.sort((a, b) => {return a[0] - b[0]})

        let i = 0
        while (i < intervals.length) {
            let j = i + 1
            while (j < intervals.length && intervals[j][0] <= intervals[i][1]) {
                intervals[i][0] = Math.min(intervals[i][0], intervals[j][0])
                intervals[i][1] = Math.max(intervals[i][1], intervals[j][1])
                j += 1
            }

            res.push(intervals[i])
            i = j
        }

        return res
    }
}
