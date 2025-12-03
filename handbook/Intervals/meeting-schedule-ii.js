// https://neetcode.io/problems/meeting-schedule-ii/question

/**
 * 1. Assumptions
 *  1. Overlap rules? Same value is considered overlap
 *  2. start <= end
 * 
 * 2. input validation
 *  1. interval is an Array of length 2 with start <= end
 * 
 * 3. time and space constraints
 *  BTTC: O(n*log(n))   // need to sort by start times in non-descending order
 *  Space: O(log(n))
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if intervals.length <= 1: return intervals.length
 *  test cases
 *  1. no conflicts, therefore 1 day minimum
 *      input
 *          [[1, 4], [4, 5], [7, 10]]
 *      expected output
 *          1
 *  2. conflicts
 *      input
 *          [[1, 4], [4, 5], [7, 10], [3, 5], [4, 7]]
 *      expected output
 *          3
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  iterate the intervals and push into an Array for meeting open and closed times. The element will be:
 *      1. [val, x], x = 1 if start time and x = -1 if end time
 * 
 *  sort the times Array by val in non-descending order and if equal sort x by ascending:
 *      1. By sorting val in non-descending, the meeting times are in chronological order
 *      2. if same sort x by non-descending, this is so that a meeting end comes first since overlap rule is "same value is not a conflict". Closing an open meeting first will get the minimum required days.
 * 
 *  iterate the times Array and record the Max sum of x evaluated while iterating
 *  This works because if there are x open meetings those require x number of days since they are occurring concurrently. When one of the ongoing meetings is closed, x reduces.
 * 
 * 7. algos
 *  - Overlapping intervals
 * 
 * 8. data structures
 *  - Arrays
 * 
 * 9. complexity
 *  Time: O(n*log(n))
 *  Space: O(log(n))
 * 
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
        for (let i = 0; i < intervals.length; i ++) {
            times.push([intervals[i].start, 1])
            times.push([intervals[i].end, -1])
        }

        times.sort((a, b) => {
            if (a[0] - b[0] !== 0) {
                return a[0] - b[0]
            }
            return a[1] - b[1]
        })

        let minDays = 0
        let days = 0
        for (let i = 0; i < times.length; i ++) {
            minDays = Math.max(minDays, days += times[i][1])
        }

        return minDays
    }
}
