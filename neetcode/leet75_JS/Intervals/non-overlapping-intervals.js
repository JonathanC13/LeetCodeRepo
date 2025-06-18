// https://leetcode.com/problems/non-overlapping-intervals/?envType=study-plan-v2&envId=leetcode-75

/*
Note that intervals which only touch at a point are non-overlapping. For example, [1, 2] and [2, 3] are non-overlapping.

sort the intervals based on start in non-descending order, if equal sort by end time in non-descending. This is so that the earliest start and end intevals come first. Which will result in keeping the maximum intervals when comparing for overlapping since the interval that has an end that spans further will be prioritized to be removed

two pointers. one for current interval, one for the compare

while i < intervals.length
    curr end = intervals[i] end
    let j = i + 1
    while j < intervals.length && curr end > intervals[j] start
        remove += 1
        curr end = min(curr end, intervals[j] end)
        j += 1

    i = j

return remove

- Time: O(n log n)
- Space: O(log n)
    
*/

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a, b) => {
        const diff = a[0] - b[0]
        if (diff === 0) {
            return a[1] - b[1]
        }
        return diff
    })

    let remove = 0
    let i = 0
    while (i < intervals.length) {
        let currEnd = intervals[i][1]
        let j = i + 1
        while (j < intervals.length && currEnd > intervals[j][0]) {
            remove += 1
            currEnd = Math.min(currEnd, intervals[j][1])
            j += 1
        }
        i = j
    }
    return remove
};