// https://neetcode.io/problems/partition-labels

/*
iterate String s and store the last index it occurred in a Map.
create pointer right = 0

res = new Array()
let size = 0
for (let l = 0; l < S.length; l ++) {
    size += 1

    right = max(Map get last occurance of S[l], right)

    if (l === r) {
        res.push(size)
        size = 0
    }
}

- Time: O(n)
- Space: O(unique chars)

*/

class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(S) {
        const map = new Map()
        for (let i = 0; i < S.length; i ++) {
            map.set(S[i], i)
        }

        let start = 0
        let r = 0
        const res = new Array()
        const subs = new Array()
        let size = 0
        for (let l = 0; l < S.length; l ++) {
            size += 1

            r = Math.max(r, map.get(S[l]))

            if (l === r) {
                res.push(size)
                subs.push(S.slice(start, r + 1))
                start = r + 1
                size = 0
            }
        }
        console.log(subs)
        return res
    }
}
