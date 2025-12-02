// https://leetcode.com/problems/non-overlapping-intervals/description/

/**
1. Assumptions
    1. Overlap rules? same value is NOT overlapping. e.g [1, 4] and [4, 5] are NOT overlapping at 4
    2. each interval start <= end

2. Input validation
    1. intervals is an Array that contains Arrays of length 2
    2. Each interval is of length 2 and only contains Numbers where start <= end

3. time and space constraints
    BTTC: O(n log(n))  // n*log(n) for sort +, n for evaluating all the intervals
    Space: O(log(n))    // log(n) for sort

4. edge cases and some test cases
    edge cases
    1. if intervals.length === 0 or intervals.length === 1: return 0
    test cases
    1. no overlapping
        inputs
            [[1, 3], [3, 5], [7, 10]]
        expected output
            0
    2. minimum removal of 1
        inputs
            [[1, 5], [2, 3], [3, 4]]
        expected output
            1

5. visualize by drawing and manually solve
6. break into subproblems
    sort the intervals by start in non-descending order so that the adjacent intervals can be compared for overlap.

    iterate the intervals
        currInterval = current interval
        i += 1
        while have intervals and currInterval overlaps with intervals[i]
            // update the currInterval with the max start and min end because by removing the larger range will result in the minimum to remove since keep a larger range causes more possible overlaps
            currInterval[0] = max(currIntervas[0], intervals[i][0])
            currInterval[1] = min(currInverval[0], intervals[i][1])
            i += 1
            remove += 1

7. algos
    - Interval comparisons

8. Data structures
    - Arrays

9. Complexity
    Time: O(n log(n))
    Space: O(log(n))
 */

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    if (intervals.length === 0 || intervals.length === 1) {
        return 0
    }

    intervals.sort((a, b) => {
        return a[0] - b[0]
    })

    const n = intervals.length
    let remove = 0
    let i = 0
    while (i < n) {
        const currIntv = intervals[i]
        i += 1
        while (i < n && intervals[i][0] < currIntv[1]) {
            remove += 1
            currIntv[0] = Math.max(currIntv[0], intervals[i][0])
            currIntv[1] = Math.min(currIntv[1], intervals[i][1])
            i += 1
        }
    }

    return remove
};