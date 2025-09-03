// https://leetcode.com/problems/find-all-anagrams-in-a-string/description/

/**
sliding window
l = 0

create a Map for the character frequencies of String p
    Key: char
    Value: frequency
let need = pFreqs.size
let have = 0

const res = []

create a Map for the character frequencies of current substring, "windMap"

iterate r from 0 to p.length
    // Add freq to windMap
    if (!windMap.has(s[r])) {
        windMap.set(s[r], 0)
    }
    windMap.set(s[r], windMap.get(s[r]) + 1)

    if (!pFreqs.has(s[r])) {
        // character not in String p
        windMap.clear()
        have = 0
        l = r + 1
        continue
    } else if (windMap.get(s[r]) > pFreqs.get(s[r])) {
        // too many
        while (l <= r && windMap.get(s[r]) > pFreqs.get(s[r])) {
            if (pFreqs.get(s[l]) === windMap.get(s[l])) {
                // in effort to remove too many of s[r], if s[l] removed causes windMap freq < pFreqs then have -=1
                // e.g. s = vmvmv, p = vmv
                // first anagram at 0
                // Once index 3 is reached, it will loop here until m freq in windMap === pFreq
                have -= 1
            }

            windMap.set(s[l], windMap.get(s[l]) - 1)
            l += 1
        }

    } else if (pFreqs.get(s[r]) === windMap.get(s[r])) {
        have += 1
    }

    while (l <= r && need === have) {
        res.push(l)

        // move l until the window is not an anagram of p. In this case, it only needs to move once
        windMap.set(s[l], windMap.get(s[l]) - 1)
        if (windMap.get(s[l]) < pFreqs.get(s[l])) {
            have -= 1
        }
        l += 1
    }

return res

- Time: O(n)
- Space: O(n)

 */

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const pFreqs = new Map()
    for (let c of p) {
        if (!pFreqs.has(c)) {
            pFreqs.set(c, 0)
        }
        pFreqs.set(c, pFreqs.get(c) + 1)
    }
    let need = pFreqs.size
    let have = 0
    const windMap = new Map()

    const res = new Array()

    let l = 0
    for (let r = 0; r < s.length; r ++) {
        if (!pFreqs.has(s[r])) {
            windMap.clear()
            have = 0
            l = r + 1
            continue
        }

        if (!windMap.has(s[r])) {
            windMap.set(s[r], 0)
        }
        windMap.set(s[r], windMap.get(s[r]) + 1)

        if (windMap.get(s[r]) > pFreqs.get(s[r])) {
            while (l <= r && windMap.get(s[r]) > pFreqs.get(s[r])) {
                if (windMap.get(s[l]) === pFreqs.get(s[l])) {
                    have -= 1
                }
                windMap.set(s[l], windMap.get(s[l]) - 1)
                l += 1
            }
        } else if (pFreqs.get(s[r]) === windMap.get(s[r])) {
            have += 1
        }

        while (l <= r && have === need) {
            res.push(l)

            windMap.set(s[l], windMap.get(s[l]) - 1)
            if (windMap.get(s[l]) < pFreqs.get(s[l])) {
                have -= 1
            }
            l += 1
        }
    }

    return res
};