// https://neetcode.io/problems/meeting-schedule-ii
/*
8, 8 is not a conflict

- edge case 0: if intervals.length === 0: return 0
- edge case 1: if intervals.length === 1: return 1

times = []
for each interval push the value and if it is a start or end time (start = 1, end = -1) into an array, e.g. [0,0], [40, 1]

sort the times by times[i][0] in non descending order and if equal time then sort by times[i][1] in non-descending order since same value is not a conflict put the end time first to close the interval.

iterate the times
    record the longest streak of unclosed start times, this is the minimum number of days needed since overlapping intervals need a different day.


- Time: O(n log n). n to put into Array, + n log n for sort, + n to iterate Array
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
        if (intervals.length === 0) {
            return 0
        }
        if (intervals.length === 1) {
            return 1
        }

        const times = []
        for (let i = 0; i < intervals.length; i ++) {
            times.push([intervals[i].start, 1])
            times.push([intervals[i].end, -1])
        }
        
        times.sort((a, b) => {
            const ord = a[0] - b[0]
            if (ord === 0) {
                return a[1] - b[1]
            }
            return ord
        })
        console.log(times)
        let days = 0
        let currDays = 0
        for (let i = 0; i < times.length; i ++) {
            // if (times[i][1] === 0) {
            //     currDays -= 1
            // } else {
            //     currDays += 1
            // }
            currDays += times[i][1]
            days = Math.max(days, currDays)
        }
        
        return days
    }
}
