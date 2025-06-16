// https://leetcode.com/problems/koko-eating-bananas/description/?envType=study-plan-v2&envId=leetcode-75

/*
use binary search to determine the min eat rate

iterate the piles to find the max bananas for the right bound.

min rate = -1

while l <= r
    get mid rate

    call func to determine if can finish all piles within h hours

    if true
        min rate = mid,     // record the last rate that was viable
        reduce rate, r = mid - 1
    else
        l = mid + 1

return min rate

- Time: O(n log n)  // n to check piles for each rate. log n is for the binary search to choose the rate.
- Space: O(1)
*/

const eatAtRate = (piles, rate, h) => {
    let hoursToFinish = 0

    for (let i = 0; i < piles.length; i ++) {
        hoursToFinish += Math.ceil(piles[i] / rate)
    }

    return hoursToFinish <= h
}

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let minRate = -1
    let l = 1
    let r = 0

    for (let i = 0; i < piles.length; i ++) {
        r = Math.max(r, piles[i])
    }

    while (l <= r) {
        const mid = l + Math.floor((r - l) / 2)

        const canFinish = eatAtRate(piles, mid, h)

        if (canFinish) {
            minRate = mid
            r = mid - 1
        } else {
            l = mid + 1
        }
    }

    return minRate
};