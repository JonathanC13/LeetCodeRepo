// https://leetcode.com/problems/house-robber-ii/

/**
1. Assumptions
    1. None

2. input validation
    1. nums
        - nums instanceof Array
        - nums.length >= 0
        - nums's elements are Numbers that are >= 0

3. time and space constraints
    BTTC: O(n)
    Space: O(n)

4. edge cases and some test cases
    edge cases
    1. if nums.length === 0: return 0
    2. if nums.length === 1: return nums[0]
    test cases
    1. highest value houses on start and end
        inputs
            nums = [20, 5, 10]
        expected output
            20

    2. max amount from multiple houses
        inputs
            nums = [1, 2, 3, 1]
        expected output
            4   // indexes: 0, 2

5. visualize by drawing and manually solve
6. break into subproblems
    - base recursive backtracking solution first
        base case 1: no more houses to evaluate
        if (i >= nums.length)
            return 0

        // 2 paths
        // 1. not rob, 2. rob.
        // Then return the path that generated the maximum amount

        const notRob = rec(i + 1, ...)

        const rob = rec(i + 2, ...) + nums[i]

        return Math.max(notRob, rob)

        Time: O(n * 2^n)

    But since the ends are in circular arrangement. Conduct the recursive solution 2 times; 1st excluding the first house and then 2nd to exclude the last house, this guarentees that the first and last are not chosen together. Return the max of the two.

    - Reduce time complexity by adding dynamic programming memoization
        - 1D Array
            - length = nums.length
            - fill with -1
            - each index represents the max amount that can be robbed from the houses ahead of the current index

        Time: O(n)
        Space: O(n)

7. algos
    - recursive backtracking
    - dp memoization

8. data structures
    - recursion stack
    - Array

9. complexity
    Time: O(n)
    Space: O(n)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 0) {
        return 0
    }
    if (nums.length === 1) {
        return nums[0]
    }

    const rec = (nums, i, memo) => {
        if (i >= nums.length) {
            return 0
        }
        if (memo[i] !== -1) {
            // console.log('hit')
            return memo[i]
        }

        const maxPath = Math.max(rec(nums, i + 1, memo), rec(nums, i + 2, memo) + nums[i])
        memo[i] = maxPath
        return memo[i]
    }

    let memo = new Array(nums.length).fill(-1)
    const exStart = rec(nums.slice(1), 0, memo)
    // console.log(memo)
    memo = new Array(nums.length).fill(-1)
    const exEnd = rec(nums.slice(0, nums.length - 1), 0, memo)
    // console.log(memo)

    return Math.max(exStart, exEnd)
};