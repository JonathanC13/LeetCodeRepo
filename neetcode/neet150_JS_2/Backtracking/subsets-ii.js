// https://neetcode.io/problems/subsets-ii

/*
sort the nums in non-descending order so that the duplicates will be neighbors.

recursive backtracking
2 options

1. use in the subset

2. while next num is the same as current, move i forward    // on backtrack to this call, it will start the next path that won't produce a duplicate subset by moving until not duplicate of itself.
    call recursive on the index that is not a dup of the current, i + 1

- Time: O(n * 2^n)
- Space: O(n)
*/

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort((a, b) => a - b)

        const res = new Array()
        const subset = new Array()

        this.bt(nums, 0, subset, res)
        return res
    }

    bt(nums, i, subset, res) {
        if (i >= nums.length) {
            res.push([...subset])
            return
        }

        // Use the current value
        subset.push(nums[i])
        this.bt(nums, i + 1, subset, res)
        subset.pop()

        // to avoid duplicate subset, if the next value is the same as the current move forward
        while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
            i += 1
        }
        // at this point, the next will be a different value so start the next solution there.
        this.bt(nums, i + 1, subset, res)

        return
        
    }
}
