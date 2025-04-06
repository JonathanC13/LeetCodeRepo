// https://neetcode.io/problems/decode-ways

/*
[1, 26]

edge case 1: if s.length === 0: return 0

recursive dfs for backtrack to start at the end
    try to take 1 and 2 digits, if valid to get to the end, return 1 so it adds to the count

- Time: O(2^n)
- Space: O(n)

reduce Time with dynamic programming memo
create Map
    key = index in the String s
    value = how many decode ways to the end

- Time: O(n)
- Space: O(n)
*/

class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        if (s.length === 0) {
            return 0
        }

        const memo = new Map()

        const decodes = []
        const res = this.dfs(s, 0, [], decodes, memo)
        console.log(decodes)    // won't contain the paths if use memo
        return res
    }

    dfs(s, i, path, decodes, memo) {
        if (i >= s.length) {
            decodes.push([...path])
            return 1
        }

        if (memo.has(i)) {
            return memo.get(i)
        }

        let count = 0
        // try to take 1 char
        if (Number(s[i]) >= 1 && Number(s[i]) <= 9) {
            path.push(s[i])
            count += this.dfs(s, i + 1, path, decodes, memo)
            path.pop()
        }

        if (i + 1 < s.length && (s[i] === '1' || (s[i] === '2' && Number(s[i + 1]) >= 0 && Number(s[i + 1]) <= 6))) {
            path.push(s[i] + s[i + 1])
            count += this.dfs(s, i + 2, path, decodes, memo)
            path.pop()
        }

        memo.set(i, count)
        return memo.get(i)
    }
}
