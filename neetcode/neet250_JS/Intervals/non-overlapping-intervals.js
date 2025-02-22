// https://neetcode.io/problems/non-overlapping-intervals

/*
[1, 2] and [2, 3] are non-overlapping.

- edge case 1: if (intervals.length < 2) { return 0 }

sort the intervals by start in non descending order

Backtracking to compare each pair.
The idea is to get the max length of intervals that do not have overlap, then intervals.length - maxlengh = min removal.

    DFS(prev, i)
    - base case 1: if i >= intervals.length { return 0 }

        DFS to the end with let res = dfs(prev, i + 1)  // at the end prev = -1 and i is the last elem

        // backtrack
        if prev === -1 || intervals[prev] end <= intervals[i] start
            // no overlap
            res = Math.max(res, 1 + dfs(i, i + 1))

        return res

return intervals.length - dfs(-1, 0)

- Time: O(2^n). backtrack has 2 options. 1. continue. 2. if no overlap, get forward length that has no overlap.
- Space: O(n)

Improve with memoization
create Map and key [prev, i] is the max length of non overlapping within that range.

- Time: O(n^2). n to dfs. * n to assess the pairs, since have a memoization table it will return earlier
- Space: O(n)

*/

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
        const memo = new Map()

        return intervals.length - this.dfs(-1, 0, intervals, memo)

    }

    dfs(prev, i, intervals, memo) {
        if (i >= intervals.length) {
            return 0
        }
        const key = `${prev}-${i}`
        if (memo.has(key)) {
            return memo.get(key)
        }

        let res = this.dfs(prev, i + 1, intervals, memo)

        if (prev === -1 || intervals[prev][1] <= intervals[i][0]) {
            res = Math.max(res, 1 + this.dfs(i, i + 1, intervals, memo))
        }
        memo.set(key, res)
        return res
    }
}
