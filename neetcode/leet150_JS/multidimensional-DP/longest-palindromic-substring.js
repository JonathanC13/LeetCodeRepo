// https://leetcode.com/problems/longest-palindromic-substring/?envType=study-plan-v2&envId=top-interview-150

/**
create memo of dimensions s.length * s.length fill with False

longestPalin = ''

iterate rows from end to 0
    memo[r][r] = True
    iterate cols from end to >= row    // from end since even middle needs to be evaluated last, if start from beginning memo[r][c-1] will be set incorrectly
        if r === c || (s[c] === s[r] && (memo[r + 1][c - 1] === true || memo[r][c-1] === true))     // if memo[r + 1][c - 1] === true, it means a palindrome exists from s[r] to s[c] with ODD middle. memo[r][c-1] for even middle e.g. 'abbc'
            memo[r][c] = True
            if c - r + 1 > longestPalin.length
                longestPalin = s.slice(r, c + 1)

- Time: O(!s.len)
- Space: O(s.len * s.len)
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length === 0) {
        return ''
    }
    const len = s.length
    const dp = new Array(len).fill().map((e) => new Array(len).fill(false))
    let longest = ''

    for (let r = len - 1; r >= 0; r --) {
        dp[r][r] = true
        for (let c = len - 1; c >= r; c --) {
            if (r === c || (s[r] === s[c] && (dp[r + 1][c - 1] === true || dp[r][c-1] === true))) {
                dp[r][c] = true
                if (c - r + 1 > longest.length) {
                    longest = s.slice(r, c + 1)
                }
            }
        }
    }
    //console.log(dp)

    return longest
};