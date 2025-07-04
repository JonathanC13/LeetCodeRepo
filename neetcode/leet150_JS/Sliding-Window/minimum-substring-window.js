// https://leetcode.com/problems/minimum-window-substring/description/?envType=study-plan-v2&envId=top-interview-150

/*
1. if t.length > s.length: return ""

create a Map and store the char and freq of String t
need = tMap.size

create empty Map for chars in the current window
have = 0
minLen = POS infin
minSub = ""
let l = 0
iterate String s as the right boundary of the window
    if (s[r] not in tMap)
        continue

    if (s[r] not in windMap)
        windMap set s[r]: 0

    windMap.set(s[r], get(s[r]) + 1)

    if (windMap.get(s[r]) === tMap.get(s[r]))
        have += 1

        while have === need
            if (r - l + 1 < minLen)
                minLen = r - l + 1
                minSub = s.slice(l, r + 1)

            if (s[l] in tMap)
                windMap.set(s[l], map.get(s[l]) - 1)
                if (windMap.get(s[l]) < tMap.get(s[l]))
                    have -= 1
            
            l += 1

return minSub

- Time: O(s * t)
- Space: O(t)    
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (s.length < t.length) {
        return ""
    }

    let minLen = Number.POSITIVE_INFINITY
    let minSub = ""

    const tMap = new Map()
    for (let i = 0; i < t.length; i ++) {
        if (!tMap.has(t[i])) {
            tMap.set(t[i], 0)
        }
        tMap.set(t[i], tMap.get(t[i]) + 1)
    }
    const need = tMap.size
    const windMap = new Map()
    let have = 0

    let l = 0
    for (let r = 0; r < s.length; r ++) {
        if (!tMap.has(s[r])) {
            continue
        }

        if (!windMap.has(s[r])) {
            windMap.set(s[r], 0)
        }
        windMap.set(s[r], windMap.get(s[r]) + 1)

        if (windMap.get(s[r]) === tMap.get(s[r])) {
            have += 1

            while (l <= r && have === need) {
                if (r - l + 1 < minLen) {
                    minLen = r - l + 1
                    minSub = s.slice(l, r + 1)
                }

                if (windMap.has(s[l])) {
                    windMap.set(s[l], windMap.get(s[l]) - 1)
                    if (windMap.get(s[l]) < tMap.get(s[l])) {
                        have -= 1
                    }
                }

                l += 1
            }
        }
    }

    return minSub

};