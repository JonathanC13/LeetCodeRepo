// https://neetcode.io/problems/meeting-schedule-ii

/*
Note: (0,8),(8,10) is not considered a conflict at 8

edge case 1: if intervals.length <= 1: return intervals.length

for each interval push into an Array
    [start_i, 1]    1 because if a meeting starts, need to add a day
    [end_i, -1]     -1 because if a meeting ends, can close one of the open meetings

sort the Array by [0] non-descending and if tie then [1] ascending becauce same time is not a conflict so close first then open next

iterate the Array and record the max open meetings since this will indicate the min days needed due to them open at the same time.

- Time: O(n log n). n log n for sort + n to iterate
- Space: O(n). 2 * n for Array
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
        if (intervals.length <= 1) {
            return intervals.length
        }

        const times = []
        for (let i = 0; i < intervals.length; i ++) {
            times.push([intervals[i].start, 1])
            times.push([intervals[i].end, -1])
        }

        times.sort((a,b) => {
            if (a[0] === b[0]) {
                return a[1] - b[1]
            }
            return a[0] - b[0]
        })
        console.log(times)
        let minDays = 0
        let currDays = 0
        for (let i = 0; i < times.length; i ++) {
            currDays += times[i][1]
            minDays = Math.max(currDays, minDays)
        }

        return minDays
    }
}
