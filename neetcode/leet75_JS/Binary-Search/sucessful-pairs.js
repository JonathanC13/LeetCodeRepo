// https://leetcode.com/problems/successful-pairs-of-spells-and-potions/description/?envType=study-plan-v2&envId=leetcode-75

/*
sort the potions in non-descending order

iterate spells
    perform binary search on potions until the end
        if pair strength < success: l = mid + 1
        else r = mid - 1

    at the end the left pointer will be on the lowest strength pair that is >= success
    if l < potions.length: res[i] = potions.length - l

return res

- Time: O(n log m)
- Space: O(n)
*/

/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    const res = new Array(spells.length).fill(0)

    potions.sort((a, b) => a - b)

    for (let i = 0; i < spells.length; i ++) {
        let l = 0;
        let r = potions.length - 1

        while (l <= r) {
            const mid = l + Math.floor((r - l) / 2)
            const pairStrength = spells[i] * potions[mid]
            if (pairStrength < success) {
                l = mid + 1
            } else {
                r = mid - 1
            }
        }

        if (l < potions.length) {
            res[i] = potions.length - l
        }
    }

    return res
};