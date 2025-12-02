// https://neetcode.io/problems/meeting-schedule/question?list=neetcode250

/**
 * 1. Assumptions
 *  1. Overlap rules? Same value is not a conflict. e.g. [1, 4] and [4, 5] are not conflicting at 4
 * 
 * 2. input validation
 *  1. intervals is an Array that contains Arrays of length 2
 *  2. each interval is an Array of length 2 that contains Numbers
 * 
 * 3. time and space constraints
 *  BTTC: O(n*log(n))   // need to sort intervals
 *  Space: O(log(n))
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if intervals.length <= 1: return true
 *  test cases
 *  1. no conflicts
 *      inputs
 *          [[1, 4], [4, 5], [6, 10]]
 *      expected output
 *          true
 *  2. conflict
 *      input
 *          [[1, 4], [4, 5], [4, 10]]
 *      expected output
 *          false
 * 
 * 5. visualize by drawing and manaully solve
 * 6. break into subproblems
 *  sort the intervals by the start in non-descending order so that comparing overlap with the adjacent interval is easier.
 * 
 *  iterate the intervals and check if overlap occurs
 * 
 * 7. algos
 *  - Interval comparisons
 * 
 * 8. data structures
 *  - Arrays
 * 
 * 9. complexity
 *  Time: O(n*log(n))
 *  Space: O(log(n))
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
            if (intervals[i + 1].start < intervals[i].end) {
                return false
            }
        }

        return true
    }
}
