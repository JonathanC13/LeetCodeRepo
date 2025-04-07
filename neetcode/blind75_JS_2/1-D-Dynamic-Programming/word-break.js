// https://neetcode.io/problems/word-break

/*
recursive dfs to the end so start matching words from i to end. If a word completes to the end of String s, return true

- Time: O(w^n)    n = s.length, w = w.length.
- Space: O(n)   

reduce time with memo, if at an index there was already a determine path to the end save true

- Time: O(n * w)
- Space: O(n)
*/

class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        if (s.length === 0) {
            return true
        }

        const memo = new Array(s.length).fill(null)
        return this.dfs(s, wordDict, 0, memo)
    }

    dfs(s, wordDict, i, memo) {
        if (i === s.length) {
            return true
        }
        if (memo[i] !== null) {
            return memo[i]
        }

        this.dfs(s, wordDict, i + 1, memo)

        // check each word if can match from the starting index i
        for (let w = 0; w < wordDict.length; w ++) {
            // console.log(i + wordDict[w].length <= s.length ? s.slice(i, i + wordDict[w].length) : '')
            if (i + wordDict[w].length <= s.length && s.slice(i, i + wordDict[w].length) === wordDict[w]) {
                if (this.dfs(s, wordDict, i + wordDict[w].length, memo)) {
                    memo[i] = true
                    return memo[i]
                }
            }
        }

        memo[i] = false
        return memo[i]
    }
}
