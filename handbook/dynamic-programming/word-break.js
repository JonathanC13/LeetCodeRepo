// https://leetcode.com/problems/word-break/description/

/**
1. Assumptions
    1. Given words in dictionary can be used multiple times. If only once, each "path" maintains the Map of words allowed to choose from going forward.

2. input validation
    1. s
        - s instanceof String
        - s.length >= 0
        - regex = '/^[a-z]*$'
    2. wordDict
        - wordDict instanceof Array
        - wordDict.length >= 0
        - each element is a String of regex = '/[a-z]*$/'

3. time and space constraints
    BTTC: O(n * m)  // n = s.length, m = wordDict.length
    Space: O(n * m)

4. edge cases and some test cases
    edge cases
    1. if s.length === 0: return true
    2. if wordDict.length === 0: return false

    test cases
    1. true
        inputs
            s = "leetcode", wordDict = ["leet","code"]
        expected output
            true
    2. false
        inputs
            s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
        expected output
            false

5. visualize by drawing and manually solve
6. break into subproblems
    - first solve with basic recursive backtracking
        base case 1: if got to end successfully
        if (i === s.length) {
            return true
        }

        base case 2: overshoot
        if (i > s.length) {
            return false
        }

        // iterate the words in wordDict to find words that fit.
        for (const word of wordDict) {
            if (i + word.length <= s.length && word === s.slice(i, i + word.length) && rec(i + word.length, ...) === true) {
                return true
            }
        }

        return false    // could not continue with any of the words

        Time: O(n * m^n)    // each char in s *, m words ^ n paths

    Reduce time with dynamic programming memoization
        create Array for memoization
            - index = character index in String s
            - fill with null
            - each cell represents if at that char in s (row) can a word in wordDict (col) match there.

7. algos
    - Recursive backtracking
    - dp memoization

8. data structures
    - Arrays

9. complexity
    - Time: O(n * m)
    - Space: O(n * m)
 */

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    if (s.length === 0) {
        return true
    }
    if (wordDict.length === 0) {
        return false
    }

    const combo = new Array()

    const rec = (s, i, wordDict, combo, memo) => {
        // if (i === s.length) {
        //     return true
        // }
        if (i > s.length) {
            return false
        }
        if (memo[i] !== null) {
            // console.log('hit', i)
            return memo[i]
        }

        for (const word of wordDict) {
            combo.push(word)
            if (i + word.length <= s.length && word === s.slice(i, i + word.length) && rec(s, i + word.length, wordDict, combo, memo) === true) {
                memo[i] = true
                return memo[i]
            }
            combo.pop()
        }

        memo[i] = false
        return memo[i]
    }

    const memo = new Array(s.length + 1).fill(null)
    memo[s.length] = true
    const res = rec(s, 0, wordDict, combo, memo)
    // console.log(memo)
    // console.log(combo)
    return res
};