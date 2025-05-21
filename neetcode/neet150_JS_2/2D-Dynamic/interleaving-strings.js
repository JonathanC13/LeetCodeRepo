// https://neetcode.io/problems/interleaving-string

/*
recursive dfs
    base case 1: if k === s3.length: return i === s1.length && j === s2.length
    
    2 options. 
    1. if i < s1.length and s1 at i === s3 at k
        with1 = continue interleave, i + 1, k + 1
    2. if j < s2.length and s2 at j === s3 at k and 
        with2 = continue interleave, j + 1, k + 1

    return with1 || with2

- Time: O(2^(i + j))
- Space: O(i + j)

* with memo to reduce time complexity
create Map to hold:
    key: i,j,k
    value: true/false if can interleave

- Time: O(i * j)
- Space: O(i * j)
*/

class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @param {string} s3
     * @return {boolean}
     */
    isInterleave(s1, s2, s3) {
        if (s3.length !== s1.length + s2.length) {
            return false
        }

        // return this.dfs(s1, s2, s3, 0, 0, 0)
        const map = new Map()
        const res = this.dfsMemo(s1, s2, s3, 0, 0, 0, map)
        console.log(map)
        return res
    }

    dfsMemo(s1, s2, s3, i, j, k, memo) {
        if (k === s3.length) {
            return i === s1.length && j === s2.length
        }
        const key = `{${i},${j},${k}}`
        if (memo.has(key)) {
            console.log(key)
            return memo.get(key)
        }

        let with1 = false
        let with2 = false

        if (i < s1.length && s1[i] === s3[k]) {
            with1 = this.dfsMemo(s1, s2, s3, i + 1, j, k + 1, memo)
        }
        if (j < s2.length && s2[j] === s3[k]) {
            with2 = this.dfsMemo(s1, s2, s3, i, j + 1, k + 1, memo)
        }

        memo.set(key, with1 || with2)
        return memo.get(key)
    }

    dfs(s1, s2, s3, i, j, k) {
        if (k === s3.length) {
            return i === s1.length && j === s2.length
        }

        let with1 = false
        let with2 = false

        if (i < s1.length && s1[i] === s3[k]) {
            with1 = this.dfs(s1, s2, s3, i + 1, j, k + 1)
        }
        if (j < s2.length && s2[j] === s3[k]) {
            with2 = this.dfs(s1, s2, s3, i, j + 1, k + 1)
        }

        return with1 || with2
    }
}
