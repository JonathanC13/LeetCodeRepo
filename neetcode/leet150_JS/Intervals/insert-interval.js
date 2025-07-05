// https://leetcode.com/problems/insert-interval/description/?envType=study-plan-v2&envId=top-interview-150

/*
note: [1, 3], [3, 4] overlaps on 3

create res = new Array()

while newInterval is greater than current interval
    res.push(intervals[i])

while newInteval needs to be merged, re-assigned newInterval start and end

push newInterval

push rest of intervals

- Time: O(n)
- Space: O(n)   // for output Array
*/

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    if (intervals.length === 0) {
        return [newInterval]
    }
    const res = new Array()
    let i = 0
    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        res.push(intervals[i])
        i += 1
    }

    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0])
        newInterval[1] = Math.max(newInterval[1], intervals[i][1])
        i += 1
    }
    res.push(newInterval)

    while (i < intervals.length) {
        res.push(intervals[i])
        i += 1
    }

    return res
};