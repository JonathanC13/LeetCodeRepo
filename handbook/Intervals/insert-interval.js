// https://leetcode.com/problems/insert-interval/

/**
1. Assumptions
    1. intervals already sorted by start in ascending order
    2. start <= end
    3. overlap rule? same value is overlap. e.g [1, 4] and [4, 5] overlaps at 4
    4. input intervals has no overlaps

2. input validation
    1. intervals is an Array of Arrays of length 2
    2. each interval is an Array of length 2 that contains Numbers where start <= end

3. time and space constraints
    BTTC: O(n)  // n = must iterate every interval
    Space: O(m) // output Array length

4. edge cases and test cases
    edge cases
    1. if intervals.length === 0: return [newInterval]
    test cases
    1. no overlaps
        input
            interals = [[1, 3], [6, 7], [8, 10]]
            newInterval = [4, 5]
        expected output
            [[1, 3], [4, 5], [6, 7], [8, 10]]
    2. some overlaps
        input
            interals = [[1, 3], [6, 7], [8, 10], [11, 12]]
            newInterval = [4, 8]
        expected output
            [[1, 3], [4, 10], [8, 10]]

5. visualize by drawing and manually solve
6. break into subproblems
    since sorted by start
    iterate while not overlapping with newInterval
        push into res

    while overlapping
        merged into newInterval

    push into res

    push remaning, which do not overlap, into res

7. algos
    - intervals

8. data structures
    - Arrays

9. complexity
    Time: O(n)
    Space: O(m)
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
    const n = intervals.length
    const res = new Array()
    let i = 0

    while (i < n && intervals[i][1] < newInterval[0]) {
        res.push(intervals[i])
        i += 1
    }

    while (i < n && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0])
        newInterval[1] = Math.max(newInterval[1], intervals[i][1])
        i += 1
    }
    res.push(newInterval)

    while (i < n) {
        res.push(intervals[i])
        i += 1
    }

    return res
};