// https://neetcode.io/problems/partition-labels

class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(S) {
        if (S.length === 0) {
            return []
        }

        const n = S.length
        const res = []

        return this.intervals(S, n, res)
        // return this.twoPtr(S, n, res)
    }

    intervals(S, n, res) {
        const visited = new Set()
        const intervals = []

        for (let l = 0; l < n; l ++) {
            if (visited.has(S[l])) {
                continue
            }

            for (let r = n -1; r >= l; r --) {
                // find the end
                if (S[r] === S[l]) {
                    visited.add(S[l])
                    intervals.push([l, r])
                    break
                }
            }
        }
        
        // merge the intervals
        const merged = []
        while (intervals.length !== 0) {
            let l = 0
            let r = 1
            while (r < intervals.length && intervals[l][1] >= intervals[r][0])  {// end of reference interval includes the start of the comparison interval
                // update ref interval
                intervals[l][0] = Math.min(intervals[l][0], intervals[r][0])
                intervals[l][1] = Math.max(intervals[l][1], intervals[r][1])
                r += 1
            }

            merged.push(intervals[l])
            // remove processed intervals
            intervals.splice(l, r)
        }
        console.log(merged)
        return Array.from(merged, (x) => {return x[1] - x[0] + 1})
    }

    twoPtr(S, n, res) {
        const ends = new Map()
        for (let i = 0; i < n; i ++) {
            ends.set(S[i], i)
        }

        let size = 0
        let end = 0
        for (let i = 0; i < n; i ++) {
            size += 1
            end = Math.max(end, ends.get(S[i]))

            if (i === end) {
                res.push(size)
                size = 0
            }
        }

        return res
    }
}
