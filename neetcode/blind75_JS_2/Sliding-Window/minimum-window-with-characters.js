// https://neetcode.io/problems/minimum-window-with-characters

/*
edge case 1: if t.length > s.length: return ''

create a Map to store
    key: unqiue char in String t
    value: frequency of the char in String t

let l = 0
let min = s.length + 1
let minWindow = [0, 0]

let have = 0    // the number of chars and its frequency the current window satisfies
let need = Map.size()   // the unique chars and their freqency

iterate right pointer 0 to < s.length
    if s[r] exists in Map
        Map s[r] -= 1       // can go negative
        if (Map s[r] === 0) {
            have += 1
        }

    while (l <= r && have === need) {
        if (r - l + 1 < min) {
            min = r - l + 1
            minWindow = [l, r]
        }

        slide left of window forward until have < need
        if (s[l] exists in Map) 
            Map s[l] += 1
            if (Map s[l] > 0)
                have -= 1

        l += 1
    }

return s.slice(minWindow[0], minWindow[1] + 1)

- Time: O(n)
- Space: O(t)
*/

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t.length > s.length) {
            return ''
        }

        const tMap = new Map()
        for (let i = 0; i < t.length; i ++) {
            tMap.set(t[i], (tMap.get(t[i]) ?? 0) + 1 )
        }

        let l = 0
        let min = s.length + 1
        let minWindow = [0, 0]

        let have = 0
        let need = tMap.size

        for (let r = 0; r < s.length; r ++) {
            if (tMap.has(s[r])) {
                tMap.set(s[r], tMap.get(s[r]) - 1)
                if (tMap.get(s[r]) === 0) {
                    have += 1
                }
            }

            while (l <= r && have === need) {
                if (r - l + 1 < min) {
                    min = r - l + 1
                    minWindow = [l, r]
                }

                if (tMap.has(s[l])) {
                    tMap.set(s[l], tMap.get(s[l]) + 1)
                    if (tMap.get(s[l]) > 0) {
                        have -= 1
                    }
                }
                l += 1
            }
        }
        
        return min === s.length + 1 ? '' : s.slice(minWindow[0], minWindow[1] + 1)

    }
}
