// https://leetcode.com/problems/merge-intervals/

/**
1. Assumptions:
    - range of values: -infin < val < infin
    - Start <= end
    - overlap if value is the same, example 4],[4, overlap at 4

2. Validate inputs:
    - intervals instanceof Array
    - length: if intervals.length = 0: return []
    - content: assume value Numbers

3. Time/space Constraints:
    - Time: O(n log(n))
    - Space: O(n)   // n for result Array

4. some test cases and edge cases
    edge cases
    - intervals = []
    some test cases
    - intervals = [[0, 1], [2, 4]]
    - intervals = [[0,1], [0,2], [3, 4], [4, 5]]

5. visualize by drawing and manually solving
    - sort the input Array by the start value in non-descending order, this is so that if an interval overlaps it will be beside
    - initially choose the interval at i and merge forward, i forward, all overlapping until cannot, then push into res Array

6. break into subproblems
    - sorting Intervals by start in non-descending order
    - for each current interval at i, merge forward until cannot

7. Determine algorithm
    - sorting
    - linear traversal

8. Datastructures
    - Input Array

9. Complexity
    - Time: O(n log(n)) // n log(n) for sorting (like mergeSort), + n for merging for res
    - Space: O(n)
 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals instanceof Array === false || intervals.length === 0) {
        return []
    }

    const n = intervals.length
    const res = new Array()
    intervals.sort((a, b) => {
        return a[0] - b[0]
    })

    let i = 0
    while (i < n) {
        const currIntv = intervals[i]
        i += 1
        while (i < n && currIntv[1] >= intervals[i][0]) {
            currIntv[0] = Math.min(currIntv[0], intervals[i][0])
            currIntv[1] = Math.max(currIntv[1], intervals[i][1])
            i += 1
        }
        res.push(currIntv)
    }

    return res
};