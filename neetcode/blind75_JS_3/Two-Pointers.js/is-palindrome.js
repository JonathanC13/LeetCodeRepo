// https://neetcode.io/problems/is-palindrome/question

/**
 * 1. Assumptions
 *  1. case insensative and ignore non-alphanumeric
 * 
 * 2. input validation
 *  1. s
 *      - typeof s === 'string'
 *      - s characters
 *          - regex = '/^[A-Za-z0-9]*$/'
 * 
 * 3. time and space constraints
 *  BTTC: O(n)
 *  Space: O(1)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if s.length <= 1: return true
 * 
 *  test cases
 *  1. not a palindrome
 *      inputs
 *          s = 'raceccr'
 *      expected output
 *          false
 * 
 *  2. palindrome
 *      inputs
 *          s = 'racecar'
 *      expected output
 *          true
 * 
 *  3. palindrome with spaces and non-alphanumeric
 *      inputs
 *          s = 'ra $ce%c a r'
 *      expected output
 *          true
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  two pointers;
 *      1. one at start
 *      2. one at end
 *  iterate with left < right
 *      find valid left alphanumeric going right while l < r
 * 
 *      find valid right alphanumeric going left while l < r
 * 
 *      compare characters at l and r
 * 
 *  return true at end if could exhaust all characters
 * 
 * 7. algos
 *  - two pointers
 * 
 * 8. data structures
 *  - Arrays
 * 
 * 9. Complexity    
 *  Time: O(n)
 *  Space: O(1)
 * 
 */

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        if (s.length <= 1) {
            return true
        }

        let l = 0
        let r = s.length - 1

        while (l < r) {
            while (l < r && !this.isAlphanumeric(s[l])) {
                l += 1
            }

            while (l < r && !this.isAlphanumeric(s[r])) {
                r -= 1
            }
            
            if (s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false
            }

            l += 1
            r -= 1
        }
        return true
    }

    isAlphanumeric(c) {
        const ordC = c.toLowerCase().charCodeAt(0)

        return ('A'.charCodeAt(0) <= ordC && ordC <= 'Z'.charCodeAt(0)) ||
            ('a'.charCodeAt(0) <= ordC && ordC <= 'z'.charCodeAt(0)) ||
            ('0'.charCodeAt(0) <= ordC && ordC <= '9'.charCodeAt(0))
    }
}
