// https://neetcode.io/problems/word-break

/*
recursive backtracking with memo
- rec backtracking
    2 paths:
        1. don't use the current char to match words in the wordDict. To get to the end first and then pop to allow matching of substrings starting from end.
        2. iterate the wordDict to try to match
            if rec call returns true, then mark true and return true. Only need one match to complete a path since words can be used unlimited number of times.
            ** if limited number of times
                1. don't return and go through all the words then save in the memo the remaining available words to use on the path.

    base cases:
        1. if i === s.length. return true // found word that matches substring from start char to end
        2. if memo[i] !== null: return memo[i]
            ** if limited uses:
                1. memo[i] === true && if the word used does exists then the path can be completed ret true, else return false
- memo
    Array of length s.length. For each index is true/false and represents if that char has a path to the end of s.length with a word from wordDict

- Time: O(n * w)    // n = s.length, w = w.wordDict.length
- Space: O(n)
*/

class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        const memo = new Array(s.length).fill(null)

        this.dfsUnlimited(s, 0, wordDict, memo)
        return memo[0]

        // this.dfsLimitedOne(s, 0, wordDict, memo, '')
        // console.log(memo)
        // return memo[0][0]
        
    }

    dfsUnlimited(s, i, wordDict, memo) {
        if (i === s.length) {
            return true
        }
        if (memo[i] !== null) {
            return memo[i]
        }

        this.dfsUnlimited(s, i + 1, wordDict, memo)

        for (let w = 0; w < wordDict.length; w ++) {
            const word = wordDict[w]

            if (i + word.length <= s.length && s.slice(i, i + word.length) === word) {
                if (this.dfsUnlimited(s, i + word.length, wordDict, memo)) {
                    memo[i] = true
                    return true
                }
            }
        }

        memo[i] = false
        return false
    }

    dfsLimitedOne(s, i, wordDict, memo, wordUsed) {
        if (i === s.length) {
            return true
        }
        if (memo[i] !== null) {
            if (memo[i][0]) {
                if (memo[i][1].has(wordUsed)) {
                    return true
                } else {
                    return false
                }
            }
            return memo[i][0]
        }

        this.dfsLimitedOne(s, i + 1, wordDict, memo, '')

        memo[i] = [false, new Set(wordDict)]
        for (let w = 0; w < wordDict.length; w ++) {
            const word = wordDict[w]

            if (i + word.length <= s.length && s.slice(i, i + word.length) === word) {
                if (this.dfsLimitedOne(s, i + word.length, wordDict, memo, word)) {
                    memo[i][0] = true
                    memo[i][1].delete(word) // cannot be used on this path for any connecting
                }
            }
        }

        return memo[i][0]
    }
}
