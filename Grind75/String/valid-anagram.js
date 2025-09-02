// https://leetcode.com/problems/valid-anagram/description/

/**
edge case 1: guarenteed not anagrams of eachother
if (s.length !== t.length) {
    return false
}

anagram is a word that contains all the characters of another word

create an Array of length 26 fill with 0 for String s character occurances
create an Array of length 26 fill with 0 for String t character occurances

iterate i from 0 to s.length    // since same length, can iterate once
    sOrd = s.charCodeAt(i)
    tOrd = t.charCodeAt(i)

    sArr[sOrd] += 1
    tArr[tOrd] += 1

iterate i from 0 to sArr.length // for anagram, the character occurences must be the same
    if (sArr[i] !== tArr[i]) {
        return false
    }

return true

- Time: O(n)    // n = s.length. n + n
- Space: O(1)   // 26 + 26

 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false
    }

    const sArr = new Array(26).fill(0)
    const tArr = new Array(26).fill(0)

    for (let i = 0; i < s.length; i ++) {
        const sOrd = s.charCodeAt(i) - 'a'.charCodeAt(0)
        const tOrd = t.charCodeAt(i) - 'a'.charCodeAt(0)

        sArr[sOrd] += 1
        tArr[tOrd] += 1
    }

    for (let i = 0; i < sArr.length; i ++) {
        if (sArr[i] !== tArr[i]) {
            return false
        }
    }

    return true
};