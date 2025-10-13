// https://leetcode.com/problems/valid-anagram/description/

/**
1. Assumptions:
    - Can be any character

2. Input validation
    - typeof s === 'string', typeof t === 'string'
    - length
        - if s.length === 0 and t.length === 0: return true
        - if s.length === 0 or t.length === 0: return false
    - content
        s and t have chars

3. time and space constraints
    - BTTC: O(m + n)    // m = s.length, n = t.length
    - Space: O(m + n)   // since assume any character, if given that only lowercase English then can use an Array of length 26 which is O(1) space since constant of 26

4. some test cases and edge cases
    edge cases
    - if s.length === 0 and t.length === 0: return true
    - if s.length !== t.length: return false
    some test cases
    1. s = '', t = 'abc'    // expected = false
    2. s = 'abc', t = 'ac'  // expected = false
    3. s = 'abc', t = 'bca' // expected = true

5. visualize by drawing and manullay solve
6. break into subproblems
    since an anagram is where both Strings have the same characters and frequencies;
    - iterate String s and save characters and its frequencies in a Map
    - iterate String t and every char: if not in sMap or the current freq === 0 then return false since this char not in String s or no more available to decrement

7. algorithm
    - Counter

8. Data structure
    - Strings
    - Array for counter

9. Complexity
    Time: O(m + n)
    Space: O(1)
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length === 0 && t.length === 0) {
        return true
    }
    if (s.length !== t.length) {
        return false
    }

    const sArr = new Array(26).fill(0)
    for (let i = 0; i < s.length; i ++) {
        const ord = s.charCodeAt(i) - 'a'.charCodeAt(0)
        sArr[ord] += 1
    }

    for (let i = 0; i < t.length; i ++) {
        const ord = t.charCodeAt(i) - 'a'.charCodeAt(0)
        if (sArr[ord] === 0) {
            return false
        }
        sArr[ord] -= 1
    }

    return true
};