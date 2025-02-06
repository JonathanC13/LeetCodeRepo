// https://leetcode.com/problems/word-break/

/*
- edge case 1: if s.length === 0: return false

since wordDict is an Array, put into a Set for easier access

recursive backtracking
    - base case 1: if i === n   //the index reaches end of String s, this means that String s is made up of words from the wordDict.
        return true

    starting from i iterate j to < n
        if wordDict has s.slice(i, j + 1)
            going forward, found the shortest word from i to j that exists in the wordDict, setup the next recursive call to find the next word
            if (rec(j + 1)) {
                on the backtrack, if it returned true, it means that this was part of the true combination.
                return true
            }
            // on the backtrack, if false then it will continue increasing the current word slice for the next solution.

    return false

- Time: O(n * 2^n). iterate s.length * 2^n  (matches, not match)
- Space: O(n)

TLE, so to adjust start the second pointer at the end of the String s. Find the longer matching word first.
Also use a Set for the memoization, so that re-calculation is avoided. On the backtrack, save the current string from i to s.length and if it exists it means that continuing from this string does not provide a solution so just return.

- Time: O(n * 2^log(n))
- Space: O(n)
*/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    if (s.length === 0) {
        return false
    }
    wordDict = new Set(wordDict)
    const res = []
    const memo = new Set()
    const can = breaker(s, 0, wordDict, res, memo)
    console.log(res)
    return can
};

var breaker = function(s, i, wordDict, res, memo) {
    if (i === s.length) {
        return true
    }

    if (memo.has(s.slice(i, s.length))) {
        return false
    }

    for (let j = s.length - 1; j >= i; j --) {
        // console.log(s.slice(i, j + 1))
        if (wordDict.has(s.slice(i, j + 1))) {
            res.push(s.slice(i, j + 1))
            if (breaker(s, j + 1, wordDict, res, memo)) {
                return true
            }
            res.pop()
            memo.add(s.slice(i, s.length))
        }
    }

    return false
}