// https://neetcode.io/problems/eating-bananas

/*
minimum k, k = speed of bananas/hr

the slowest speed that would not meet the hours would be 0 bananas/hour
the fastest would be get the max bananas in all the piles

record the minimum speed that will meet the hours requirement

binary choose speeds from slowest to fastest
    check if that speed can meet the hours, if true, record if slower that currently saved speed.

    if cannot meet hours, need a faster speed. left = mid + 1
    else try for a slower speed. right = mid - 1

    continue until !(l <= r), Must evaluate all speeds until the end.

return midSpeed

- Time: (n log n)  // log n for binary search the speeds, * n to evaluate if the speed can meet the hour requirement
- Space: O(1)
*/

class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 0
        let r = 0
        for (let i = 0; i < piles.length; i ++) {
            r = Math.max(r, piles[i])
        }

        let minSpeed = r
        while (l <= r) {
            const mid = l + Math.floor((r - l) / 2)
            const canFinish = this.evalFinishInTime(piles, mid, h)
            
            if (canFinish) {
                minSpeed = Math.min(minSpeed, mid)
                r = mid - 1
            } else {
                l = mid + 1
            }
        }

        return minSpeed
    }

    evalFinishInTime(piles, speed, h) {
        let hours = 0
        for (let i = 0; i < piles.length; i ++) {
            hours += Math.ceil(piles[i] / speed)
            if (hours > h) {
                return false
            }
        }

        return true
    }
}
