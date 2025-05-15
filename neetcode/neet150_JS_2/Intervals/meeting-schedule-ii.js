// https://neetcode.io/problems/meeting-schedule-ii

/*
Note: (0,8),(8,10) is not considered a conflict at 8

iterate intervals and put into an Array the start and end times with a value that increases and decreases days needed.
    [start, 1]
    [end, -1]
    This is so a continuous x sequence of start times require x days for those to not conflict. When an end time appears the -1 will close one of the start times therefore reducing the number of days needed for the current subset.

sort the new Array by time and if tie, then choose the end time first since same number is not a conflict.

iterate the new Array
    add the incremental value
    record if new max

return recorded max

- Time: O(n log n)
- Space: O(n)
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
        const times = new Array()
        for (let i = 0; i < intervals.length; i ++) {
            times.push([intervals[i].start, 1])
            times.push([intervals[i].end, -1])
        }

        times.sort((a, b) => 
        {
            const diff = a[0] - b[0]
            if (diff === 0) {
                return a[1] - b[1]
            }
            return diff
        })

        let minDays = 0
        let days = 0
        for (let i = 0; i < times.length; i ++) {
            days += times[i][1]
            minDays = Math.max(minDays, days)
        }

        return minDays
    }
}
