// https://neetcode.io/problems/meeting-schedule-ii

/**
 * Note: (0,8),(8,10) is not considered a conflict at 8.
 * 
 * times = []
 * for each interval push into an times's Array the [start, 1] and [end, -1]
 * 
 * 
 * sort the times by first component non-descending, if equal then sort by the second component non-descending
 *  *end before start because want to close meetings first and the same value does not overlap
 * 
 * cnt = 0  // this will record the highest count of unclosed meetings which equates to the min number of days needed for all the meetings.
 * 
 * iterate times
 *  cnt += 2nd component
 *  update highest cnt
 * 
 * - Time: O(n) // n + n
 * - Space: O(n)
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
        if (intervals.length < 2) {
            return intervals.length
        }

        const times = new Array()
        for (let i = 0; i < intervals.length; i ++) {
            times.push([intervals[i].start, 1])
            times.push([intervals[i].end, -1])
        }

        times.sort((a, b) => {
            const diff = a[0] - b[0]
            if (diff === 0) {
                return a[1] - b[1]
            }
            return diff
        })

        let days = 0
        let curr = 0
        for (let i = 0; i < times.length; i ++) {
            curr += times[i][1]
            days = Math.max(days, curr)
        }

        return days
    }
}
