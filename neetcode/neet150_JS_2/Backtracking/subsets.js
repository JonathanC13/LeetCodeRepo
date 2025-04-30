// https://neetcode.io/problems/subsets

/*
recursive backtracking

// to get to end without choosing any elements and when going forward from a backtrack it will ignore elements to go to the next
1. do not use current num in subset

2. use current num in subset

When reach the end of nums, there are no more elements to skip/add so place into the overall results

- Time: O(n * 2^n)  // each n has 2 choices. Think n is the height of a tree and the 2^n is the number of children on the level, then the result is all the nodes to traverse.
- Space: O(n)
*/

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const res = new Array()
        const subset = new Array()

        this.backtrack(nums, 0, res, subset)
        return res
    }

    backtrack(nums, i, res, subset) {
        if (i >= nums.length) {
            res.push([...subset])
            return
        }

        // not use
        this.backtrack(nums, i + 1, res, subset)

        // use
        subset.push(nums[i])
        this.backtrack(nums, i + 1, res, subset)
        subset.pop()

        return
    }
}
