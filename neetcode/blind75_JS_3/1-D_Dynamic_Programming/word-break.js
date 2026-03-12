// https://neetcode.io/problems/word-break/question

/**
 * 1. Assumptions
 *  1. Given:
 *      1. Can use words unlimited number of times  // if limited, use visited if 1 or Map if > 1
 *      2. all words unique
 * 
 * 2. input validation  
 *  1. s
 *      - typeof s === 'string'
 *  2. wordDict
 *      - wordDict instanceof Array
 *      - wordDict.length >= 0
 *      - wordDict element's are String
 * 
 * 3. time and space constraints
 *  BTTC: O(m * n)  // m = s.length, n = wordDict.length
 *  Space: O(m)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. wordDict.length === 0: return s.length === 0
 * 
 *  test cases
 *  1. can word break, use a word more than once
 *      inputs
 *          s = applebananaapple
 *          wordDict = [apple, banana]
 *      expected output
 *          true
 *  2. cannot word break
 *      inputs
 *          s = applebananaapple
 *          wordDict = [apple, banan]
 *      expected output
 *          false
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  recursive backtracking to attempt to match word with slice of s
 *  Add DP memoization with Array of length s.length where each index is whether there is a combination of words that can reach the end.
 *      base case 1: got to end
 *          if i === s.length: return true
 *      base case 2: if memo[i] !== null: return memo[i]
 * 
 *      // if need min words to end, memo indexes are Numbers for the # of words to end
 *      // minWords = pos infin and memo save the minWords after checking every word
 * 
 *      iterate each word
 *          if (i + current word length <= s.length AND word === s.slice(i, i + word.length) AND rec() returns true indicating can get to end) {
 *              // can return true right away since just need one to match that gets to end
 *              memo[i] = true
 *              return true
 *          }
 * 
 *      memo[i] = false
 *      return false
 * 
 *  Without memo: Time: O(m * n^m)  // each char in s *, n words ^ continuing m remaining chars
 *  With memo: Time: O(m * n)   // each char in s *, trys n words
 * 
 * 7. algos
 *  - recursive backtracking with 1 DP memo improvement
 * 
 * 8. data structures
 *  - Arrays
 * 
 * 9. complexity
 *  Time: O(m * n)
 *  Space: O(m)
 */

class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        if (wordDict.length === 0) {
            return s.length === 0
        }

        const memo = new Array(s.length + 1).fill(null)
        memo[s.length] = true
        this.rec(s, wordDict, 0, memo)

        return memo[0]
    }

    rec(s, wordDict, i, memo) {
        if (memo[i] !== null) {
            return memo[i]
        }

        for (let j = 0; j < wordDict.length; j ++) {
            const w = wordDict[j]
            if (i + w.length <= s.length && w === s.slice(i, i + w.length) && this.rec(s, wordDict, i + w.length, memo)) {
                memo[i] = true
                return true
            }
        }

        memo[i] = false
        return false
    }
}
