// https://leetcode.com/problems/edit-distance/?envType=study-plan-v2&envId=leetcode-75

/*
recursive dfs
    base case 1: if i === word1.length && j === word2.length: return 0
    base case 2: if i >= word1.length: return word2.length - j  // since it would take this many inserts to convert to word2
    base case 3: if j >= word2.length: return word1.length - i  // since it would take this many deletes to convert to word2

    if word1 at i === word2 at j
        return dfs(word1, word2, i + 1, j + 1)

    // otherwise, try the operations and one will be the min path
    ins = dfs(word1, word2, i, j + 1)
    del = dfs(word1, word2, i + 1, j)
    repl = dfs(word1, word2, i + 1, j + 1)

    return min(ins, del, repl) + 1

- Time: O(3^n)  // n = length of word1
- Space: O(n)

* Use memo to reduce time complexity
2D array where the each cell is the min operations to convert word1 to word2
- Time: O(r * c)
- Space: O(r * c)
*/

const dfs = (word1, word2, i, j) => {
    if (i === word1.length && j === word2.length) {
        return 0
    }
    if (i >= word1.length) {
        return word2.length - j
    }
    if (j >= word2.length) {
        return word1.length - i
    }

    if (word1[i] === word2[j]) {
        return dfs(word1, word2, i + 1, j + 1) 
    }

    const ins = dfs(word1, word2, i, j + 1)
    const del = dfs(word1, word2, i + 1, j)
    const repl = dfs(word1, word2, i + 1, j + 1)

    return Math.min(ins, del, repl) + 1
}

const dfsMemo = (word1, word2, i, j, memo) => {
    if (i === word1.length && j === word2.length) {
        return 0
    }
    if (i >= word1.length) {
        return word2.length - j
    }
    if (j >= word2.length) {
        return word1.length - i
    }
    if (memo[i][j] !== -1) {
        return memo[i][j]
    }

    if (word1[i] === word2[j]) {
        memo[i][j] = dfsMemo(word1, word2, i + 1, j + 1, memo)
        return memo[i][j]
    }

    const ins = dfsMemo(word1, word2, i, j + 1, memo)
    const del = dfsMemo(word1, word2, i + 1, j, memo)
    const repl = dfsMemo(word1, word2, i + 1, j + 1, memo)

    memo[i][j] = Math.min(ins, del, repl) + 1
    return memo[i][j]
}

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    // return dfs(word1, word2, 0, 0)
    const memo = Array.from(new Array(word1.length), (e) => new Array(word2.length).fill(-1))
    const res = dfsMemo(word1, word2, 0, 0, memo)
    console.log(memo)
    return res
};