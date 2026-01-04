// https://leetcode.com/problems/combination-sum-iv/

/**
1. Assumptions
    1. integers in Array nums are distinct
    2. integers are >= 0
    3. infinite value reuse.
    4. combinations are order reliant

2. input validation
    1. nums
        - nums instanceof Array
        - nums.length >= 0
        - nums elements are distinct Numbers

    2. target
        Number

3. time and space constraints
    BTTC: O(n * target)
    Space: O(n + target)

4. edge cases and some test cases
    edge cases
    1. if nums.length === 0: return 0
    test cases
    1.
        inputs
            nums = [1,2,3], target = 4
        expected output
            7
    2.
        inputs
            nums = [9, 4], target = 3
        expected output
            0
    
5. visualize by drawing and manually solve
6. break into subproblems
    - start with recursive backtracking
        base case 1:
        if (sum === target) {
            return 1
        }

        base case 2:
        if sum > target
            return 0

        ways = 0
        iterate the nums and try to use each in the combination
            ways += rec(sum + nums[j], ...)

        return ways

        Time: O(n * n^n)

    - To reduce time complexity 
        Array for memoization
            - length: target + 1
            - fill with -1
            - each index is the number of ways to target

        Time: O(n * target)

    - If allow negatives
        1. Remove base case  sum > target since it can go over and then come back
        2. memoziation Array has to be of (Max(abs(pos sum), abs(neg sum)) * 2) + 1, and the center will be at floor(len / 2). Therefore to find the current sum in the 
        memoization Array, index = sum + floor(len / 2)

7. algos
    - recursive backtracking
    - dp memoization

8. data structures
    - Arrays

9. complexity
    BTTC: O(n * target)
    Space: O(target)
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    if (nums.length === 0) {
        return 0
    }

    const rec = (nums, target, sum, memo) => {
        if (sum === target) {
            return 1
        }
        if (sum > target) {
            return 0
        }
        if (memo[sum] !== -1) {
            // console.log('hit', sum)
            return memo[sum]
        }

        let ways = 0
        for (let num of nums) {
            ways += rec(nums, target, sum + num, memo)
        }

        memo[sum] = ways
        return memo[sum]
    }

    const memo = new Array(target).fill(-1)
    const res = rec(nums, target, 0, memo)
    // console.log(memo)
    return res
};