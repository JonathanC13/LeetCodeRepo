// https://neetcode.io/problems/eating-bananas

class Solution {

    evalRate(piles, len, rate) {
        let hours = 0
        for (let i = 0; i < len; i ++) {
            hours += Math.ceil(piles[i] / rate) // ceil to account for remaining bananas
        }
        return hours
    }

    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {

        piles.sort((a, b) => {return b - a})    // desc
        
        const len = piles.length
        let left = 0
        let right = piles[0]

        if (len === h) {
            return right
        }

        let minRate = right

        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2)

            const hours = this.evalRate(piles, len, mid)

            if (hours > h) {
                left = mid + 1
            } else {
                minRate = mid
                right = mid - 1
            }
        }

        return minRate
    }
}
