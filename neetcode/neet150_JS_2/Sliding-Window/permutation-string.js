// https://neetcode.io/problems/permutation-string

/*
Permutation of s1 in s2
substring of s1 that can be in any order exists in s2

create a Map for s1
    key: char
    val: freq

create a Map for s2 substring

let need = s1Map.size
let have = 0

let left = 0
iterate s2, right
    if (!s1Map.has(s2[right])) {
        s2Map.clear()
        have = 0
        left = right
    } else {
        s2Map.set(s2[right], (s2Map.get(s2[right]) || 0) + 1)
        if (s2Map.get(s2[right]) === s1Map.get(s2[right])) {
            have += 1

            if (have === need) {
                return true
            }
        }
    }

    while (left < right && (s2Map.get(s2[right]) > s1Map.get(s2[right]))) {
        if (s2Map.has(s2[left])) {
            s2Map.set(s2[left], s2Map.get(s2[left]) - 1)
            if s2Map.get(s2[left]) < s1Map.get(s2[left]) {
                have -= 1
            }
        }
        left += 1
    }

return false

- Time: O(n)   // n = s2.length
- Space: O(n)
*/

class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const s1Map = new Map()
        for (let i = 0; i < s1.length; i ++) {
            s1Map.set(s1[i], (s1Map.get(s1[i]) || 0) + 1)
        }
        const s2Map = new Map()

        let need = s1Map.size
        let have = 0
        let left = 0

        for (let r = 0; r < s2.length; r ++) {
            if (!s1Map.has(s2[r])) {
                left = r
                s2Map.clear()
                have = 0
                continue
            } else {
                s2Map.set(s2[r], (s2Map.get(s2[r]) || 0) + 1)
                if (s2Map.get(s2[r]) === s1Map.get(s2[r])) {
                    have += 1

                    if (have === need) {
                        console.log(s2.slice(left + 1, r + 1))
                        return true
                    }
                }
            }

            while (left < r && s2Map.get(s2[r]) > s1Map.get(s2[r])) {
                if (s2Map.has(s2[left])) {
                    s2Map.set(s2[left], s2Map.get(s2[left]) - 1)
                    if (s2Map.get(s2[left]) < s1Map.get(s2[left])) {
                        have -= 1
                    }
                }
                left += 1
            }
        }

        return false
    }
}
