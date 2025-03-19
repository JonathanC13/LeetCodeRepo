// https://leetcode.com/problems/last-stone-weight-ii/

/*
method 1: recursive dfs
    Get the minimum sum of the stone values by assigning + and -ive to indicate combinations of:
        1. x == y = 0. e.x. +1 -1 = 0
        2. x != y, new stone = abs(y - x)
    There will be many combinations that do not lead to 0 or 1 remaining stones.

    -Time: O(2^n). Each stone has 2 options add or subtract the stone weight

Method 2: improve Time complexity with top down memoization
    create a 2D Array 
        rows of length stones.length
        cols of totalSumOfStones * 2 + 1
            This is so that the negative values have an index to be stored. the '0' is at totalSumOfStones

    The final answer will be in memo[0][0]

    recursive dfs
        at each [i][currSum + totalSumOfStones] save the calculated min path sum

    -Time: O(n * totalSum)
    -Space: O(n * totalSum)

Method 3: bottom Up with tabulation
    create an Array of length stones.length + 1, and fill with empty Set
    I cant think

    iterate the stones

*/

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function(stones) {
    // return initdfs(stones, 0, 0)
    return topDown(stones)
};

var topDown = function(stones) {
    const totalSum = stones.reduce((acc, currVal) => acc + currVal, 0)
    const memo = Array.from(new Array(stones.length), (e) => new Array(totalSum * 2 + 1).fill(Number.POSITIVE_INFINITY))

    const res = dfs(stones, 0, 0, memo, totalSum)
    console.log(memo)
    return res 
}

var dfs = function(stones, i, currSum, memo, totalSum) {
    if (i === stones.length) {
        return currSum < 0 ? Number.POSITIVE_INFINITY : currSum
    }
    if (memo[i][currSum + totalSum] !== Number.POSITIVE_INFINITY) {
        return memo[i][currSum + totalSum]
    }

    memo[i][currSum + totalSum] = Math.min(dfs(stones, i + 1, currSum - stones[i], memo, totalSum), dfs(stones, i + 1, currSum + stones[i], memo, totalSum))

    return memo[i][currSum + totalSum]
}

var initdfs = function(stones, i, currSum) {
    if (i === stones.length) {
        if (currSum < 0) {
            return Number.POSITIVE_INFINITY
        } else {
            return currSum
        }
    }

    // 2 options
    // 1. use stone to subtract
    const sub = initdfs(stones, i + 1, currSum - stones[i])
    // 2. use stone to add
    const add = initdfs(stones, i + 1, currSum + stones[i])

    return Math.min(sub, add)
}