// https://leetcode.com/problems/stone-game/

/*
method 1: recursive dfs
    have to find the min sum (closest to 0) of all the paths.
    for Alice, add the stones[i] to the currSum. For Bob, subtract. Therefore at the end if +ive value return true, else false
    each recursive call has 4. Alice adds the front, adds the back, Bob subtracts the front, subtracts the back

    params: i for beginning of stones, j for end of stones, currSum for the total score at the end of a game

    base case 1: no more stones
    if i > j:
        return currSum

    if (turn) {
        const AliceFront = initdfs(piles, i + 1, j, currSum + piles[i], false)
        const AliceBack = initdfs(piles, i, j - 1, currSum + piles[j], false)
        return Math.max(AliceFront, AliceBack)  // Only get Max because Alice is playing optimally by grabbing the max pile on their turn
        // return getClosestTo0([AliceFront, AliceBack])    
    } else {
        const BobFront = initdfs(piles, i + 1, j, currSum - piles[i], true)
        const BobBack = initdfs(piles, i, j - 1, currSum - piles[j], true)
        return Math.max(BobFront, BobBack)  // Only get Max because Alice is playing optimally by grabbing the max pile on their turn, this means Bob's score will trend toward positive.
        // return getClosestTo0([BobFront, BobBack])
    }

    - Time: O(2^n). n = stones.length
    - Time: O(n)

method 2: reduce time complexity with memoization
    create a 2D array
        rows of length piles.length for selecting i
        cols of length piles.length for selecting j

        each coord will hold the min curr sum from the path it was involved with

    - Time: O(n * n)
    - Space: O(n * n)

method 3: bottom up 
    create 2D Array of 
        rows: piles.length
        cols: piles.length
            fill with 0 because does not add to path score

    // build solution toward top right which represents the 'middle' where the max score can decided from paths choosing front or back
    // max sums are calculated from top left down to bottom right
    
    // the exact middle diagonal is filled with the piles[i] because if i === j then by selecting the value will provide that value as the max score for that path
    iterate i to piles.length
        fill dp[i][i] = piles[i]
    
    // calculating the max score from the last 2 available values first then expand
    // e.x. if i = 1 and j = 2
    //          if choose front, i, then the max path score is piles[i] - dp[i + 1][j]. The other player has to choose the only other remaining pile.
    //          if choose back, j, max path score is piles[j] - dp[i][j - 1]
    iterate d from 1 to < n // index from end that can be selected
        iterate i from 0 to < n - d
            dp[i][i + d] = max(piles[i] - dp[i + 1][i + d], piles[i + d] - dp[i][i + d - 1]);   // take the max because player is playing optimally by choosing the highest score path

    solution will be in dp[0][piles.length - 1]
*/

/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function(piles) {
    // const res = initdfs(piles, 0, piles.length - 1, 0, true)

    // const res = topDown(piles)

    const res = bottomUp(piles)
    return res >= 0 ? true : false
};

var bottomUp = function(piles) {
    const n = piles.length
    const dp = Array.from(new Array(n), (e) => new Array(n).fill(0))
    for (let i = 0; i < n; i++) {
        dp[i][i] = piles[i];
    }

    for (let d = 1; d < n; d ++) {
        for (let i = 0; i < n - d; i ++) {
            dp[i][i + d] = Math.max(piles[i] - dp[i + 1][i + d], piles[i + d] - dp[i][i + d - 1]);
        }
    }

    console.log(dp)
    return dp[0][n - 1];
}

var topDown = function(piles) {
    // const totalSum = piles.reduce((acc, curr) => acc + curr, 0)
    const memo = Array.from(new Array(piles.length), (e) => new Array(piles.length).fill(Number.POSITIVE_INFINITY))

    const res = dfs(piles, 0, piles.length - 1, 0, memo, true)
    // console.log(memo)
    return res
}

var dfs = function(piles, i, j, currSum, memo, turn) {
    if (i > j) {
        return currSum
    }
    if (memo[i][j] !== Number.POSITIVE_INFINITY) {
        return memo[i][j]
    }

    if (turn) {
        const AliceFront = dfs(piles, i + 1, j, currSum + piles[i], memo, false)
        const AliceBack = dfs(piles, i, j - 1, currSum + piles[j], memo,false)
        memo[i][j] = Math.max(AliceFront, AliceBack)
        return memo[i][j]
    } else {
        const BobFront = dfs(piles, i + 1, j, currSum - piles[i], memo, true)
        const BobBack = dfs(piles, i, j - 1, currSum - piles[j], memo, true)
        memo[i][j] = Math.max(BobFront, BobBack)
        return memo[i][j]
    }
}

var initdfs = function(piles, i, j, currSum, turn) {
    if (i > j) {
        return currSum
    }

    if (turn) {
        const AliceFront = initdfs(piles, i + 1, j, currSum + piles[i], false)
        const AliceBack = initdfs(piles, i, j - 1, currSum + piles[j], false)
        return Math.max(AliceFront, AliceBack)
        // return getClosestTo0([AliceFront, AliceBack])
    } else {
        const BobFront = initdfs(piles, i + 1, j, currSum - piles[i], true)
        const BobBack = initdfs(piles, i, j - 1, currSum - piles[j], true)
        return Math.max(BobFront, BobBack)
        // return getClosestTo0([BobFront, BobBack])
    }

}

var getClosestTo0 = function(arr) {
    let closest = 0
    let smallestDif = Number.POSITIVE_INFINITY

    for (let i = 0; i < arr.length; i ++) {
        const currDif = Math.abs(arr[i])

        if (currDif < smallestDif || (currDif === smallestDif && arr[i] > closest)) {
            closest = arr[i]
            smallestDif = currDif
        }
    }
    console.log(arr, ' ', closest)
    return closest
}