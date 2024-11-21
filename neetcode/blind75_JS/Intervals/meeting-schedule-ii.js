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
            return 1
        }

        const times = []
        for (let i of intervals) {
            times.push([i.start, 1])
            times.push([i.end, -1])
        }

        times.sort((a,b) => {return (a === b ? a[1] - b[1] : a[0] - b[0])})
        console.log(times)

        let res = 0, count = 0;
        for (const t of times) {
            count += t[1];
            res = Math.max(res, count);
        }
        return res;
    }
}
