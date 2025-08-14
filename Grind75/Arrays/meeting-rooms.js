// https://neetcode.io/problems/meeting-schedule

/**
 * Note: (0,8),(8,10) is not considered a conflict at 8
 * 
 * Sort the intervals in non-descending order by the start times. Time: O(n log(n))
 * 
 * iterate i in intervals from 0 to end - 1
 *      check if the end time of intervals[i] > start time of intervals[i + 1] === true
 *          return false
 * 
 * return true
 * 
 * Time: O(n log(n))    ~= n + n log(n)
 * Space: O(n)  // n = input array.length
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
        if (intervals.length < 2) {
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
