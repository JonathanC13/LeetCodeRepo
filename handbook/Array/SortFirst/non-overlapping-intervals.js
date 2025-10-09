// https://leetcode.com/problems/non-overlapping-intervals/description/

/**
1. Assumptions:
    - start <= end
    - Note that intervals which only touch at a point are non-overlapping. For example, [1, 2] and [2, 3] are non-overlapping.

2. valid inputs
    - intervals instanceof Array
    - intervals.length === 0: return 0
    - content: Numbers

3. Time/space constraints:
    - Time: O(n log(n))
    - Space: O(1)

4. Test cases and edge cases
    edge cases
    - intervals = []
    test cases
    - intervals = [[0, 4], [3, 5], [5, 6]]  // expected 1. rem [3, 5]
    - intervals = [[0, 4], [3, 5], [4, 5], [5, 6]]  // expected 1. rem [3, 5]
    - intervals = [[0, 4], [2, 3], [3, 5], [5, 6]]  // expected 1. rem [0, 4]
    - intervals = [[0, 4], [3, 4], [3, 5], [5, 6]]  // expected 2. rem [3, 4], [3, 5]

5. visualize by drawing and manually solve
    - Sort by start in non-descending order so that overlapping intervals are beside
    - for the current interval at i, if there is a forward interval, i +=1, that overlaps: rem += 1;  update the current interval end to min(currEnd, intervals[i])
        Take the min end so that it removes the minimal number of intervals. since the smaller range will overlap less than if larger range.

6. Break into subproblems to solve
    - sort the start in non-descending order
    - iterate forward to find the overlapping intervals and ensure the minimal number of intervals removed by maintaining the current range to be the smallest, take min(currEnd, overlappedEnd)

7. Determine Algorithm
    - Sort
    - linear iteration

8. Determine Data structures
    - Input Array

9. Complexity
    - Time: O(n log(n)) // sort = n log(n), + n for iterate
    - Space: O(1)
 */

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    if (intervals.length === 0) {
        return []
    }

    intervals.sort((a, b) => a[0] - b[0])
    const n = intervals.length
    let rem = 0
    let i = 0
    while (i < n) {
        const currIntv = intervals[i]
        i += 1
        while (i < n && currIntv[1] > intervals[i][0]) {
            currIntv[1] = Math.min(currIntv[1], intervals[i][1])
            rem += 1
            i += 1
            // if want the specific interval that needs to be removed. The one with the greater end is it. Actually not true lol, much harder.
        }
    }

    return rem
};