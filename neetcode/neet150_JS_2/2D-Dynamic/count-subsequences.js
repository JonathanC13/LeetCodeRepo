// https://neetcode.io/problems/count-subsequences

/*
* recursive dfs
    base case 1: if (j === t.length): return 1  // it means that there were matches for all chars in t
    base case 2: if (i === s.length): return 0  // no more chars to match into t at j

    // 2 paths
    let distinct = 0
    1. check if s at i === t at j
        if true
            paths = continue path with i + 1, j + 1

    2. paths += try path with i + 1 and j

    return paths

- Time: O(2^(s.length)) // since one entry point, 1 * 2^(s.length). only s.length since only searching String s, while the char in String t at index does not move until satisfied.
- Space: O(max length(s.length))

* reduce the time complexity with dynamic programming, top down with memo
memo = 2D array
    rows = s.length
    cols = t.length
    fill with -1
    * each cell stores the subsequences made with the path from i, j onward.

- Time: O(s * t)
- Space: O(s * t)
*/

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    numDistinct(s, t) {
        if (s.length < t.length) {
            return 0
        }
        const memo = Array.from(new Array(s.length), (e) => new Array(t.length).fill(-1))
        const res = this.dfs(s, t, 0, 0, memo)
        console.log(memo)
        return res
    }

    dfs(s, t, i, j, memo) {
        if (j === t.length) {
            return 1
        }
        if (i === s.length) {
            return 0
        }
        if (memo[i][j] !== -1) {
            return memo[i][j]
        }

        let paths = 0
        if (s[i] === t[j]) {
            paths += this.dfs(s, t, i + 1, j + 1, memo)
        }

        paths += this.dfs(s, t, i + 1, j, memo)

        memo[i][j] = paths
        return paths
    }
}
