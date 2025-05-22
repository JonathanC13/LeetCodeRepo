// https://neetcode.io/problems/edit-distance

/*
* recursive dfs
    base case 1: if i === word1.length: return 0 if j === word2.length else word2.length - j    // if no more chars in word1, the rest of word2 needs to be inserted.
    base case 2: if j === word2.length: return 0 if i === word1.length else word1.length - i    // if no more chars in word2, the rest of word1 needs to be deleted.

    4 paths
    1. if word1 at i === word2 at j. return = safely move on, i + 1, j + 1

    2. ins = try path where insert the correct char into word 1 at i to match the one in word2 at j. 
        i       i stays the same because the 'added' char is before it.
        j + 1,  since 'added' char matches so move on.

    3. del = try path where the char in word1 at i is deleted
        i + 1,  deleted, so move on
        j       j stays the same since still trying to find a match

    4. rep = try path where the char in word1 at i is replaced with the correct char
        i + 1   since now match, move on
        j + 1   matched, move on

    return Math.min(ins, del, rep)

- Time: O(3^(word1.length + word2.length))  // + since need to eval the char at i and j independently
- Space: O(word1.length + word2.length)

* reduce the time complexity with dp. top down with memo
memo = 2D array
    rows = word1.length
    cols = word2.length
    fill with -1
    * the cells reresent the min operations to satisfy word2 from i, j onward to end

- Time: O(word1.length * word2.length)
- Space: O(word1.length * word2.length)
*/

class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {number}
     */
    minDistance(word1, word2) {
        const memo = new Array(word1.length).fill().map((e) => new Array(word2.length).fill(-1))
        const res = this.dfs(word1, word2, 0, 0, memo)
        console.log(memo)
        return res
    }

    dfs(word1, word2, i, j, memo) {
        if (i === word1.length) {
            return j === word2.length ? 0 : word2.length - j
        }
        if (j === word2.length) {
            return i === word1.length ? 0 : word1.length - i
        }
        if (memo[i][j] !== -1) {
            return memo[i][j]
        }

        if (word1[i] === word2[j]) {
            return this.dfs(word1, word2, i + 1, j + 1, memo)
        }

        const ins = 1 + this.dfs(word1, word2, i, j + 1, memo)
        const del = 1 + this.dfs(word1, word2, i + 1, j, memo)
        const rep = 1 + this.dfs(word1, word2, i + 1, j + 1, memo)

        memo[i][j] = Math.min(ins, del, rep)
        return memo[i][j]
    }
}
