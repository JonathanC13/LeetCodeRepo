// https://neetcode.io/problems/is-anagram/question

/**
 * 1. Assumptions
 *  1. Characters are lowercase English characters. Important since can use static Array of length 26
 * 
 * 2. input validation
 *  1. s and t
 *      - s instanceof String
 *      - s.length >= 0
 *      - lowercase English characters
 *          regex = '/^[a-z]*$/'
 *          if (regex.test(s) === false) {return false}
 * 
 * 3. time and space constraints
 *  BTTC: O(n)  // n, since s and t are the same length
 *  Space: O(1) // 26 chars
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if s.length !== t.length: return false
 *  2. if s.length === 0 && t.length === 0: return true
 * 
 *  test cases
 *  1. not anagram
 *      inputs
 *          s = 'racecar'
 *          t = 'raceaar'
 *      expected output
 *          false
 * 
 *  2. valid anagram
 *      inputs
 *          s = 'racecar'
 *          t = 'raaccer'
 *      expected output
 *          true
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  create Array of length 26 for the characters, to store the character added by String s and used by String t
 *  iterate the common Strings's length
 *      increment character in Array for s[i]
 *      decrement character in Array for t[i]
 * 
 *  iterate the character Array
 *      if any value is !== 0: return false
 * 
 *  return true
 * 
 * 7. algos
 *  - iterate String
 *  - record frequency of characters
 * 
 * 8. data structures
 *  - Arrays
 * 
 * 9. complexity
 *  Time: O(n)  // s.length === t.length, n
 *  Space: O(1) // 26 characters static
 * 
 *      
 * 
 */

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false
        }
        if (s.length === 0 && t.length === 0) {
            return true
        }

        const arrChars = new Array(26).fill(0)
        for (let i = 0; i < s.length; i ++) {
            const sOrd = s.charCodeAt(i) - 'a'.charCodeAt(0)
            const tOrd = t.charCodeAt(i) - 'a'.charCodeAt(0)

            arrChars[sOrd] += 1
            arrChars[tOrd] -= 1
        }
        
        for (let i = 0; i < arrChars.length; i ++) {
            if (arrChars[i] !== 0) {
                return false
            }
        }

        return true
    }
}
