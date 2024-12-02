// https://neetcode.io/problems/anagram-groups

class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if (strs.length === 0) {
            return []
        }

        const subs = new Map()

        for (let i = 0; i < strs.length; i ++) {
            const bucket = Array(26).fill(0)

            for (let c of strs[i]) {
                const ord = c.charCodeAt(0) - 'a'.charCodeAt(0)
                bucket[ord] += 1
            }

            const strRep = bucket.join(',')
            
            subs.set(strRep, (subs.get(strRep) ? [...subs.get(strRep), strs[i]] : [strs[i]]))
            
        }
        const res = []

        for (let [k, v] of subs.entries()) {
            res.push(v)
        }

        return res
    }
}
