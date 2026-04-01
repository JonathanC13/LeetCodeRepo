// https://neetcode.io/problems/non-overlapping-intervals/question

/**
 * 1. Assumptions
 *  1. Given: non-overlap if common point. e.g. [1,2] and [2,3] not overlapping
 * 
 * 2. input validation
 *  1. intervals
 *      - intervals instanceof Array
 *      - intervals.length >= 0
 *      - intervals's elements are Array of length 2 of Number [start_i, end_i] where start_i < end_i
 * 
 * 3. time and space constraints
 *  BTTC: O(n log(n))   // need to sort
 *  Space: O(n)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if intervals.length <= 1: return 0
 * 
 *  test cases
 *  1. remove min and max remove is 1
 *      inputs
 *          intervals = [[1,2],[2,5],[2,4]]
 *      expected output
 *          1
 *  2. remove min 1 and max 2
 *      inputs
 *          intervals = [[1,2],[2,4],[1,5]]
 *      expected output
 *          1
 *  3. remove min 2
 *      inputs
 *          intervals = [[1,4],[2,5],[3,6]]
 *      expected output
 *          2
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  sort intervals by start_i in non-descending order
 * 
 *  let i = 0
 *  while i < n
 *      curr = intervals[i]
 *      i += 1
 *      while i < n and overlapping with intervals[i]
 *          removed += 1
 *          curr.end_i = min(curr.end_i, intervals[i][end_i])   
 *          // take the min end so eliminate the interval with the larger range that would cause more overlaps
 *          // e.g.1 [1,4],[2,5],[4,6]: [1,4] and [2,5] becomes [1,4] effectively removing [2,5] resulting in non-overlapping intervals
 *          // e.g.2 [1,4],[2,3],[3,5]: [1,4] and [2,3] becomes [1,3] effectively removing [1,4].
 * 
 *  return removed
 * 
 * 7. algos
 *  - intervals
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
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        if (intervals.length <= 1) {
            return 0
        }
        intervals.sort((a, b) => a[0] - b[0])
        const n = intervals.length
        const nonOver = new Array()
        let i = 0
        while (i < n) {
            const curr = intervals[i]
            i += 1
            while (i < n && intervals[i][0] < curr[1]) {
                curr[1] = Math.min(curr[1], intervals[i][1])
                i += 1
            }

            nonOver.push(curr)
        }

        return intervals.length - nonOver.length
    }
}
