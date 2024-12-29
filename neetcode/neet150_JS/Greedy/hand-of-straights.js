// https://neetcode.io/problems/hand-of-straights

class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        if (groupSize !== 0 && hand.length % groupSize !== 0) {
            return false
        }

        const counts = new Map()
        hand.sort((a, b) => {return a - b})

        for (let c of hand) {
            counts.set(c, (counts.get(c) || 0) + 1)
        }

        for (let c of hand) {
            if (counts.get(c) > 0) {
                for (let i = c; i < c + groupSize; i ++) {
                    if (!counts.get(i) || counts.get(i) === 0) {
                        return false
                    }

                    counts.set(i, counts.get(i) - 1)
                }
            }
        }

        return true
    }
}
