// https://leetcode.com/problems/partition-equal-subset-sum/

/**
1. Assumptions
    1. None

2. input validation
    1. nums
        - nums instanceof Array
        - nums.length >= 0
        - nums elements are of datatype Number

3. time and space constraints
    BTTC: O(n * target)    // without memo: Time n * 2^n //n numbers *, each number has 2 paths ^ remaining numbers for path
    Space: O(n * target)

4. edge cases and some test cases
    edge cases
    1. if nums.length === 0: return true
    2. if nums.length === 1: return false
    3. if the sum of all the elements is odd, then it is already impossible

    some test cases
    1. odd sum
        inputs
            nums = [1, 2, 3, 5]
        expected output
            false
    2. can partition
        inputs
            nums = [1, 5, 11, 5]
        expected output
            true

5. visualize by drawing and manaully solve
6. break into subproblems
    recursive backtracking
        base case 1
        if sum === target
            return true

        base case 2
        if sum > target
            return false

        // 2 paths;
        // 1. do not use current element in sum, 2. use current element in sum
        return rec(i + 1, sum, ...) || rec(i + 1, sum + nums[i])

    To reduce time complexity need to add memoization
        2D Matrix
            - Row: indexes of nums
            - col: target + 1
            - fill with null

        

7. algos
    - recursive backtracking

8. data structures
    - Array

9. complexity

 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    if (nums.length === 0) {
        return true
    }
    if (nums.length === 1) {
        return false
    }

    let total = 0
    for (let num of nums) {
        total += num
    }

    if (total % 2 === 1) {
        return false
    }
    
    const target = total / 2

    const rec = function(nums, i, sum, target, memo) {
        if (sum === target) {
            return true
        }
        if (i >= nums.length || sum > target) {
            return false
        }
        if (memo[i][sum] !== null) {
            // console.log('hit', i, sum, memo[i][sum])
            return memo[i][sum]
        }

        const notUse = rec(nums, i + 1, sum, target, memo)
        if (notUse) {
            return true
        }
        
        const use = rec(nums, i + 1, sum + nums[i], target, memo)
        if (use) {
            return true
        }

        memo[i][sum] = notUse || use
        return memo[i][sum]
    }

    const memo = new Array(nums.length).fill().map((e) => new Array(target + 1).fill(null))
    const res = rec(nums, 0, 0, total / 2, memo)
    // console.log(memo)
    return res

};