// https://neetcode.io/problems/word-break

/*
DFS RECURSIVE
    if (i === s.length) {
        return true
    }

    iterate each word in the wordDict
        if (curr i + word.length <= s.length && word === s.slice(i, i + word.length)) {
            // possible path to end
            if (this.dfs(s, i + word.length)) {
                return true // if a path found, no need to continue with other paths propagate true
            }
        }

    return false

- Time: O(t * m^n), n = length of s. m = num of words in wordDict, t = max length word in wordDict. each word(m) has n starting index options.
- Space: O(n)

Reduce time complexity with dynamic programming memoization to store the results of already calculated paths.
create dp = new Array(s.length).fill(null)
// if changed to false, means no path to end with any of the words in wordDict from the current index
// if true it means there is a path to the end, don't need to change it since returning fully out.

- Time: O(m * n * t)
*/

class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {

        const dp = new Array(s.length).fill(null)
        return this.dfs(s, 0, wordDict, dp)
    }

    dfs(s, i, wordDict, dp) {
        if (i === s.length) {
            return true
        }
        if (dp[i] !== null) {
            return dp[i]
        }

        for (let j = 0; j < wordDict.length; j ++) {
            if (i + wordDict[j].length <= s.length && wordDict[j] === s.slice(i, i + wordDict[j].length)) {
                if (this.dfs(s, i + wordDict[j].length, wordDict, dp)) {
                    dp[i] = true
                    return true
                }
            }
        }

        dp[i] = false
        return dp[i]
    }
}
