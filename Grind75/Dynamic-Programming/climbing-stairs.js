// https://leetcode.com/problems/climbing-stairs/description/

/**
linear with tabulation
create Array of length n
init states:
    tab[0] = 1  // since can take 1 or 2 steps, only can get to step 1 with 1 distinct way
    tab[1] = 2  // 2 ways. 1 + 1, 2

to get the distinct ways to get to the next steps it is the sum of ways to get to step-1 + ways to get to step-2. 
This is because just extending the combination does not increase the number of ways, just adds to the combination. e.g. step-2 combination just add a 2 step to get to the current step

- Time: O(n)
- Space: O(n)
 */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 2) {
        n
    }

    const tab = new Array(n)
    tab[0] = 1
    tab[1] = 2

    for (let i = 2; i < n; i ++) {
        tab[i] = tab[i - 1] + tab[i - 2]
    }

    return tab[n - 1]
};