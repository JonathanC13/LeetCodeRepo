// https://neetcode.io/problems/non-overlapping-intervals

/*
Note: Intervals are non-overlapping even if they have a common point. For example, [1, 3] and [2, 4] are overlapping, but [1, 2] and [2, 3] are non-overlapping.


sort intervals by the start in non-descending order
let removed = 0
while i < n
    // since sorted only need to be concerned with the end to check if overlap
    let end = intervals[i].end
    i += 1
    while (i < n && interals[i].start < end) {
        // can merge, which means one should be removed, remove the one with the greater end by continue checking with the min end
        removed += 1
        end = Math.min(end, intervals[i].end)
        i += 1
    }

return removed

- Time: O(n log n)
- Space: O(1)
*/

class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        if (intervals.length === 0) {
            return 0
        }

        intervals.sort((a, b) => a[0] - b[0])

        const n = intervals.length
        let removed = 0;
        let i = 0
        while (i < n) {
            let end = intervals[i][1]
            i += 1
            while (i < n && intervals[i][0] < end) {
                removed += 1
                end = Math.min(end, intervals[i][1])
                i += 1
            }
        }

        return removed

    }
}
