// https://leetcode.com/problems/edit-distance/?envType=study-plan-v2&envId=top-interview-150

/*
rec
    base case 1: if (index of word1 === word1.length)
        if (index of word2 < word2.length) {
            // the remaining operations can be 'delete'
            return word2.length - index of word2
        } else {
            return 0
        }

    base case 2: if (index of word2 === word2.length)
        if (index of word1 < word1.length) {
            // the remaining operations can be 'delete'
            return word1.length - index of word1
        } else {
            return 0
        }
    
    base case 3: if memo[i][j] !== -1
        return memo[i][j]

    if (word1 at i === word2 at j)
        return next chars, i + 1, j + 1

    minEdit = pos infin
    insert = i, j + 1
    delete = i + 1, j
    replace = i + 1, j + 1

    minEdit = min(insert, delete, replace) + 1  // 1 for this operation
    memo[i][j] = minEdit
    return minEdit

- Time: O(word1.length * word2.length) // without dp. Time: O(3^(word1.length + word2.length)) each 
- Space: O(word1.length * word2.lengt)
*/

const dfs = function(word1, word2, i, j, memo) {
    if (i === word1.length) {
        if (j < word2.length) {
            return word2.length - j
        } else {
            return 0
        }
    }

    if (j === word2.length) {
        if (i < word1.length) {
            return word1.length - i
        } else {
            return 0
        }
    }

    if (memo[i][j] !== -1) {
        // console.log('hit')
        return memo[i][j]
    }

    if (word1[i] === word2[j]) {
        return dfs(word1, word2, i + 1, j + 1, memo)
    }

    let minEdit = Number.POSITIVE_INFINITY
    const ins = dfs(word1, word2, i, j + 1, memo)
    const del = dfs(word1, word2, i + 1, j, memo)
    const rep = dfs(word1, word2, i + 1, j + 1, memo)
    minEdit = Math.min(ins, del, rep) + 1
    memo[i][j] = minEdit
    return minEdit
}

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const memo = new Array(word1.length).fill().map((e) => new Array(word2.length).fill(-1))

    return dfs(word1, word2, 0, 0, memo)
};