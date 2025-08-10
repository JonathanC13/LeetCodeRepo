// https://leetcode.com/problems/merge-intervals/description/

/*
Note: [0,4] and [4, 5] overlap at 4

sort the intervals by start. Time: O(n log(n))

res = []
i = 0
while i < intervals.length
    newInterval = intervals[i]
    i += 1

    // merge all that overlap
    while (i < intervals.length and intervals[i] start <= newInterval end)
        newInterval[0] = min(newInterval[0], intervals[i][0])
        newInterval[1] = max(newInterval[1], intervals[i][1])
        i += 1

    // after merged all overlapping, push into res
    res.push(newInterval)

return res

- Time: O(n)
- Space: O(n)

*/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0])

    const res = new Array()
    let i = 0
    while (i < intervals.length) {
        const newInterval = intervals[i]
        i += 1
        while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
            newInterval[0] = Math.min(newInterval[0], intervals[i][0])
            newInterval[1] = Math.max(newInterval[1], intervals[i][1])
            i += 1
        }

        res.push(newInterval)
    }
    return res
};