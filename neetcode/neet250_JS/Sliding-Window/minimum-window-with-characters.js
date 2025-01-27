// https://neetcode.io/problems/minimum-window-with-characters

/*
- edge case 1: if t.length < s.length: return ''

create a Map for String t characters and their frequencies

create var need = number of unique keys in tMap

let minLen = Number.POSITIVE_INFINITY
let window = [0, 0]
let have = 0
let l = 0
const sMap = new Map()  // to track what chars in the window
iterate s from r = l to < s.length
    const c = s[r]
    sMap.set(c, (sMap.get(c) || 0) + 1)

    if ((tMap.get(c) || 0) === sMap.get(c)) {
        have += 1
    }

    // once the first valid substring has all the t chars, move the left of the window while checking if still valid to update minLen
    while (have === need) {
        if (r - l + 1 < minLen) {
            minLen = r - l + 1
            window[0] = l
            window[1] = r
        }
        sMap.set(s[l], sMap.get(s[l]) - 1)
        if (sMap.get(s[l]) < (tMap.get(s[l]) || 0)) // if the char freq in sMap goes below tMap count (if exists) then have is reduced
            have -= 1
        l += 1
    }

return minLen === POSITIVE_INFINITY ? '' ? s.slice(window[0], window[1] + 1)

- Time: O(n). n = s.length
- Space: O(n). s.length + t.length

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
            tMap.set(t[i], (tMap.get(t[i]) || 0) + 1)
        }
        let need = Array.from(tMap).length
        console.log(need)

        let minLen = Number.POSITIVE_INFINITY
        let window = [0, 0]
        let l = 0
        let have = 0
        const sMap = new Map()

        for (let r = l; r < s.length; r ++) {
            const c = s[r]
            sMap.set(c, (sMap.get(c) || 0) + 1)
            if (sMap.get(c) === tMap.get(c)) {
                have += 1
            }

            while (l <= r && have === need) {
                const lc = s[l]
                if (r - l + 1 < minLen) {
                    minLen = r - l + 1
                    window[0] = l
                    window[1] = r
                } 
                sMap.set(lc, sMap.get(lc) - 1)
                if (sMap.get(lc) < (tMap.get(lc) || 0)) {
                    have -= 1
                }
                l += 1
            }
        }

        return minLen === Number.POSITIVE_INFINITY ? '' : s.slice(window[0], window[1] + 1)
    }
}
