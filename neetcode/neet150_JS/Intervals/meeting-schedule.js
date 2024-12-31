// https://neetcode.io/problems/meeting-schedule

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

        intervals.sort((a, b) => {return a.start - b.end})
        
        for (let i = 0; i < intervals.length - 1; i ++) {
            if (intervals[i].end > intervals[i + 1].start) {
                return false
            }
        }

        return true
    }
}
