// https://neetcode.io/problems/eating-bananas

/*
the slowest = 1
the fastest = find max in piles
midSpeed = 0
potentialSoln = 0

while (slowest <= fastest)
    get the mid speed
    call func that returns the number of hours to finish the piles with the mid speed

    if (hours > h) {
        // need faster speed
        slowest = mid + 1
    } else {
        // continue to decrease speed
        potentialSoln = mid speed
        fastest = mid - 1
    }

return slowest

The reason to return 'slowest' is because the goal is the minimum speed of eating, 
so that means the the binary search needs to continue until all speed values exhausted which will place the 'slowest' at the min speed to achieve hours < h
if too slow, hours > h. Increase speed. 'slowest' will creep to the solution, if any.
if too fast, decrease speed.

To make it easier, store the potentialSoln = mid speed where there was the last time Koko could eat all the bananas within the time

- Time: O(n log m). log m for binary search (m is the speeds, starting with max number of bananas in one pile). * n is number of piles
- Space: O(1)
*/

class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let slowest = 1
        let fastest = piles[0]
        let potentialSoln = 0
        for (let i = 1; i < piles.length; i ++) {
            fastest = Math.max(fastest, piles[i])
        }

        while (slowest <= fastest) {
            const midSpd = slowest + Math.floor((fastest - slowest) / 2)

            const hours = this.evalHours(piles, midSpd)
            if (hours > h) {
                slowest = midSpd + 1
            } else {
                potentialSoln = midSpd
                fastest = midSpd - 1
            }
        }

        return potentialSoln
    }

    evalHours(piles, midSpd) {
        let hours = 0
        for (let i = 0; i < piles.length; i ++) {
            hours += Math.ceil(piles[i] / midSpd)
        }

        return hours
    }
}
