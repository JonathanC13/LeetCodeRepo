// https://leetcode.com/problems/minimum-window-substring/description/

/**
1. Assumptions
    - Available characters: upper and lowercase English chars

2. input val
    - regex: /^[A-Za-z]*&/

3. Time/space constraints
    BTTC: O(m)  // m = s.length
    Space: O(n) // n = t.length for the char freq

4. some test cases and edge cases
    edge cases
    1. if s.length === 0 || t.length === 0 || s.length < t.length: return ""
    test cases
    2. s = 'abcd', t = 'abd'    // expected = abcd
    3. s = 'bcdefacb', t = 'abc'    // expected = 'acb'

5. visualize by drawing and manually solve
6. break into subproblems
    create a Map to record the chars and freqs
    need = tMap.size()
    have = 0
    sliding window iterate String s
        sMap[s[r]] += 1
        if the s[r] occurances of char in s === occurances in t
            have += 1

        // if valid, move window until not valid
        while (l <= r && have === need) {
            update min substr res

            if the s[l] occurances of char in s === occurances in t
                have -=1 since the decrement will cause not have anymore

            sMap[s[l]] -= 1
            l += 1
        }

7. algo
    - sliding window
    - frequency count

8. Data structures
    - Strings
    - Map

9. Complexity
    - Time: O(m)
    - Space: O(n)
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (s.length === 0 || t.length === 0 || s.length < t.length) {
        return ""
    }

    const tMap = new Map()
    let need = 0
    for (let i = 0; i < t.length; i ++) {
        if (!tMap.has(t[i])) {
            need += 1
            tMap.set(t[i], 0)
        }
        tMap.set(t[i], tMap.get(t[i]) + 1)
    }
    
    const minWind = [0, s.length]
    const sMap = new Map()
    let have = 0
    let l = 0
    for (let r = l; r < s.length; r ++) {
        if (!sMap.has(s[r])) {
            sMap.set(s[r], 0)
        }
        sMap.set(s[r], sMap.get(s[r]) + 1)
        if (tMap.has(s[r]) && tMap.get(s[r]) === sMap.get(s[r])) {
            have += 1

            while (l <= r && have === need) {
                if (r - l < minWind[1] - minWind[0]) {
                    minWind[0] = l
                    minWind[1] = r
                }

                if (tMap.get(s[l]) === sMap.get(s[l])) {
                    have -= 1
                }
                sMap.set(s[l], sMap.get(s[l]) - 1)
                l += 1
            }
        }
    }

    return minWind[1] === s.length ? "" : s.slice(minWind[0], minWind[1] + 1)
};