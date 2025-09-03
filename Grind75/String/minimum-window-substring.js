// https://leetcode.com/problems/minimum-window-substring/description/

/**
create a Map for the char occurances of String t. "tFreqs"
create var "need" = tFreqs.size 
create var "have" = 0   // this is to track if the occurences for a char has met the occurences in tFreqs

create Map for the char occurences in the current window's substring, "windFreqs"

minLen = Number.POS INFI
minStr = ''

// window
let l = 0

for (let r = 0; r < s.length; r ++) {
    if (!windFreqs.has(s[r])) {
        // need to add key
        windFreqs.set(s[r], 0)
    }

    windFreqs.set(s[r], windFreqs.get(s[r]) + 1)

    if (tFreqs.has(s[r]) && tFreqs.get(s[r]) === windFreqs.get(s[r])) {
        // if a char in String t, check if it has met the number of occurences
        have += 1

        while (l <= r && have === need) {
            // since need the minimum window, shorten the window while satifies String t

            if (r - l + 1 < minLen) {
                minLen = r - l + 1
                minStr = s.slice(l, r + 1)
            }

            windFreqs.set(s[l], windFreqs.get(s[l]) - 1)
            if (tFreqs.has(s[l]) && tFreqs.get(s[l]) < windFreqs.get(s[l])) {
                have -= 1
            }
            l += 1
        }
    }
}

return minStr

- Time: O(n)
- Space: O(n)
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (s.length < t.length) {
        return ''
    }

    let minLen = Number.POSITIVE_INFINITY
    let minStr = ''

    const tFreqs = new Map()
    for (let c of t) {
        if (!tFreqs.has(c)) {
            tFreqs.set(c, 0)
        }

        tFreqs.set(c, tFreqs.get(c) + 1)
    }
    let need = tFreqs.size
    let have = 0

    const windFreqs = new Map()

    let l = 0
    for (let r = 0; r < s.length; r ++) {
        if (!windFreqs.has(s[r])) {
            windFreqs.set(s[r], 0)
        }
        windFreqs.set(s[r], windFreqs.get(s[r]) + 1)

        if (tFreqs.has(s[r]) && tFreqs.get(s[r]) === windFreqs.get(s[r])) {
            have += 1

            while (l <= r && have === need) {
                // console.log(s.slice(l, r + 1))
                if (r - l + 1 < minLen) {
                    minLen = r - l + 1
                    minStr = s.slice(l, r + 1)
                }

                windFreqs.set(s[l], windFreqs.get(s[l]) - 1)
                if (tFreqs.has(s[l]) && windFreqs.get(s[l]) < tFreqs.get(s[l])) {
                    have -= 1
                }
                l += 1
            }
        }
    }

    return minStr
};