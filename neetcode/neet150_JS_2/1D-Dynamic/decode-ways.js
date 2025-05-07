// https://neetcode.io/problems/decode-ways

/*

recursive backtracking to check if path can reach end i === s.length and use 1D dp with memo to reduce time complexity by saving already calculated decoded parts.

- Time: O(n). 2^n each char has 2 paths, take 1 char to decode or 2 chars to decode. With DP memo reduces to O(n)
- Space: O(n)
*/

class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {

        const memo = new Array(s.length).fill(-1)
        this.dfs(s, 0, memo)
        console.log(memo)
        return memo[0] === -1 ? 0 : memo[0]
    }

    dfs(s, i, memo) {
        if (i >= s.length) {
            return 1
        }
        if (memo[i] !== -1) {
            return memo[i]
        }
        if (s[i] === '0') {
            return 0    // cannot take a single or two chars if starts with '0'
        }

        const one = this.dfs(s, i + 1, memo)
        let two = 0
        if (i + 1 < s.length && 
            (s[i] === '1' ||
            s[i] === '2' && Number(s[i + 1]) <= 6)
        ) {
            two = this.dfs(s, i + 2, memo)
        }

        memo[i] = one + two
        return memo[i]
    }
}
