// https://neetcode.io/problems/longest-palindromic-substring/question

/**
 * 1. Assumptions
 *  1. only English characters, no spaces
 * 
 * 2. input validation
 *  1. s
 *      - typeof s === 'string'
 *      - s.length >= 0
 *      - regex = '/^[a-z]*$/'
 * 
 * 3. time and space constraints
 *  BTTC: O(n^2)
 *  Space: O(n^2)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if s.length <= 1: return s
 * 
 *  test cases
 *  1. odd center palindrome
 *      inputs
 *          s = 'abebbbeo'
 *      expected output
 *          ebbbe
 *  2. even center palindrome
 *      inputs
 *          s = 'abcgmgcab'
 *      expected output
 *          cgmgc
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  create a 2D Array of length s.length fill with False
 *  Starting state of table is every r === c = True since a single character can be a palindrome
 *  Other cells are the character at s[r] compared to character at s[c] and IF it extends an existing palindrome
 *  To reduce redundancy, only need to compare indexes > row.
 * 
 *  start at the last row work up because we want to determine if the cell also extends an existing palindrome.
 *  By working up, can check if extend by checking cell r+1, c-1 which is the character immediately left of it.
 *      start with the last column and work left because of the potential even middle palindrome extension.
 *      check if r,c-1 === true, approach from rigth to left because otherwise will 'drag' a false True rightward.
 *      Why r,c-1, because the character at r is the same as c and c-1
 *      
 * 
 * 7. algos
 *  - 2D dp
 * 
 * 8. data structures
 *  - Array
 * 
 * 9. complexity
 *  Time: O(n^2)
 *  Space: O(n^2)
 */

class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        if (s.length <= 1) {
            return s
        }

        const n = s.length
        const tab = new Array(n).fill().map((e) => new Array(n).fill(false))
        const longest = [0,0]

        for (let r = n - 1; r >= 0; r --) {
            tab[r][r] = true

            for (let c = n - 1; c > r; c --) {
                if (s[r] === s[c] && (tab[r+1][c-1] || tab[r][c-1])) {
                    tab[r][c] = true
                    if (c - r > longest[1] - longest[0]) {
                        longest[0] = r
                        longest[1] = c
                    }
                }
            }
        }
        console.log(longest)
        return s.slice(longest[0], longest[1] + 1)
    }
}
