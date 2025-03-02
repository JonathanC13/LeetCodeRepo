// https://neetcode.io/problems/longest-increasing-subsequence

/*
recursive dfs
    // need to compare the value at index i (prevValue) to the last to check if increasing and 
    on the backtrack if that value is > prevValue then go ahead to check for other increasing values for the path.

    if i === nums.length: return 0

    increaseLeng = this.dfs(nums, i + 1, prevNum) // DFS and to retrieve path increaseLen.

    if (nums[i] > prevNum) {
        // check ahead nums if they are greater than curr
        increaseLeng = Math.max(increaseLeng, 1 + this.dfs(nums, i + 1, nums[i]))
    }

    return increaseLeng

call: this.dfs(nums, 0, Number.NEGATIVE_INFINITY)
- Time: O(2^n). 2 options. go forward and if nums[i] > prev go forward
- Space: O(n)

With dynamic programming, 
    use a 2D Array to mark the longest increasing subsequence from that index onward so path does not need to be retreaded.
        - Need a 2D array because i will be the starting base number froms nums that starts the sequence and j are the numbers being evaluated
- Time: O(n^2)
- Space: O(n^2)

*/

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        if (nums.length < 2) {
            return nums.length
        }
        const dp = new Array(nums.length).fill().map((e) => {return Array(nums.length + 1).fill(-1)})
        // dp[nums.length] = 0
        let res = this.dfs(nums, 0, -1, dp)
        console.log(dp)
        return res
    }

    dfs(nums, i, prevIdx, dp) {
        if (i === nums.length) {
            return 0
        }
        if (dp[i][prevIdx + 1] !== -1) {
            return dp[i][prevIdx + 1] 
        }

        let increaseLeng = this.dfs(nums, i + 1, prevIdx, dp)

        if (prevIdx === - 1 || nums[i] > nums[prevIdx]) {
            increaseLeng = Math.max(increaseLeng, 1 + this.dfs(nums, i + 1, i, dp))
        }
        dp[i][prevIdx + 1] = increaseLeng
        return dp[i][prevIdx + 1] 
    }
}
