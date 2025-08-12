// https://leetcode.com/problems/non-overlapping-intervals/description/

/**
Note that intervals which only touch at a point are non-overlapping. For example, [1, 2] and [2, 3] are non-overlapping.

sort the intervals based on start in non-descending order, if equal sort by end time in non-descending. This is so that the earliest start and end intevals come first. Which will result in keeping the maximum intervals when comparing for overlapping since the interval that has an end that spans further will be prioritized to be removed

i = 0
while (i < intervals.length - 1)
    currEnd = intervals[i] end
    j = i + 1
    while (j < intervals.length && currEnd > intervals[j] start)    // since intervals[i] for sure has a lower start thatn intervals[j], if the currEnd > than the intervals[j] start, it is overlapping
        remove += 1
        currEnd = min(currEnd, intervals[j] end)    // take the lowest end so that removing the min number of intervals

    i = j

Time: O(n log n)
Space: O(1)
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
    while (i < intervals.length - 1) {
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