// https://leetcode.com/problems/longest-repeating-character-replacement/description/

/**
1. Assumptions
    - Only uppercase English characters

2. Input validation
    - regex = /^[A-Z]*&/

3. time and space constraints
    - BTTC: O(m*n)  // m = unique chars, n = s.length
    - Space: O(m)

4. some test cases and edge cases
    edge cases
    1. s.length === 0: return 0
    2. s.length <= k: return s.length
    test cases
    1. s = '', k = 1    // expected = 0
    2. s = 'ABC', k = 3 // expected = 3
    3. s = 'ABC', k = 1 // expected = 2
    4. s = 'ABA, k = 1  // expected = 3

5. visualize by drawing and manually solve
6. break into subproblems
    To know which characters need to be converted, iterate String s with every unique character so that the difference ones are to be converted
        Sliding window, keep count of how many occurances of the selected char there is in the window so that a valid window is where: have + k >= r - l + 1
        when invalid, move left of the window until valid again

7. algo
    - sliding window

8. data structure
    - String

9. complexity
    - Time: O(m*n)
    - Space: O(m)
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    if (s.length === 0) {
        return 0
    }
    if (s.length <= k) {
        return k
    }

    const chars = new Set()
    for (let i = 0; i < s.length; i ++) {
        chars.add(s[i])
    }

    let maxSub = 0

    for (let c of chars) {
        let have = 0
        let l = 0
        for (let r = 0; r < s.length; r ++) {
            if (s[r] === c) {
                have += 1
            }

            while (l <= r && have + k < r - l + 1) {
                if (s[l] === c) {
                    have -= 1
                }
                l += 1
            }
            maxSub = Math.max(maxSub, r - l + 1)
        }
    }

    return maxSub
};