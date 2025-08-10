// https://leetcode.com/problems/insert-interval/description/

/**
Note [0, 8] and [8, 10] overlap at 8

create res array

let i = 0
while new Interval start > intervals[i] end
    // not overlap with new, push into res
    res.push(intervals[i])
    i += 1

merge new with all intervals that overlap
while (intervals[i] start <= new interval end)
    newInterval start = min(intervals[i] start, new interval start)
    newInterval end = max(intervals[i] end, new interval end)
    i += 1

push merged into res

push the rest that do not overlap
while (i < intervals.length)
    res.push(intervals[i])
    i += 1

return res

- Time: O(n)
- Space: O(n)   // n for result arr
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
    while (i < intervals.length && newInterval[0] > intervals[i][1]) {
        res.push(intervals[i])
        i += 1
    }

    while (i < intervals.length && newInterval[1] >= intervals[i][0]) {
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