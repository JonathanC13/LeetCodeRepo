// https://neetcode.io/problems/minimum-window-with-characters

/*
define the substring with two pointers

create a Map for t
    key: char
    val: freq

create a Map for s

let need = tMap.size
let have = 0

Initially move right to collect all the chars from t in a substring, then to find the min move the left forward and keep recording the length if still valid.
When no longer valid, right starts moving again to collect.

let left = 0
iterate r over s.length
    add the s[r] to sMap, freq + 1

    if (sMap.get(s[r]) === (tMap.get(s[r]) || 0)) {
        have += 1
    }

    while (left <= r && have === need) {        // left <= r so that minSub can be evaled inside and I don't need to check it above to make it twice 
        if (right - left + 1 < minSub.length) {
            minSub = s.slice(left, right + 1)
        }

        sMap.set(s[left], sMap.get(s[left]) - 1)
        if (sMap.get(s[left]) < (tMap.get(s[left]) || 0)) {
            have -= 1
        }
        left += 1
    }
return minSub

- Time: O(n)
- Space: O(m)   // m = unique chars in s and t
*/

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (s.length < t.length) {
            return ''
        }

        const sMap = new Map()
        const tMap = new Map()
        for (let i = 0; i < t.length; i ++) {
            tMap.set(t[i], (tMap.get(t[i]) || 0) + 1)
        }

        let minSubLen = Number.POSITIVE_INFINITY
        let minSubWindow = [0, 0]

        let need = tMap.size
        let have = 0
        let l = 0
        for (let r = l; r < s.length; r ++) {
            sMap.set(s[r], (sMap.get(s[r]) || 0) + 1)
            if (sMap.get(s[r]) === (tMap.get(s[r]) || 0)) {
                have += 1
            }

            while (l <= r && have === need) {
                if (r - l + 1 < minSubLen) {
                    minSubLen = r - l + 1
                    minSubWindow = [l, r]
                }

                sMap.set(s[l], sMap.get(s[l]) - 1)
                if (sMap.get(s[l]) < (tMap.get(s[l]) || 0)) {
                    have -= 1 
                }
                l += 1
            }
        }

        return minSubLen === Number.POSITIVE_INFINITY ? '' : s.slice(minSubWindow[0], minSubWindow[1] + 1)
    }
}
