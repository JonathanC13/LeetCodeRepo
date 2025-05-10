// https://neetcode.io/problems/longest-increasing-subsequence

/*
edge case 1:
    if nums.length <= 1:
        return nums.length

recursive backtrack and memo
- rec:
    2 paths
        1. move until end so that the first subset evaluated is the smallest of 1 at the end
        2. if no prev index value to compare to || nums[j] < current value at i: max = max(max, 1 + returned)

    base cases: 
        1. if i === nums.length
            return 0

- add memo
    create 2D Array of size n, n + 2. Fill with -1. n + 2 cols because prevI will start at -1 and end max is n + 1
        1. where rows is the current index 
        2. cols is the prevI compared to i
        Each cell is the max increasing length from col(prev I) to row(I)
        for col 0, it stores the longest increasing from current index(row) to end

        therefore, final result will be stored in memo[0][0] which is the longest increasing from 0 to end

- Time: O(n^2)
- Space: O(n^2)
*/

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        if (nums.length <= 1) {
            return nums.length
        }
        const memo = new Array(nums.length).fill().map((e) => new Array(nums.length + 1).fill(-1))
        this.dfs(nums, 0, memo, -1)
        console.log(memo)
        return memo[0][0]
    }

    dfs(nums, i, memo, prevI) {
        if (i === nums.length) {
            return 0
        }
        if (memo[i][prevI + 1] !== -1) {
            return memo[i][prevI + 1]
        }

        let inc = this.dfs(nums, i + 1, memo, prevI)

        if (prevI === -1 || nums[prevI] < nums[i]) {
            inc = Math.max(inc, 1 + this.dfs(nums, i + 1, memo, i))
        }
        memo[i][prevI + 1] = inc
        return memo[i][prevI + 1]
    }
}
