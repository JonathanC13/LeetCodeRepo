// https://neetcode.io/problems/insert-new-interval/question

/**
 * 1. Assumptions
 *  1. Given: overlap is if value is the same: e.g. [1,2] and [2,3]
 * 
 * 2. input validation
 *  1. intervals
 *      - intervals instanceof Array
 *      - intervals.length >= 0
 *      - intervals's elements are non-overlapping arrays of [start_i, end_i] where start_i < end_i and ordered by start_i
 *  2. newInterval
 *      - newInterval instanceof Array
 *      - newInterval.length === 2
 *      - newInterval's elements are Number. [start_i, end_i] where start_i < end_i
 * 
 * 3. time and space constraints
 *  BTTC: O(n)
 *  Space: O(n) // for result
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if intervals.length === 0: return [newInterval]
 * 
 *  test cases
 *  1. insert and merge some
 *      inputs
 *          intervals = [[1,2],[3,5],[7,8]]
 *          newInterval = [3,6]
 *      expected output
 *          [[1,2],[3,6],[7,8]]
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  Since intervals sorted by start_i in ascending order, iterate i from 0 to end in 3 parts
 * 
 *  1. while interval[i][end_i] < newInterval[start_i] to get the intervals that are before newInterval
 *  2. merge intervals that overlap with newInterval
 *  3. push the remaining intervals
 * 
 * 7. algos
 *  - intervals
 * 
 * 8. data structures
 *  - Arrays
 * 
 * 9. complexity
 *  Time: O(n)
 *  Space: O(n)
 */

class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
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
    }
}
