// https://leetcode.com/problems/perfect-squares/

/*
- edge case 1: if target is a perfect square (target % sqrt(target) !== 1): return 1

create Array of length target + 1 fill with -1
initial state, dp[0] = 0
create an Array with all the perfect squares <= target

recursive DFS
    if (dp[target] !== -1) {
        return dp[target]
    }

    let minSqs = Number.POSITIVE_INFINITY
    // evaluate each perf sq
    for (let i = 0; i < perfSqs.length; i ++) {
        if (target - perfSqs[i] >= 0) {
            minSqs = Math.min(minSqs, 1 + this.dfs(perfSqs, target - perfSqs[i], dp))    // the 1 is for this current perfSq
        }
    }

    dp[target] = minSqs
    return dp[target]

- Time: O(n^2)
- Space: O(n)
*/

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    if (n % Math.sqrt(n) === 1) {
        return 1
    }

    const dp = new Array(n + 1).fill(-1)
    dp[0] = 0

    const perfSqs = []
    for (let i = 1; i * i <= n; i ++) {
        perfSqs.push(i * i)
    }
    
    const res = dfs(perfSqs, n, dp)
    return res === Number.POSITIVE_INFINITY ? -1 : res
};

var dfs = function(perfSqs, target, dp) {
    if (dp[target] !== -1) {
        return dp[target]
    }

    let minSqs = Number.POSITIVE_INFINITY
    // evaluate each perf sq
    for (let i = 0; i < perfSqs.length; i ++) {
        if (target - perfSqs[i] >= 0) {
            minSqs = Math.min(minSqs, 1 + dfs(perfSqs, target - perfSqs[i], dp))    // the 1 is for this current perfSq
        }
    }

    dp[target] = minSqs
    return dp[target]
}