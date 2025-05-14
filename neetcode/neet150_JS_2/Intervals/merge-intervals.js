// https://neetcode.io/problems/merge-intervals

/*
Note: Intervals are non-overlapping if they have no common point. For example, [1, 2] and [3, 4] are non-overlapping, but [1, 2] and [2, 3] are overlapping.


sort the intervals by start in non-descending order. n log n

res = new Array
i = 0

while i < n
    //chose the interval to merge into
    merged = intervals[i]
    i += 1
    // find and merge
    while (i < n && merged.start <= intervals[i].start && intervals[i].start <= merged.end) { // since sorted, only need to handle this case
        merged.start is assigned the min of the starts
        merged.end is assigned the max of the ends
        i += 1
    }

    res.push(merged)

return res

- Time: O(n log n)
- Space: O(n)
*/

class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        const n = intervals.length
        const res = new Array()
        let i = 0

        intervals.sort((a, b) => a[0] - b[0])

        while (i < n) {
            const merged = intervals[i]
            i += 1
            
            while (i < n && merged[0] <= intervals[i][0] && intervals[i][0] <= merged[1]) {
                merged[0] = Math.min(merged[0], intervals[i][0])
                merged[1] = Math.max(merged[1], intervals[i][1])
                i += 1
            }

            res.push(merged)
        }

        return res
    }
}
