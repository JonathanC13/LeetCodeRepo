// https://leetcode.com/problems/domino-and-tromino-tiling/description/?envType=study-plan-v2&envId=leetcode-75

// https://leetcode.com/problems/domino-and-tromino-tiling/solutions/116581/detail-and-explanation-of-o-n-solution-why-dp-n-2-d-n-1-dp-n-3/?envType=study-plan-v2&envId=leetcode-75

/*
** note
Four-directionally adjacent cells mean two cells which are adjacent to each other in one of the four directions. This means that the two cells should be vertically or horizontally adjacent. Hence, two tilings are different iff. for the same pair of adjacent tiles in the two tilings, only one of them is occupied by the same tile.


** wrong
recursive dfs backtracking with dp memo
    base case 1: if i === n: return 1   //fits on board to complete tiling
    base case 2: if i > n: return 0 // does not fit on board to complete tiling

    // 
    1. vertical domino. dfs(i + 1)
    2. 2 horizontal domino. if (i + 2 < n): dfs(i + 2)  //1 diff combos. swapping the top and bottom horizontals are still the same combo
    3. 2 tromino. if (i + 3 < n): 1 + dfs(i + 3)            //2 diff combos so + 1
    4. 2 tromino + 1 horizontal: dfs(i + 4)

    return combos

- Time: O(n)
- Space: O(n)


**
dp[n]=dp[n-1]+dp[n-2]+ 2*(dp[n-3]+...+d[0])
=dp[n-1]+dp[n-2]+dp[n-3]+dp[n-3]+2*(dp[n-4]+...+d[0]) // dp[n-n] = dp[0], and the previous state of dp[n-3] is dp[n-4] not dp[n-2]
=dp[n-1]+dp[n-3]+(dp[n-2]+dp[n-3]+2*(dp[n-4]+...+d[0]))
=dp[n-1]+dp[n-3]+dp[n-1]    
    // (dp[n-2]+dp[n-3]+2*(dp[n-4]+...+d[0])) = dp[n-1]
    Because dp[n] = dp[n-1] + dp[n-2] + 2*(dp[n - 3] + .. + d[0]),
    So, dp[n-1] = dp[n-2] + dp[n-3] + 2*(dp[n - 4] + .. + d[0]).
    We can now substitute the expression to dp[n-1].
=2*dp[n-1]+dp[n-3]
*/

// ** wrong
// const dfs = (n, i, memo) => {
//     if (i === n) {
//         return 1
//     }
//     if (i > n) {
//         return 0
//     }
//     if (memo[i] !== -1) {
//         return memo[i]
//     }

//     const vert = dfs(n, i + 1, memo)
//     const horiz = dfs(n, i + 2, memo)
//     let trominos = dfs(n, i + 3, memo)
//     if (trominos !== 0) {
//         trominos += 1
//     }
//     let trominoHori = dfs(n, i + 4, memo)
//     if (trominoHori !== 0) {
//         trominoHori += 1
//     }

//     memo[i] = vert + horiz + trominos + trominoHori
//     return memo[i]
// }

const dp = (n, memo) => {
    if (n < 0) {
        return 0
    }
    if (n === 0 || n === 1) {
        return 1
    }
    if (n === 2) {
        return 2
    }
    if (n === 3) {
        return 5
    }
    if (memo[n] !== -1) {
        return memo[n]
    }

    memo[n] = (2 * dp(n - 1, memo) + dp(n - 3, memo)) % (1e9 + 7)
    return memo[n]
}

/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function(n) {
    if (n < 0) {
        return 0
    }
    if (n === 0 || n === 1) {
        return 1
    }
    if (n === 2) {
        return 2
    }
    if (n === 3) {
        return 5
    }
    const memo = new Array(n + 1).fill(-1)

    // dfs(n, 0, memo)
    dp(n, memo)
    console.log(memo)
    return memo[n]
};