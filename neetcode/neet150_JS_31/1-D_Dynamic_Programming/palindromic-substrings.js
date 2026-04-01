// https://neetcode.io/problems/palindromic-substrings/question

/**
 * 1. Assumptions
 *  1. case sensative and no spaces
 *  2. palindrome counts if content is the same but uses different indexes to create
 * 
 * 2. input validation
 *  1. s
 *      - typeof s === 'string'
 *      - s.length >= 0
 *      - regex = '\^[a-z]*$\'
 * 
 * 3. time and space constraints
 *  BTTC: O(n^2)
 *  Space: O(n)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if s.length <= 1: return s.length
 * 
 *  test cases
 *  1. no palindromes expect for individual characters
 *      inputs
 *          s = 'abc'
 *      expected output
 *          3
 *  2. s has no same characters adjacent
 *      inputs
 *          s = 'abcbe'
 *      expected output
 *          6
 *  3. s has same characters adjacent
 *      inputs
 *          s = 'aaa'
 *      expected output
 *          6
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  1. Method 1
 *      For each character, build palindromes starting with 1 character (odd center) and if i and i + 1 characters are the same use i and i + 1 (even center)
 *      Time: O(n^2)
 *      Space: O(1)
 *  2. Method 2
 *      2D dp
 *      dp table = 2D array of length s * length *
 *      each time a valid palindrome found in the dp table, +1 count
 * 
 *      Time: O(n^2)
 *      Space: O(n^2)
 * 
 * 7. algos
 *  - 2 pointers
 *  - 2d DP
 * 
 * 8. data structures
 *  - Arrays
 * 
 * 9. complexity
 *  2 pointers
 *      Time: O(n^2)
 *      Space: O(1)
 *  2D dp
 *      Time: O(n^2)
 *      Space: O(n^2) 
 * 
 */

class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        if (s.length <= 1) {
            return s.length
        }

        // return this.twoPointer(s)
        return this.dpSoln(s)
    }

    dpSoln(s) {
        const n = s.length
        const table = new Array(n).fill().map((e) => new Array(n).fill(false))

        let count = 0
        for (let r = n - 1; r >= 0; r --) {
            table[r][r] = true
            count += 1
            for (let c = n - 1; c > r; c --) {
                if (s[c] === s[r] && (table[r+1][c-1] || table[r][c-1])) {
                    table[r][c] = true
                    count += 1
                }
            }
        }

        return count
    }

    twoPointer(s) {
        let count = 0

        for (let i = 0; i < s.length; i ++) {
            count += this.countPalin(s, i)
        }

        return count
    }

    countPalin(s, i) {
        let count = 0

        // odd center start
        let l = i
        let r = i
        while (l >= 0 && r < s.length) {
            if (s[l] === s[r]) {
                count += 1
                l -= 1
                r += 1
            } else {
                break
            }
        }

        l = i
        r = i + 1
        while (l >= 0 && r < s.length) {
            if (s[l] === s[r]) {
                count += 1
                l -= 1
                r += 1
            } else {
                break
            }
        }

        return count
    }
}
