// https://neetcode.io/problems/meeting-schedule-ii/question

/**
 * 1. Assumptions
 *  1. Given:
 *      1. Same value is not a conflict. e.g. [1,2] and [2,3] do not conflict at 2
 * 
 * 2. input validation  
 *  1. intervals
 *      - intervals instanceof Array
 *      - intervals.length >= 0
 *      - intervals's elements are Array of 2, [start, end] which are Number and start < end
 * 
 * 3. time and space constraints
 *  BTTC: O(n*log(n))   // n*log(n) to sort +, 2*n to iterate every value
 *  Space: O(2*n)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if intervals.length <= 1: return intervals.length
 * 
 *  test cases
 *  1. 1 day
 *      inputs
 *          intervals = [[1,2],[2,3],[5,6]]
 *      expected output
 *          1
 *  2. 2 days
 *      inputs
 *          intervals = [[1,2],[2,3],[5,6],[0,2]]
 *      expected output
 *          2
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  times = new Array()
 *  push every time into times where:
 *      1. start => [start, 1]  // 1 to indicate ongoing meeting
 *      2. end => [end, -1] // -1 to indicate meeting closed
 * 
 *  sort times in times[0] non-descending order and if equal then times[1] ascending since same value is not a conflict, close (-1) an ongoing meeting first before openning (+1) the next
 * 
 *  minDays = 0
 *  count = 0
 *  iterate times and record the running max value count achieves in minDays while summing the times[1]. 
 *      The running count represents, at i, the number of overlapped ongoing meetings.
 * 
 * 7. algos
 *  - intervals
 * 
 * 8. data structures
 *  - Arrays
 * 
 * 9. complexity
 *  Time: O(n*log(n))
 *  Space: O(2*n)
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
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        if (intervals.length <= 1) {
            return intervals.length
        }

        const times = new Array()
        for (let i of intervals) {
            times.push([i.start, 1])
            times.push([i.end, -1])
        }

        times.sort((a, b) => {
            if (a[0] === b[0]) {
                return a[1] - b[1]
            }

            return a[0] - b[0]
        })

        let minDays = 0
        let count = 0
        for (let [_, v] of times) {
            minDays = Math.max(minDays, count += v)
        }

        return minDays
    }
}
