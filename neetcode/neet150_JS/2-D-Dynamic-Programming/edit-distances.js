// https://neetcode.io/problems/edit-distance

class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {number}
     */
    minDistance(word1, word2) {
        // return this.dfsNoDP(0, 0, word1, word2)

        const dp = Array(word1.length).fill().map((e) => {return Array(word2.length).fill(Number.POSITIVE_INFINITY)})
        return this.dfsDP(0, 0, word1, word2, dp)
    }

    dfsDP(i, j, word1, word2, dp) {
        if (i === word1.length) {
            return word2.length - j
        }
        if (j === word2.length) {
            return word1.length - i
        }
        if (dp[i][j] !== Number.POSITIVE_INFINITY) {
            console.log(dp[i][j])
            return dp[i][j]
        }

        if (word1[i] === word2[j]) {
            return this.dfsDP(i + 1, j + 1, word1, word2, dp)
        }

        let res = Math.min(this.dfsDP(i, j + 1, word1, word2, dp), this.dfsDP(i + 1, j, word1, word2, dp), this.dfsDP(i + 1, j + 1, word1, word2, dp))
        dp[i][j] = res + 1
        return dp[i][j]
    }

    dfsNoDP(i, j, word1, word2) {
        if (i === word1.length) {
            return word2.length - j
        }
        if (j === word2.length) {
            return word1.length - i
        }

        if (word1[i] === word2[j]) {
            return this.dfsNoDP(i + 1, j + 1, word1, word2)
        }

        let res = Math.min(this.dfsNoDP(i, j + 1, word1, word2), this.dfsNoDP(i + 1, j, word1, word2), this.dfsNoDP(i + 1, j + 1, word1, word2))
        return res + 1
    }
}
