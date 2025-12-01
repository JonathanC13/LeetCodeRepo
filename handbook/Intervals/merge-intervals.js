// https://leetcode.com/problems/merge-intervals/description/

/**
1. Assumptions
    1. Each interval start <= end
    2. Overlap? Same number is overlap. e.g. [1, 4], [4, 5] at 4

2. input validation
    1. intervals only contains Arrays of length 2
    2. Individual interval contains 2 Numbers where start <= end

3. Time and space constraints
    BTTC: O(n)  // must iterate each interval
    Space: O(m) // m for output Array length

4. edge cases and some test cases
    edge cases
    1. if intervals.length === 0: return []
    2. if intervals.length === 1: return intervals
    test cases
    1. 
        input
            [[1, 3], [4, 5], [5, 6], [7, 9], [8, 9]]
        expected output
            [[1, 3], [4, 6], [7, 9]]

5. visualize by drawing and solve manually
6. break into subproblems
    sort the intervals by the start so that by iterating in order of start it is easier to determine if it overlaps with the next interval.

    iterate the itervals
        choose current interval as base
        iterate forward to merge any overlapping

        push merged into res

7. algos
    - sorting
    - intervals

8. data structures
    - Arrays
    - intervals

9. complexity
    Time: O(n)
    Space: O(m)
 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length === 0) {
        return []
    }
    if (intervals.length === 1) {
        return intervals
    }

    intervals.sort((a, b) => {
        return a[0] - b[0]
    })

    const res = new Array()
    const n = intervals.length
    let i = 0
    while (i < n) {
        const base = intervals[i]
        i += 1
        while (i < n && intervals[i][0] <= base[1]) {
            base[0] = Math.min(base[0], intervals[i][0])
            base[1] = Math.max(base[1], intervals[i][1])
            i += 1
        }

        res.push(base)
    }

    return res
};