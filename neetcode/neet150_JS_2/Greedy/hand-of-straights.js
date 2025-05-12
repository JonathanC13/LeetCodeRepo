// https://neetcode.io/problems/hand-of-straights

/*
edge case 1: if hand.length % groupSize !== 0: return false

const parts = new Array(hand.length / groupSize)
sort in non-descending order, n log n

iterate hand left to right
    p = 0
    while p < parts.length
        if parts[p].length === 0 OR (parts[p].length < groupSize && parts[p][parts[p].length-1] === curr num - 1)  // valid parts to insert into either empty or curr num is +1 of prev entry
            parts[p].push(hand[i])
            break
        h ++

    if (h === parts.length) {
        // could not find valid parts to insert into
        return false
    }

return true

- Time: O(n * partsLen)
- Space: O(n/groupSize)

** another method is with a map
Create a map with the count of each number

sort the hand in non-descending order

iterate hand from left to right
    if (count in Map of curr num !== 0) // it means one potential straight starts from this or return false
        for (s = num; s < s + groupSize; s ++) {
            if (count of s in Map does not exist or === 0) {
                return false    // could not get the required number for the current straight
            }
            count of s in Map -= 1
        }

return true

- Time: O(n log n). n log n to sort. + n to iterate
- Space: O(n)
*/


class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        if (hand.length % groupSize !== 0) {
            return false
        }
        hand.sort((a, b) => a - b)
        // return this.iterative(hand, groupSize)
        return this.mapSoln(hand, groupSize)
    }

    mapSoln(hand, groupSize) {
        const counts = new Map()

        for (let i = 0; i < hand.length; i ++) {
            counts.set(hand[i], (counts.get(hand[i]) || 0) + 1)
        }
        console.log(counts)
        for (let i = 0; i < hand.length; i ++) {
            if (counts.get(hand[i]) !== 0) {
                for (let s = hand[i]; s < hand[i] + groupSize; s ++) {
                    if (counts.get(s) === undefined || counts.get(s) === 0) {
                        return false
                    }
                    counts.set(s, counts.get(s) - 1)
                }
            }
        }
        return true
    }

    iterative(hand, groupSize) {
        const parts = new Array(hand.length / groupSize).fill().map((e) => new Array())

        for (let i = 0; i < hand.length; i ++) {
            let p = 0
            while (p < parts.length) {
                if (parts[p].length === 0 || (parts[p].length < groupSize && parts[p][parts[p].length - 1] === hand[i] - 1)) {
                    parts[p].push(hand[i])
                    break
                }
                p += 1
            }

            if (p === parts.length) {
                console.log(parts)
                return false
            }
        }
        console.log(parts)
        return true
    }
}
