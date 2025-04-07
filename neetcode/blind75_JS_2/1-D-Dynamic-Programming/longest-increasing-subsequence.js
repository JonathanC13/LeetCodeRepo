// https://neetcode.io/problems/longest-increasing-subsequence

/*
recursive dfs backtracking
    maintain index i to interate nums
    maintain index j as current element to find an increasing value for

- Time: O(2^n)  
- Space: O(n)

DP to reduce time complexity
memo Array
    value: longest increasing from this index to end

- Time: O(n^2)
- Space: O(n)
*/

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        if (nums.length === 0) {
            return 0
        }
        const n = nums.length;
        const memo = Array.from({ length: n }, () => 
                     Array(n + 2).fill(-1));
        
        const res = this.dfs2(nums, 0, -1, memo);
        console.log(memo)
        return res
    }

    dfs(nums, i, j) {
        if (i === nums.length) {
            return 0
        }

        // from, i go to the end to build the sequence by backtracking and saving the longest ahead
        let longest = this.dfs(nums, i + 1, j)

        if (j === -1 || nums[j] < nums[i]) {
            longest = Math.max(longest, 1 + this.dfs(nums, i + 1, i))   // 1 for itself.
        }
        return longest
    }

    dfs2(nums, i, j, memo) {
        if (i === nums.length) return 0; 
        if (memo[i][j + 1] !== -1) 
            return memo[i][j + 1];
        
        let LIS = this.dfs2(nums, i + 1, j, memo);
        
        if (j === -1 || nums[j] < nums[i]) {
            LIS = Math.max(LIS, 1 + this.dfs2(nums, i + 1, i, memo));
        }
        // console.log(i, j + 1)
        memo[i][j + 1] = LIS;
        return LIS;
    }
}
