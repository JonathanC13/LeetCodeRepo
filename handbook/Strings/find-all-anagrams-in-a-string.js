// https://leetcode.com/problems/find-all-anagrams-in-a-string/description/

/**
1. Assumptions:
    1. What characters? English lowercase

2. Input validation
    - typeof s === 'string, typeof p === 'string'
    - length
        1. if s.length === 0: return []
        2. if p.length === 0: return []
    - regex for lowercase English chars: = /^[a-z]*&/

3. time/space constraints
    BTTC: O(n)
    Space: O(1) // since 26 lowercase chars, can use Array O(26) = O(1)

4. Some test cases and edge cases
    edge cases
    1. if s.length === 0 || p.length === 0 || s.length < p.length: return []
    test cases
    1. s = 'bacasacb', p = 'abc'    // expected = [0, 5]
    2. s = 'azaz', p = 'az' // expected = [0,1,2]

5. visualize by drawing and manually solve
6. break into subproblems
    iterate p to record its characters' frequencies and record the number of unique chars (need)
    have = 0
    sliding window on String s
        if s[r] in pArr === 0 then p does not have that char
            move l to r + 1
            sArr = new Array(26).fill(0)    // delete or clear(foreach((elem, i) => ...)) entire prev window due to this char breaks anagram continuity
        else
            sArr[s[r] ord] += 1
            if (sArr[s[r]] === pArr[s[r]])
                have += 1

                // move window until invalid
                while (l <= r && have === need) {
                    res.push(l)

                    if (sArr[s[l]] === pArr[s[l]]) {
                        have -= 1
                    }
                    sArr[s[l]] -= 1
                    l += 1
                }
            else if (sArr[s[r]] > pArr[s[r]])
                // too many
                while (l <= r && sArr[s[r]] > pArr[s[r]]) {
                    if (sArr[s[l]] === pArr[s[l]]) {
                        have -= 1
                    }
                    sArr[s[r]] -= 1
                    l += 1
                }

            

7. algo
    - Sliding window
    - frequency counting for anagram

8. data structure
    - Strings
    - Array

9. Complexity
    - Time: O(n)    // n = s.length
    - Space: O(1)
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    if (s.length === 0 || p.length === 0 || s.length < p.length) {
        return []
    }

    const pArr = new Array(26).fill(0)
    let need = 0
    for (let i = 0; i < p.length; i ++) {
        const ord = p.charCodeAt(i) - 'a'.charCodeAt(0)
        if (pArr[ord] === 0) {
            need += 1
        }
        pArr[ord] += 1
    }

    let have = 0
    let sArr = new Array(26).fill(0)
    let l = 0
    const res = []
    for (let r = l; r < s.length; r ++) {
        const ord = s.charCodeAt(r) - 'a'.charCodeAt(0)
        if (pArr[ord] === 0) {
            l = r + 1
            sArr.forEach((e, i) => {sArr[i] = 0})
            have = 0
            
        } else {
            sArr[ord] += 1

            if (sArr[ord] === pArr[ord]) {
                have += 1

                while (l <= r && have === need) {
                    res.push(l)
                    const lOrd = s.charCodeAt(l) - 'a'.charCodeAt(0)
                    if (sArr[lOrd] === pArr[lOrd]) {
                        have -= 1
                    }
                    sArr[lOrd] -= 1
                    l += 1
                }
            } else {
                while (l <= r && sArr[ord] > pArr[ord]) {
                    const lOrd = s.charCodeAt(l) - 'a'.charCodeAt(0)
                    if (sArr[lOrd] === pArr[lOrd]) {
                        have -= 1
                    }
                    sArr[lOrd] -= 1
                    l += 1
                }
            }

            

            
        }
    }

    return res
};