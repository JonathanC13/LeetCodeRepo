// https://neetcode.io/problems/merge-intervals

/*
- edge case 1: if intervals.length < 2: return intervals

sort the intervals by the start_i in non descending order so that we can iterate linearly

const res = []
let i = 0
while (i < intervals.length)
    currInterval = intervals[i] // select base interval
    let j = i + 1
    // iterate to merge any intervals
    while (j < intervals.length) {
        if (currInterval[1] < intervals[j][0]) {
            break
        }

        currInterval[0] = Math.min(currInterval[0], intervals[j][0])
        currInterval[1] = Math.max(currInterval[1], intervals[j][1])

        j += 1
    }
    i = j   // skip over merged
    res.push(currInterval)

- Time: O(n log n). n log n for sort. + n for iterating
- Space: O(n)
*/

class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        if (intervals.length < 2) {
            return intervals
        }

        intervals.sort((a, b) => {return a[0] - b[0]})

        const res = []
        let i = 0
        while (i < intervals.length) {
            const currInterval = intervals[i]
            let j = i + 1
            while (j < intervals.length) {
                if (currInterval[1] < intervals[j][0]) {
                    break
                }

                currInterval[0] = Math.min(currInterval[0], intervals[j][0])
                currInterval[1] = Math.max(currInterval[1], intervals[j][1])
                j += 1
            }

            res.push(currInterval)
            i = j
        }

        return res
    }
}
