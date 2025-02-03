// https://neetcode.io/problems/subsets-ii

/*
- base case 1: if nums.length === 0: return [[]]

The description should have indiciated that the subset can be in any order. So we can sort.
If the order needed to be maintained, then cannot sort and must use the method of putting each subset generated Stringified with join into a Set.

- with sort
- Time: O(n * 2^n)
- Space: O(n)
*/

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        if (nums.length === 0) {
            return [[]]
        }

        nums.sort((a, b) => {return a - b})
        const res = []
        this.dfs(nums, 0, res, [])
        return res
    }

    dfs(nums, i, res, combo) {
        if (i >= nums.length) {
            res.push([...combo])
            return
        }
        
        combo.push(nums[i])
        this.dfs(nums, i + 1, res, combo)
        combo.pop()

        let j = i + 1
        while (j < nums.length && nums[i] === nums[j]) {
            j += 1
        }
        this.dfs(nums, j, res, combo)

        return
    }
}
