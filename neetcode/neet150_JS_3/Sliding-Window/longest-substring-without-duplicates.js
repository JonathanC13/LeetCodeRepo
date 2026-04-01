// https://neetcode.io/problems/longest-substring-without-duplicates/question

/**
 * 1. Assumptions
 *  1. any ascii character
 * 
 * 2. input validation
 *  1. s
 *      - typeof s === 'string'
 *      - s.length >= 0
 *      - String s's characters are any ascii character
 * 
 * 3. time and space constraints
 *  BTTC: O(n)
 *  Space: O(n)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if s.length <= 1: return s.length
 * 
 *  test cases
 *  1. all characters are the same
 *      inputs
 *          s = 'yyyy'
 *      expected output
 *          1
 * 
 *  2. longer substring later in String s
 *      inputs
 *          s = 'abcbhgdi'
 *      expected output
 *          6
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  sliding window to contain the substring without repeating characters
 *  Use a Set to record what characters are within the window
 *  if the current character at pointer r is in the Set, move pointer l forward until it is not in the Set
 *  update maxSubstr length
 * 
 * 7. algos
 *  - sliding window
 *  
 * 8. data structures
 *  - Arrays
 * 
 * 9. complexity
 *  Time: O(n)
 *  Space: O(n) // for Set
 * 
 */

class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (s.length <= 1) {
            return s.length
        }

        const setWindow = new Set()
        const maxSubstr = [0, 0]
        let l = 0
        for (let r = 0; r < s.length; r ++) {
            while (l < r && setWindow.has(s[r])) {
                setWindow.delete(s[l])
                l += 1
            }
            setWindow.add(s[r])

            if (r - l + 1 > maxSubstr[1] - maxSubstr[0] + 1) {
                maxSubstr[0] = l
                maxSubstr[1] = r
            }
        }

        // console.log(s.slice(maxSubstr[0], maxSubstr[1] + 1))
        return maxSubstr[1] - maxSubstr[0] + 1
    }
}
