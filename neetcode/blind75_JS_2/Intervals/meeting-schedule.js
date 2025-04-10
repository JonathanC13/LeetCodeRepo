// https://neetcode.io/problems/meeting-schedule

/*
Note: (0,8),(8,10) is not considered a conflict at 8

sort intervals by start_i in non-descending order

iterate intervals
    if there is a possible merge, return false

return true

- Time: O(n log n)
- Space: O(log n)
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

        intervals.sort((a,b) => a.start - b.start)

        let i = 0;
        while (i < intervals.length) {
            let merge = intervals[i]
            i += 1
            if (i < intervals.length && intervals[i].start < merge.end) {
                return false
            }
        }

        return true
    }
}
