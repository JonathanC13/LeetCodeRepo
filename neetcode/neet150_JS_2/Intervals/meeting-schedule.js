// https://neetcode.io/problems/meeting-schedule

/*
Note: (0,8),(8,10) is not considered a conflict at 8


sort the intervals by start time in non-descending order

i = 0

while (i < n)
    currInterval = intervals[i]
    i += 1
    if (i < n && intervals[i].start < currInterval.end) {
        return false
    }

return true

- Time: O(n log n)
- Space: O(1)
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
        const n = intervals.length
        let i = 0

        intervals.sort((a, b) => a.start - b.start)
        
        while (i < n) {
            const currInterval = intervals[i]
            i += 1
            if (i < n && intervals[i].start < currInterval.end) {
                return false
            }
        }

        return true
    }
}
