// https://neetcode.io/problems/meeting-schedule/question

/**
 * 1. Assumptions
 *  1. Given:
 *      1. Same value is not a conflict. e.g. [1,2] and [2,3] are not conflicting at 2
 * 
 * 2. Input validations
 *  1. intervals
 *      - intervals instanceof Array
 *      - intervals.length >= 0
 *      - intervals's elements are Array of length 2, [start, end] which are Number where start < end
 * 
 * 3. time and space constraints
 *  BTTC: O(n*log(n))   // n log(n) to sort. + n for iterate to validate no overlap
 *  Space: O(n)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if intervals.length <= 1: return true
 * 
 *  test cases
 *  1. no conflicts
 *      inputs
 *          intevals = [[1,2],[3,5],[0,1],[9,10]]
 *      expected output
 *          true
 * 
 *  2. conflict at least one meeting
 *      inputs
 *          intervals = [[1,2],[3,5],[9,10],[4,5]]
 *      expected output
 *          false
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  Sort the intervals by start in non-descending order
 *  iterate to check interval overlaps by comparing current meeting and adjacent i + 1 meeting:
 *      if the current meeting end exceeds, >, the next meeting's start: then return false due to overlap
 * 
 * 7. algos
 *  - Intervals
 * 
 * 8. data structures
 *  - Array
 * 
 * 9. complexity
 *  Time: O(n*log(n))
 *  Space: O(n)
 */

/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        if (intervals.length <= 1) {
            return true
        }

        intervals.sort((a, b) => a.start - b.start)
        for (let i = 0; i < intervals.length - 1; i ++) {
            if (intervals[i].end > intervals[i + 1].start) {
                return false
            }
        }

        return true
    }
}
