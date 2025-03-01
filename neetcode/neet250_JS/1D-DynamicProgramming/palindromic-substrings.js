// https://neetcode.io/problems/palindromic-substrings

/*
evaluate each substring in String s to determine if palindromic
create the window with a left and right pointer

create 2 D dp table, fill with false
count = 0
for let i = s.length - 1; i >= 0; i --
    for let j = i; j < s.length 0; j ++
        if (char[i] === char[j] &&
            (j - i <= 2 || dp[i + 1][j - 1]))

            dp[i][j] = true
            count += 1

return count

- Time: O(n^2)
- Space: O(n^2)
*/

class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        if (s.length < 2) {
            return s.length
        }

        const dp = new Array(s.length).fill().map((e) => {return new Array(s.length).fill(false)})

        let count = 0

        for (let i = s.length - 1; i >= 0; i --) {
            for (let j = i; j < s.length; j ++) {
                if (s[i] === s[j] && (j - i <= 2 || dp[i + 1][j - 1] === true)) {
                    dp[i][j] = true
                    count += 1
                }
            }
        }
        return count
    }
}
