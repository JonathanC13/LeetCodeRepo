// https://leetcode.com/problems/word-break/description/?envType=study-plan-v2&envId=top-interview-150

/*

Rec backtracking
- Time: O(w^n)  //n = s.length, w = number of words. at an index in String s, has the choices of w to try to match
- Space: O(n)   

With DP
- Time: O(n)
- Space: O(n)

get the longest String in wordDict

memo length of s.length + 1 fill with -1, memo[s.length] = true

rec dfs, start with i at s.length - 1
    - base case 1: if (i > s.length): return false
    - base case 2: if (memo[i] !== -1) {
        return memo[i]
    }

    traverse to end of String s, so the backtracking continues at i trying to find path to end.

    // at this index of String s, iterate the words in wordDict and check if a match
    // If match, continue path
    for (let j = 0; j < wordDict.length; j ++) {
        if (i + wordDict[j].length <= s.length && s.slice(i, i + wordDict[j].length) === wordDict[j]) {
            if (dfs(s, wordDict, i + wordDict[j], memo) === true) {
                memo[i] = true
                break
            }
        }
    }

    return memo[i]
*/

const dfs = (s, wordDict, i, memo) => {
    if (i > s.length) {
        return false
    }
    if (memo[i] !== -1) {
        return memo[i]
    }

    // traverse to end to start backtracking
    dfs(s, wordDict, i + 1, memo)

    memo[i] = false
    for (let j = 0; j < wordDict.length; j ++) {
        const w = wordDict[j]

        if (i + w.length <= s.length && s.slice(i, i + w.length) === w) {
            if (dfs(s, wordDict, i + w.length, memo) === true) {
                memo[i] = true
                break
            } 
        }
    }

    return memo[i]
}

const dfsLimitedOne = (s, wordDict, i, memo, wordUsed) => {
    if (i > s.length) {
        return [false, new Set()]
    }
    if (memo[i] !== -1) {
        if (memo[i][0] === true && memo[i][1].has(wordUsed)) {
            return memo[i]
        }
        return [false, new Set()]
    }

    // traverse to end to start backtracking
    dfsLimitedOne(s, wordDict, i + 1, memo, '')

    memo[i] = [false, new Set()]    // each will hold [can break word, the words availabe to get to this index]
    for (let j = 0; j < wordDict.length; j ++) {
        const w = wordDict[j]

        if (i + w.length <= s.length && s.slice(i, i + w.length) === w) {
            const res = dfsLimitedOne(s, wordDict, i + w.length, memo, w)
            console.log(res)
            if (res[0] === true) {
                memo[i] = [true, new Set([...res[1]])]   // shallow copy
                // save forward path words and remove the used word w to get to the next, any path connecting to this index will not be able to use it.
                memo[i][1].delete(w) 
                return memo[i]
            }
        }
    }

    return memo[i]
}

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const memo = new Array(s.length + 1).fill(-1)
    memo[s.length] = true
    return dfs(s, wordDict, 0, memo)

    // memo[s.length] = [true, new Set(wordDict)]
    // const res = dfsLimitedOne(s, wordDict, 0, memo, '')
    // console.log(memo)
    // return res[0]
};