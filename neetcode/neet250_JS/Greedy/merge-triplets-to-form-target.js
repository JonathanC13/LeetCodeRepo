// https://neetcode.io/problems/merge-triplets-to-form-target

/*
create Set to hold the indexes from triplets that have a match with target

iterate the triplets
    if any of the curr triplet has a value > the corresponding target value at index 0, 1, or 2 then continue to next

    iterate the triplet values
        if a value === target at the same index
            add the index to the Set

return Set.size === 3 // because if 3 it means there all 3 values have indexes from the triplets that can max(a, b) to it.

- Time: O(n)
- Space: O(1) 3 ~= 1
*/

class Solution {
    /**
     * @param {number[][]} triplets
     * @param {number[]} target
     * @return {boolean}
     */
    mergeTriplets(triplets, target) {
        const idxSet = new Set()
        for (let i = 0; i < triplets.length; i ++) {
            if (triplets[i][0] > target[0] || triplets[i][1] > target[1] || triplets[i][2] > target[2]) {
                continue
            }

            for (let j = 0; j < triplets[i].length; j ++) {
                if (triplets[i][j] === target[j]) {
                    idxSet.add(j)
                }
            }
        }
        // console.log(idxSet)
        return idxSet.size === 3
    }
}
