// https://neetcode.io/problems/merge-triplets-to-form-target

class Solution {
    /**
     * @param {number[][]} triplets
     * @param {number[]} target
     * @return {boolean}
     */
    mergeTriplets(triplets, target) {
        if (triplets.length === 0) {
            return false
        }

        const match = new Set()

        for (let i = 0; i < triplets.length; i ++) {
            if (triplets[i][0] > target[0] || triplets[i][1] > target[1] || triplets[i][2] > target[2]) {
                continue
            }

            for (let j = 0; j < triplets[i].length; j ++) {
                if (triplets[i][j] === target[j]) {
                    match.add(target[j])
                }
            }
        }

        return match.size === new Set(target).size
    }
}
