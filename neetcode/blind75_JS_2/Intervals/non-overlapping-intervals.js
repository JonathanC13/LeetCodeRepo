// https://neetcode.io/problems/non-overlapping-intervals

/*
Note: Intervals are non-overlapping even if they have a common point. For example, [1, 3] and [2, 4] are overlapping, but [1, 2] and [2, 3] are non-overlapping.

sort intervals by start_i in non-descending order

let res = []
iterate intervals
    let interval = intervals[i]
    while can merge
        merge, but keep the min ends since the larger end causes more merges

return res

- Time: O(n log n)
- Space: O(log n)
*/

class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        if (intervals.length <= 1) {
            return 0
        }

        intervals.sort((a, b) => a[0] - b[0]) 
        let i = 0
        let res = []

        while (i < intervals.length) {
            let merge = intervals[i]
            while (i < intervals.length && intervals[i][0] < merge[1]) {
                // merge[0] = Math.min(merge[0], intervals[i][0])
                merge[1] = Math.min(merge[1], intervals[i][1])
                i += 1
            }
            res.push(merge)
        }

        return intervals.length - res.length

    }
}
