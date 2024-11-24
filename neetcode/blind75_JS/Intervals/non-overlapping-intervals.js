// https://neetcode.io/problems/non-overlapping-intervals

class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        // console.log(intervals)
        const n = intervals.length
        if (n < 2) {
            return 0
        }
        intervals.sort((a, b) => {return a[0] - b[0]})
        const dp = Array(n).fill(0)

        for (let i = 0; i < n; i ++){
            dp[i] = 1
            for (let j = 0; j < i; j ++) {
                // no overlap
                if (intervals[j][1] <= intervals[i][0]) {
                    dp[i] = Math.max(dp[i], dp[j] + 1)
                }
            }
        }
        // console.log(intervals)
        // console.log(dp)
        return n - Math.max(...dp)
    }
}
