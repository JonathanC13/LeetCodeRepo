// https://neetcode.io/problems/regular-expression-matching

/*
some tests:
1.
    s = 'a'
    p = '.b*'
    res = true

2.
    s = 'abb'
    p = '.bbbb'
    res = false

* recursive dfs
    base case 1: if j === p.length: return i === s.length  // when the express match p is complete, check if String s has any remaing characters. If true then it has not fully matched the expression, return false 
    base case 2: if i > s.length || j > p.length: return false

    check if j + 1 is star
        get match result if 0 of the preceeding char matched. i, j + 2. // j + 2 to skip over star

        get match result if more. i + 1, j  // j stays the same to keep matching this char

    else
        check if chars match. '.' or exact

    return false
- Time: O(2^(m + n))   //    m = s.length, n = s.length // 2^ because match or not match for *
- Space: O(m + n)

* reduce time complexity with 2D dp top down with memo
memo is a 2D array
    rows = s.length + 1 // + 1 since expression String p could still be matching while String s is at the end.
    cols = p.length
    fill with null
    * each cell represents if the String s from i (row) matches the expression Strin p from j (col) onward to the end.

- Time: O(m * n)
- Space: O(m * n)
*/

class Solution {
    /**
     * @param {string} s
     * @param {string} p
     * @return {boolean}
     */
    isMatch(s, p) {
        const memo = Array.from(new Array(s.length + 1), (e) => new Array(p.length).fill(null))
        const res = this.dfs(s, p, 0, 0, memo)
        console.log(memo)
        return res
    }

    dfs(s, p, i, j, memo) {
        if (j === p.length) {
            return i === s.length
        }
        if (i > s.length || j > p.length) {
            return false
        }
        if (memo[i][j] !== null) {
            console.log('hit ', i, j)
            return memo[i][j]
        }
        
        if (j + 1 < p.length && p[j + 1] === '*') {
            const zero = this.dfs(s, p, i, j + 2, memo)

            let more = false
            if (i < s.length && (p[j] === '.' || s[i] === p[j])) {
                more = this.dfs(s, p, i + 1, j, memo)
            }
            memo[i][j] = zero || more
            // return zero || more
        } else if (i < s.length && (p[j] === '.' || s[i] === p[j])) {
            memo[i][j] = this.dfs(s, p, i + 1, j + 1, memo)
        } else {
            memo[i][j] = false
        }
        
        return memo[i][j]
    }
}
