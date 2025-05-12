// https://neetcode.io/problems/merge-triplets-to-form-target

/*
create Array of length target.length fill with Number neg infinity. const merged

iterate the triplets from left to right
    t = 0
    while t < triplets[i].length
        check if each value is <= target at same position, if not break

        t ++

    if (t === triplets[i].length) {
        all numbers did not overshoot
        merge with merged
    }

iterate merged to compare with target

- Time: O(n * target.length).    // n * target.length + n
- Space: O(target.length)

*/

class Solution {
    /**
     * @param {number[][]} triplets
     * @param {number[]} target
     * @return {boolean}
     */
    mergeTriplets(triplets, target) {
        //return this.mineLol(triplets, target)

        // condensed
        const obtainedIndex = new Set()
        for (let i = 0; i < triplets.length; i ++) {
            if (triplets[i][0] > target[0] || triplets[i][1] > target[1] || triplets[i][2] > target[2]) {
                continue
            }

            for (let t = 0; t < target.length; t ++) {
                if (target[t] === triplets[i][t]) {
                    obtainedIndex.add(t)
                }
            }
        }

        return obtainedIndex.size === target.length
    }

    mineLol(triplets, target) {
        const merged = new Array(target.length).fill(Number.NEGATIVE_INFINITY)

        for (let i = 0; i < triplets.length; i ++) {
            let t = 0
            while (t < triplets[i].length) {
                if (triplets[i][t] > target[t]) {
                    break
                }
                t += 1
            }

            if (t === triplets[i].length) {
                for (let m = 0; m < merged.length; m ++) {
                    merged[m] = Math.max(triplets[i][m], merged[m])
                }
            }
        }

        for (let i = 0; i < merged.length; i ++) {
            if (merged[i] !== target[i]) {
                return false
            }
        }

        return true
    }
}
