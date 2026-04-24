// https://neetcode.io/problems/palindrome-partitioning/question

/**
 * 1. Assumptions
 *  1. lowercase English characters
 * 
 * 2. input validation
 *  - typeof s === 'string'
 * 
 * 3. time and space constraints
 *  BTTC: O(n * 2^n)    // at each index *, 2 paths for each index; 1. current single value as palindrome, 2. extend substring to check if palindrome.
 *  Space: O(n)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if s === 0: return []
 * 
 *  test cases
 *  1. there is a substring that is a palindrome
 *      inputs
 *          s = 'aab'
 *      expected output
 *          [[a,a,b], [aa,b]]
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  recursive backtracking for each index to continue path with new combinations forward
 *      base case 1: if i === s.length; no more characters to use and go here due to could partition entire s into palindrome substrings
 *          res.push([...partitioned])
 *          return
 * 
 *      2 paths
 *      1. character by itself is a palindrome
 *      2. try to extend forward
 * 
 *      l = i
 *      r = i
 *      while (r < s.length) // extend until end
 *          if (isPalin(s, l, r))
 *              partitioned.push(s.slice(l, r + 1))
 *              this.rec(..., r + 1)
 *              partitioned.pop()
 *          
 *          r += 1
 * 
 *      return
 * 
 * 7. algos
 *  - recursive backtracking
 * 
 * 8. data structures
 *  - Array
 * 
 * 9. complexity
 *  Time: O(n * 2^n)
 *  Space: O(n)
 * 
 */

class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        if (s.length === 0) {
            return []
        }

        const res = new Array()
        this.rec(s, 0, new Array(), res)
        return res
    }

    isPalin(s, l, r) {
        while (l < r) {
            if (s[l] !== s[r]) {
                return false
            }
            l += 1
            r -= 1
        }
        return true
    }

    rec(s, i, partitioned, res) {
        if (i === s.length) {
            res.push([...partitioned])
            return
        }

        let l = i
        let r = i
        while (r < s.length) {
            if (this.isPalin(s, l, r)) {
                partitioned.push(s.slice(l, r + 1))
                this.rec(s, r + 1, partitioned, res)
                partitioned.pop()
            }
            r += 1
        }

        return
    }
}
