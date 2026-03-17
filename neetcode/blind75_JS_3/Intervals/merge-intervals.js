// https://neetcode.io/problems/merge-intervals/question

/**
 * 1. Assumptions
 *  1. Given: overlap if common value, e.g. [1,2] and [2,3]
 * 
 * 2. input validation
 *  1. intervals
 *      - intervals instanceof Array
 *      - intervals.length >= 0
 *      - intervals's elements are Array of length 2 of [start_i, end_i] where start_i < end_i
 * 
 * 3. time and space constraints
 *  BTTC: O(n log(n))   // need to sort: n*log(n), + n for merging
 *  Space: O(n)         // n for sort auxiliary space
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if intervals.length <= 1: return intervals
 * 
 *  test cases
 *  1. some merges
 *      inputs
 *          intervals = [[1,2],[3,5],[4,8],[8,10],[11,12]]
 *      expected output
 *          [[1,2],[3,10],[11,12]]
 *  
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  sort the intervals by start_i in non-descending order so that when merging the potential overlaps are adjacent
 * 
 *  i = 0
 *  while i < n
 *      select current interval merged [start_i, end_i]
 *      merge any overlapping intervals forward (intervals[i]'s start <= curr[end_i])
 *          curr[1] = max(curr[1], intervals[i][1]) // update the end_i
 * 
 *      res.push(curr)
 * 
 * 7. algos
 *  - interval processing
 * 
 * 8. data structures
 *  - Array
 * 
 * 9. complexity
 *  Time: O(n*log(n))
 *  Space: O(n)
 */

class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        if (intervals.length <= 1) {
            return intervals
        }

        intervals.sort((a, b) => a[0] - b[0])

        const n = intervals.length
        const res = new Array()
        let i = 0
        while (i < n) {
            const curr = intervals[i]
            i += 1
            while (i < n && intervals[i][0] <= curr[1]) {
                curr[1] = Math.max(curr[1], intervals[i][1])
                i += 1
            }

            res.push(curr)
        }

        return res
    }
}
