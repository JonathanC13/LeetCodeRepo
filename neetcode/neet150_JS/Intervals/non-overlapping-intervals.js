// https://neetcode.io/problems/non-overlapping-intervals

class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        if (intervals.length < 2) {
            return 0
        }

        intervals.sort((a, b) => {return a[0] - b[0]})
        let removeCnt = 0
        let prevEnd = intervals[0][1]

        for (let i = 1; i < intervals.length; i ++) {
            const start = intervals[i][0]
            const end = intervals[i][1]

            if (start >= prevEnd) {
                prevEnd = end
            } else {
                removeCnt += 1
                prevEnd = Math.min(prevEnd, end)
            }
        }

        return removeCnt
    }
}
