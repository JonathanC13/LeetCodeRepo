// https://leetcode.com/problems/candy/description/?envType=study-plan-v2&envId=top-interview-150

/*
create Array for assigned candies fill with 1

iterate left + 1 to < length
    if ratings[i - 1] < ratings[i] and candies[i] <= candies[i - 1]
        candies[i] = candies[i - 1] + 1

iterate right - 1 to 0
    if ratings[i + 1] < ratings[i] and candies[i] <= candies[i + 1]
        candies[i] = candies[i + 1] + 1

* can combine the two loops into one

- Time: O(n)
- Space: O(n)
*/

/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    let totalCandies = 0
    const candies = new Array(ratings.length).fill(1)
    const n = ratings.length

    for (let i = 1; i < n; i ++) {
        if (ratings[i - 1] < ratings[i] && candies[i - 1] >= candies[i]) {
            candies[i] = candies[i - 1] + 1
        }

        if (ratings[n - i] < ratings[n - i - 1] && candies[n - i] >= candies[n - i - 1]) {
            candies[n - i - 1] = candies[n - i] + 1
        }
    }
    // console.log(candies)
    for (let i = 0; i < n; i ++) {
        totalCandies += candies[i]
    }

    return totalCandies
};