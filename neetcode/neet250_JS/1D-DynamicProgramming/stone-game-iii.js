// https://leetcode.com/problems/stone-game-iii/

/*
recursive dfs and keep track of whos turn it is. (player[], player)
    if (i === stoneValue.length) {
        return 0
    }

    maxScore = Number.NEGATIVE_INFINITY
    // each turn has 3 options
    iterate j 1 to <= 3 that the current player will take
        if (i + j <= stoneValue.length) {
            stoneScore = 0
            // get the stone score with the number of stones taken
            for (let k = i; k < i + j; k ++) {
                stoneScore += stoneValue[k]
            }

            maxScore = Math.max(maxScore, stoneScore)   // save the max score seen in this turn
            player[player][0] += stoneScore   // curr score for curr path
            this.dfs(i + j, player[], otherPlayer)  // move ahead the number of stones taken
            player[player][0] -= stoneScore   // curr score, remove for next path
        }

    player[player][1] = Math.max(player[player][1], player[player][0] + maxScore)  // after stones exhausted, record the all time max score. 
    return

    **** Above solution invalidates rule that both players play optimally. Basing the end result on max score achievable is wrong.

- Time: O(3^n)
- Time: O(n)

Use Hint, minmax game
if Alice turn + to path score, if Bob - to path score

- Time: O(3^n)
- Time: O(n)

------
- improve time complexity with DP
Create DP Array of length stoneValue.length. fill with Number.NEGATIVE_INFINITY

in the recursive soln,
    if dp[i] !== Number.NEGATIVE_INFINITY
        return dp[i]    it will hold the max path score from that index onward

- Time: O(n). n for initial dfs * 3 for 1 to 3 stones
- Space: O(n)
*/

/**
 * @param {number[]} stoneValue
 * @return {string}
 */
var stoneGameIII = function(stoneValue) {
    // min max dfs recursive soln
    const dp = new Array(stoneValue.length).fill(Number.NEGATIVE_INFINITY)
    const scoreBalance = dfs(stoneValue, 0, dp)
    if (scoreBalance === 0) {
        return 'Tie'
    } else {
        return scoreBalance > 0 ? 'Alice' : 'Bob'
    }
};

var dfs = function(stoneValue, i, dp) {
    if (i === stoneValue.length) {
        return 0
    }
    if (dp[i] !== Number.NEGATIVE_INFINITY) {
        return dp[i]
    }

    // dfs
    let turnScore = stoneValue[i]   // Alice goes first, take first stone
    let maxPathScore = turnScore - dfs(stoneValue, i + 1, dp)   // subsequent stone, Bob takes so subtract the max they could get

    // already taken first stone, now evaluate taking the next 2
    for (let j = i + 1; j < i + 3; j ++) {
        if (j < stoneValue.length) {
            // add next stone value for the turn.
            turnScore += stoneValue[j]

            // move to the next stone
            maxPathScore = Math.max(maxPathScore, turnScore - dfs(stoneValue, j + 1, dp))
        }
    }
    dp[i] = maxPathScore
    return dp[i]
}