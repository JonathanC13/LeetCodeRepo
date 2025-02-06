// https://leetcode.com/problems/word-break-ii/

/*
Memoization to hold the if true, the upcoming combo

- Time: O(2 ^ n)
- Space: O(n)
*/


/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    if (s.length === 0) {
        return false
    }
    wordDict = new Set(wordDict)
    const res = []
    const sent = []
    const memo = new Set()
    const can = breaker(s, 0, wordDict, sent, res, memo)
    
    return res
};

var breaker = function(s, i, wordDict, sent, res, memo) {
    if (i === s.length) {
        res.push(sent.join(' '))
        return true
    }

    // if (memo.has(s.slice(i, s.length))) {
    //     return false
    // }

    for (let j = s.length - 1; j >= i; j --) {
        // console.log(s.slice(i, j + 1))
        if (wordDict.has(s.slice(i, j + 1))) {
            sent.push(s.slice(i, j + 1))
            breaker(s, j + 1, wordDict, sent, res, memo)
            sent.pop()
            //memo.add(s.slice(i, s.length))
        }
    }

    return false
}