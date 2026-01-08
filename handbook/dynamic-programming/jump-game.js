// https://leetcode.com/problems/jump-game/

/**
Either greedy with tabulation or recursive backtracking with memo (checks jumps from max to 1)
Do both

1. Assumptions
    1. nums elements are Numbers with values >= 0

2. input validation
    1. nums
        - nums instanceof Array
        - nums.length >= 0
        - nums elements are Numbers with values >= 0

3. time and space constraints
    BTTC: O(n * avg jump size)
    Space: O(n)

4. edge case and some test cases
    edge cases
    1. if nums.length <= 1: return true

    test cases
    1. can reach
        inputs
            nums = [1, 2, 3, 0, 0]
        expected output
            true    // indexes: 0, 2, 4

    2. cannot reach
        inputs
            nums = [1, 2, 1, 0, 0]
        expected output
            false

5. visualize by drawning and manually solve
6. break into subproblems
    1st solution: recursive backtracking with memo
        try jumps from max down to 1 to see if a path can reach last index

    2nd solution: Greedy dp tabulation
        word backward last index to first and store if current index can >= last index OR tabulation[i + jump (check all)] === true

7. algos
    - recursive backtracking with memoization
    - Greedy with tabulation

8. data structures
    - Arrays

9. Complexity
    Time: O(n * avg jump size)
    Space: O(n)

 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if (nums.length <= 1) {
        return true
    }

    // const memo = new Array(nums.length).fill(null)
    // const resRec = rec(nums, 0, memo)
    // console.log(memo)
    // return resRec

    const tab = new Array(nums.length).fill(false)
    const resGreedy = greedy(nums, tab)
    console.log(tab)
    return resGreedy

};

const greedy = function(nums, tab) {
    for (let i = nums.length - 1; i >= 0; i --) {
        for (let jump = nums[i]; jump >= 1; jump --) {
            if (i + jump >= nums.length - 1 || tab[i + jump] === true) {
                tab[i] = true
                break
            }
        }
        
    }

    return tab[0]
}

const rec = (nums, i, memo) => {
    if (i >= nums.length - 1) {
        return true
    }
    if (memo[i] !== null) {
        return memo[i]
    }

    // paths are max jump down to 1
    for (let jump = nums[i]; jump >= 1; jump --) {
        if (rec(nums, i + jump, memo) === true) {
            memo[i] = true
            return true
        }
    }

    memo[i] = false
    return false
}