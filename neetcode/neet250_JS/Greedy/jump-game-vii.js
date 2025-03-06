// https://leetcode.com/problems/jump-game-vii/

/*
recursive dfs
    - Time: O(m^n). m = maxJump - minJump
    - Space: O(1)

with DP
    - Time: O(n^2)
    - Space: O(n)

Lee's DP bottom up
    Time: O(n)
    Space: O(n)
*/

/**
 * @param {string} s
 * @param {number} minJump
 * @param {number} maxJump
 * @return {boolean}
 */
var canReach = function(s, minJump, maxJump) {
    // const dp = new Array(s.length).fill(null)
    // return dfs(s, 0, minJump, maxJump, dp)
    let pre = 0
    const dp = new Array(s.length).fill(false)
    dp[0] = true
    for (let i = 1; i < s.length; i ++) {
        if (i >= minJump && dp[i - minJump]) {
            pre += 1
        }
        if (i > maxJump && dp[i - maxJump - 1]) {
            pre -= 1
        }
        dp[i] = pre > 0 && s[i] === '0'
    }

    return dp[s.length - 1]
};

// var dfs = function(s, i, minJump, maxJump, dp) {
//     if (i >= s.length) {
//         return false
//     }
//     if (i === s.length - 1) {
//         return s[i] === '0'
//     }
//     if (s[i] === '1') {
//         return false
//     }
//     if (dp[i] !== null) {
//         return dp[i]
//     }

//     for (let j = maxJump; j >= minJump; j --) {
//         if (dfs(s, i + j, minJump, maxJump, dp)) {
//             dp[i] = true
//             return true
//         }
//     }
//     dp[i] = false
//     return dp[i]
// }