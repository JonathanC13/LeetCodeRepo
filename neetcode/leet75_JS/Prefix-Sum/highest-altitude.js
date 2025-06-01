// https://leetcode.com/problems/find-the-highest-altitude/description/?envType=study-plan-v2&envId=leetcode-75

/*
edge case 1: if gain.length === 0: return 0

initial highest is 0
currAlt = 0   // prefix sum

iterate gain
    calculate current altitude = currAlt + gain[i]
    highest = max(highest, currAlt)

return highest

- Time: O(n)
- Space: O(1)
*/

/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    if (gain.length === 0) {
        return 0
    }

    let highest = 0
    currAlt = 0

    for (let i = 0; i < gain.length; i ++) {
        currAlt += gain[i]
        highest = Math.max(highest, currAlt)
    }

    return highest
};