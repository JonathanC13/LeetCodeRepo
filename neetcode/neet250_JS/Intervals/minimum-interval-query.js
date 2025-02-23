// https://neetcode.io/problems/minimum-interval-including-query

/*
brute for would have to check each interval for the query value and record the smallest length found.
- Time: O(n ^ 2). q * n
- Space: O(q). q for result array

// non brute force:
- edge case 1: if (queries.length === 0) {
    return []
}



*/

class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} queries
     * @return {number[]}
     */
    minInterval(intervals, queries) {
        if (queries.length === 0) {
            return []
        }

        return this.brute(intervals, queries)
    }

    brute(intervals, queries) {
        intervals.sort((a, b) => {return a[0] - b[0]})

        const res = []
        for (let i = 0; i < queries.length; i ++) {
            let minLen = Number.POSITIVE_INFINITY
            let j = 0
            while (j < intervals.length) {
                if (intervals[j][0] <= queries[i] && intervals[j][1] >= queries[i]) {
                    minLen = Math.min(minLen, intervals[j][1] - intervals[j][0] + 1)
                }
                j += 1
            }
            res.push(minLen === Number.POSITIVE_INFINITY ? -1 : minLen)
        }
        return res
    }
}
