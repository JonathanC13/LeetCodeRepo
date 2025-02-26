// https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/

/*
the minShip = 0
the minCap = 1
the maxCap = get the sum of all the weights in Array weights

// need to approach the closest valid result by halving and only recording the valid result. When all options evaluated, the most recent result recorded is the closest
the binary search is to continuously choose the ship's capacity with the bounds of minCap and maxCap
    minCap = middle
    Evaluate if all the packages can be shipped within the days
    if true
        minShip = minCap
        lower the cap for the next iteration. maxCap = mid - 1
    else:
        overdue days, increase minCap = mid + 1

return minShip

- Time: O(w log w). weights * log weights. since each middle weight needs to be evaluated by iterating the weights to see if can meet days
- Space: O(1)

*/

/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    if (weights.length === 0) {
        return 0
    }

    let resCap = 0
    let minCap = 1
    let maxCap = 0
    for (let i = 0; i < weights.length; i ++) {
        maxCap += weights[i]
    }

    while (minCap <= maxCap) {
        const middleCap = minCap + Math.floor((maxCap - minCap) / 2)
        if (canShip(weights, days, middleCap)) {
            resCap = middleCap
            maxCap = middleCap - 1
        } else {
            minCap = middleCap + 1
        }
    }

    return resCap
};

var canShip = function(weights, days, middleCap) {
    let w = 0
    for (let i = 0; i < days; i ++) {
        let cap = middleCap
        while (w < weights.length && cap - weights[w] >= 0) {
            cap = cap - weights[w]
            w = w + 1
        }

        if (w === weights.length) {
            return true
        }
    }
    
    // if all weights used return true, else false since it means it could not fit all the weights with the desired capacity within the desired days.
    return w === weights.length
}