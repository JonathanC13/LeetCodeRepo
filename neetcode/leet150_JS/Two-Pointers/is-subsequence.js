// https://leetcode.com/problems/is-subsequence/description/?envType=study-plan-v2&envId=top-interview-150

/*
one pointer for the index in s, this is the char to look for in String t
one pointer for the index in t to compare

iterate String t
    if (s[i] === t[j]) {
        i += 1
    }

return i === s.length

- Time: O(t.length)
- Space: O(1)
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let i = 0
    for (let j = 0; j < t.length; j ++) {
        if (s[i] === t[j]) {
            i += 1
        }
    }

    return i === s.length
};