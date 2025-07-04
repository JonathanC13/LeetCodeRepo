// https://leetcode.com/problems/merge-intervals/description/?envType=study-plan-v2&envId=top-interview-150

/*
Intervals [1,4] and [4,5] are considered overlapping

sort intervals by start in non-descending order

res = new Array()

i = 0
newInterval = intervals[i]
while (i < intervals.length)
    if (intervals[i][0] <= newInterval[1]) {
        newInterval[0] = min(newInterval[0], intervals[i][0])
        newInterval[1] = max(newInterval[1], intervals[i][1])
    } else
        res.push(newInterval)
        newInterval = intervals[i]

    i += 1

push final newInterval

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

    let newInterval = intervals[0]
    for (let i = 0; i < intervals.length; i ++) {
        if (intervals[i][0] <= newInterval[1]) {
            newInterval[0] = Math.min(newInterval[0], intervals[i][0])
            newInterval[1] = Math.max(newInterval[1], intervals[i][1])
        } else {
            res.push(newInterval)
            newInterval = intervals[i]
        }
    }

    res.push(newInterval)
    return res
};