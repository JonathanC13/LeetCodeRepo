// https://neetcode.io/problems/minimum-interval-including-query

class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} queries
     * @return {number[]}
     */
    minInterval(intervals, queries) {
        if (intervals.length === 0) {
            return []
        }

        // return this.brute(intervals, queries)
    }

    brute(intervals, queries) {
        const res = []
        for (let q = 0; q < queries.length; q ++) {
            let minLen = Number.POSITIVE_INFINITY

            for (let i = 0; i < intervals.length; i ++) {
                if (queries[q] >= intervals[i][0] && queries[q] <= intervals[i][1]) {
                    minLen = Math.min(minLen, intervals[i][1] - intervals[i][0] + 1)
                }
            }
            res.push(minLen === Number.POSITIVE_INFINITY ? -1 : minLen)
        }
        return res
    }
}
