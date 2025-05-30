// https://leetcode.com/problems/is-subsequence/description/?envType=study-plan-v2&envId=leetcode-75

/*
create a pointer i for the compare index in String s
create a pointer j for the compare index in String t

when i >= s.length: return true

- Time: O(n)    // max time is t.length
- Space: O(1)
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if (s.length === 0) {
        return true
    }
    let i = 0

    for (let j = 0; j < t.length; j ++) {
        if (s[i] === t[j]) {
            i += 1
            if (i >= s.length) {
                return true
            }
            continue
        }
    }

    return false
};