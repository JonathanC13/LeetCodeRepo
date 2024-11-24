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
        // console.log(intervals)
        intervals.sort((a, b) => {return a[0] - b[0]})

        const res = []

        while (intervals.length) {
            let i = 0
            let j = 1
            while (j < intervals.length && intervals[i][1] >= intervals[j][0]) {
                intervals[i][0] = Math.min(intervals[i][0], intervals[j][0])
                intervals[i][1] = Math.max(intervals[i][1], intervals[j][1])
                j += 1;
            }
            res.push(intervals[i])

            intervals = intervals.slice(j)
        }

        return res
    }
}
