// https://neetcode.io/problems/meeting-schedule-ii

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
        if (intervals.length < 2) {
            return intervals.length
        }

        const times = []
        for (let i = 0; i < intervals.length; i ++) {
            times.push([intervals[i].start, 1])
            times.push([intervals[i].end, -1])
        }

        times.sort((a, b) => {return a[0] - b[0] || a[1] - b[1]})
        console.log(times)
        let days = 0
        let starts = 0
        for (let i = 0; i < times.length; i ++) {
            starts += times[i][1]
            days = Math.max(days, starts)
        }

        return days
    }
}
