// https://neetcode.io/problems/permutation-string

class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s2.length < s1.length) {
            return false
        }

        let l = 0
        let r = s1.length

        const s1Map = new Map()
        for (let c of s1) {
            s1Map.set(c, (s1Map.get(c) || 0) + 1)
        }

        while (r <= s2.length) {
            const tempMap = new Map(s1Map)
            for (let i = l; i < r; i ++) {
                if (tempMap.has(s2[i]) && tempMap.get(s2[i]) > 0) {
                    if (tempMap.get(s2[i]) === 1) {
                        tempMap.delete(s2[i])
                    } else {
                        tempMap.set(s2[i], tempMap.get(s2[i]) - 1)
                    }
                } else {
                    break
                }
            }
            console.log(l)
            console.log(tempMap)
            if (tempMap.size === 0) {
                return true
            }

            l += 1
            r += 1
        }

        return false
    }
}
