// https://neetcode.io/problems/count-paths

class Solution {
    /*
    Time: O(m * n)
    Space: O(m * n)
    */

    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        const dpTable = Array(m + 1).fill().map((e) => {return Array(n + 1).fill(0)})
        dpTable[1][1] = 1

        // to get the number of unique paths to a certain coordinate
        //, since you are only allowed to move right or down,
        // it is the # of unique paths to get to the top tile + # of unique paths to get to the left tile

        for (let r = 1; r <= m; r ++) {
            for (let c = 1; c <= n; c ++){
                dpTable[r][c] += dpTable[r - 1][c] + dpTable[r][c - 1]
            }
        }
        return dpTable[m][n]
    }
}
