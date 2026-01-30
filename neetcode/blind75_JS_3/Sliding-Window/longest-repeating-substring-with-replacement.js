// https://neetcode.io/problems/longest-repeating-substring-with-replacement/question

/**
 * 1. Assumptions
 *  1. None
 * 
 * 2. input validation  
 *  1. s
 *      - typeof s === 'string'
 *      - s.length >= 0
 *      - regex = '/^[A-Z]*$/'
 *  2. k
 *      - typeof k === 'number'
 *      - Number >= 0
 * 
 * 3. time and space constraints
 *  BTTC: O(n * m)  // n = s.length, m = unique characters
 *  Space: O(m)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if k >= s.length: return s.length
 * 
 *  test cases
 *  1. k !== 0
 *      inputs
 *          s = "AAABABB", k = 1
 *      expected output
 *          5
 *  2. k === 0
 *      inputs
 *          s = "ABAA", k = 0
 *      expected output
 *          2
 *      
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  Must traverse String s with each unique character as the target so that any other character can be replaced
 * 
 *  sliding window to mark the substring
 *  keep count of the # of target characters in the current window. Once window.length - count > k, move left forward until <= k
 * 
 * 7. algos
 *  - sliding window
 * 
 * 8. data structures
 *  - Array
 * 
 * 9. complexity    
 *  Time: O(n * m)  // n = s.length, m = # of unique characters
 *  Space: O(m)
 */

class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        if (k >= s.length) {
            return s.length
        }

        const setChars = new Set()
        for (let i = 0; i < s.length; i ++) {
            setChars.add(s[i])
        }

        let longest = [0, 0]

        for (let c of setChars) {
            let count = 0
            let l = 0
            for (let r = 0; r < s.length; r ++) {
                if (s[r] === c) {
                    count += 1
                }

                while (l < r && r - l + 1 - count > k) {
                    if (s[l] === c) {
                        count -= 1
                    }
                    l += 1
                }
                
                if (r - l + 1 > longest[1] - longest[0] + 1) {
                    longest[0] = l
                    longest[1] = r
                }
            }
        }

        // console.log(s.slice(longest[0], longest[1] + 1))
        return longest[1] - longest[0] + 1
    }
}
