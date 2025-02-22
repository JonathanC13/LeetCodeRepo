// https://neetcode.io/problems/meeting-schedule

/*
- edge case 1: if intervals.length < 2: return true

essentially checking if any overlap. 8 and 8 is not overlapping

sort intervals by start time in non descending order

- Time: O(n log n). n log n for sort
- Space: O(n)   . n for sort
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

        intervals.sort((a, b) => {return a.start - b.start})

        // compare each pair
        for (let i = 0; i < intervals.length - 1; i ++) {
            // if end of first interval > start of next interval, there is overlap
            if (intervals[i].end > intervals[i + 1].start) {
                return false
            }
        }

        return true
    }
}
