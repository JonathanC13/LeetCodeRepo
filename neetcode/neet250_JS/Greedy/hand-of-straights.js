// https://neetcode.io/problems/hand-of-straights

/*
Brute
    1. find the min in the current parition and swap with current group first index
    2. for 1 to groupSize search for val + 1, if cannot find return false, if found swap
        Time: n^3

    Time: 1 + 2 = n + n^3

Greedy
    create a Map for the value and the count of the value
    sort the hand in non descending order
    for each num in hand
        if (count > 0) since sorted in non descending order, 
            for the straight to be valid search for the groupSize - 1 values that complete the straight
                if count === 0 return false
        else next value

    return true

    Time: O(n log n).   n log n for sort + n for check if valid
    Space: O(n)

*/

class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        if (hand.length % groupSize !== 0) {
            return false;
        }

        // return this.brute(hand, groupSize)

        hand.sort((a, b) => {return a - b})
        
        const count = new Map()
        for (let i = 0; i < hand.length; i ++) {
            if (!count.get(hand[i])) {
                count.set(hand[i], 0)
            }
            count.set(hand[i], 1 + count.get(hand[i]))
        }
        
        for (let i = 0; i < hand.length; i ++) {
            if (count.get(hand[i]) > 0) {
                for (let j = hand[i]; j < hand[i] + groupSize; j ++) {
                    if (count.get(j) <= 0 || !count.get(j)) {
                        return false
                    }
                    count.set(j, count.get(j) - 1)
                }
            }
        }
        console.log(count)
        return true
    }

    brute(hand, groupSize) {
        let group = 0
        let i = 0
        while (i < hand.length) {
            let min = i
            for (let j = i + 1; j < hand.length; j ++) {
                if (hand[j] < hand[min]) {
                    min = j
                }
            }
            let tmp = hand[i]
            hand[i] = hand[min]
            hand[min] = tmp

            let curr = hand[i]
            for (let j = i + 1; j < i + groupSize; j ++) {
                if (j >= hand.length) {
                    return false
                }

                for (let k = j; k < hand.length; k ++) {
                    if (hand[k] === curr + 1) {
                        let tmp = hand[k]
                        hand[k] = hand[j]
                        hand[j] = tmp
                        break
                    }
                }

                if (curr + 1 !== hand[j]) {
                    return false
                }
                curr = hand[j]
            }

            group += 1
            i = group * groupSize
        }
        return true
    }
}
