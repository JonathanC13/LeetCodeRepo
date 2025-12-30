// https://leetcode.com/problems/longest-increasing-subsequence/

/**
*subsequence, not changing order

1. Assumptions
    1. none

2. input validation
    1. nums
        - nums instanceof Array
        - nums.length >= 0
        - nums items are datatype of Number

3. time and space constraints
    BTTC: O(n log(n))   // binary search solution
    Space: O(n)

4. edge cases and some test cases
    edge cases
    1. if nums.length <= 1: return nums.length
    test cases
    1. 
        inputs
            nums = [10,9,2,5,3,7,101,18]
        expected output
            4

    2. all duplicates
        inputs
            nums = [1, 1, 1]
        expected output
            1
    3. 
        inputs
            nums = [1, 2, 3, 1, 1, 1]
        expected output
            3

5. visualize by drawing and manually solve
6. break into subproblems
    recursive backtracking
        base case 1:
        if i >= nums.length
            return 0
        
        // 2 paths: 1. don't use current value in path, 2. if prevVal < nums[i] it means increasing and can use value on path
        notUsed = dfs(nums, i + 1, prevVal)

        let used = 0
        if (prevVal < nums[i]) {
            used = dfs(nums, i + 1, nums[i]) + 1    // + 1 for itself.
        }

        return Math.max(notUsed, used)

    - Time: O(n * 2^n)
    - Space: O(n)

    Add dynamic programming memo
    - add memo
        create 2D Array of size n, n. Fill with -1. 
            1. where rows is the current index 
            2. cols is the prevI compared to i
            Each cell is the max increasing length from nums[prevI] to nums[I]
            The current cell has 2 paths:
                1. get the longest increasing without this nums[i]
                2. if prev not yet chosen so this nums[i] can be prev OR nums[prev] < nums[i] meaning this value extends an increasing subsequence
                    get the longest increasing with this values included. new prev = i and move i = i + 1 for index ahead.

            for col 0, it stores the longest increasing from current index(row) to end
            therefore, final result will be stored in memo[0][0] which is the longest increasing from 0 to end

    - Time: O(n^2)
    - Space: O(n^2)
    

7. algos
    - recursive backtracking
    - binary search

8. datastructures
    - Array

9. complexity
    Time: O(n^2)
    Space: O(n^2)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if (nums.length <= 1) {
        return nums.length
    }

    const n = nums.length
    const memo = new Array(n).fill().map((e) => new Array(n).fill(-1))

    const rec = (i, nums, n, prev, memo) => {
        if (i >= n) {
            return 0
        }
        if (prev !== -1 && memo[i][prev] !== -1) {
            // console.log('hit', i, prev, memo[i][prev])
            return memo[i][prev]
        }
        
        const notUsed = rec(i + 1, nums, n, prev, memo)

        let used = 0
        if (prev === -1 || nums[prev] < nums[i]) {
            used = rec(i + 1, nums, n, i, memo) + 1
        }

        if (prev !== -1) {
            memo[i][prev] = Math.max(notUsed, used)
            return memo[i][prev]
        }
        return Math.max(notUsed, used)
    }

    const res = rec(0, nums, n, -1, memo)
    console.log(memo)
    return res
};


class SolutionBinarySearch {
    /**
    * @param {number[]} nums
    * @return {number}
    */
    lengthOfLIS(nums) {
        const dp = [];
        dp.push(nums[0]);

        let LIS = 1;
        for (let i = 1; i < nums.length; i++) {
            // while increasing, increment LIS and add to Array
            if (dp[dp.length - 1] < nums[i]) {
                dp.push(nums[i]);
                LIS++;
                continue;
            }

            // once an element is does not increase the current find index to place nums[i]
            let left = 0,
                right = dp.length - 1;
            while (left < right) {
                const mid = Math.floor((left + right) / 2);
                if (dp[mid] < nums[i]) {
                    // nums[i] greater, must be on right. If final left index is most right in dp, it is preferrable since a lesser value will replace nums[dp.length - 1] so that it has better chance of increasing the subsequence
                    left = mid + 1;
                } else {
                    // nums[i] lesser, must be on left. By filling the left, if enough new values fill the original dp it will start increasing the LIS.
                    right = mid;
                }
            }
            dp[left] = nums[i];
        }

        return LIS;
    }
}
