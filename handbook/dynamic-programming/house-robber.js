// https://leetcode.com/problems/house-robber/

/**
1. Assumptions
    1. none

2. input validation
    1. nums
        - nums instanceof Array
        - nums.length >= 0
        - nums elements are Numbers

3. time and space constraints
    BTTC: O(n)  // n = nums.length. With memo Time O(n). Without it is O(n * 2^n) since at every house n *, 2^n paths since 2 options continuing.
    Space: O(n) // for memo

4. edge cases and some test cases
    edge cases
    1. if nums.length === 0: return 0
    2. if nums.length === 1: return nums[0]
    test cases
    1. 2 adjacent houses
        input
            nums = [3, 5]
        expected output
            5
    2. > 2 houses
        input
            nums = [10, 5, 1, 8]
        expected output
            18  // 10 + 8

5. visualize by drawining and manually solve
6. break into subproblems
    utilize recursive backtracking to evaluate house combinations
    utilize dynamic programming memoization so that previously solved subproblems are not solved again, therefore reducing time complexity

    at each house has 2 options
    do not rob, therefore can check if want to rob house + 1 since current house alarm not prepped

    rob, therefore cannot rob house + 1, go to house + 2 to continue

    return max(notRob, rob)

7. algos
    - dynamic programming with memoization

8. data structures
    - Arrays

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
    const n = nums.length
    const memo = new Array(n).fill().map((e) => [-1, []])   // [robbed amount, houses]

    const rec = function(i, n, nums, memo) {
        if (i >= n) {
            return [0, []]
        }
        
        if (memo[i][0] !== -1) {
            return memo[i]
        }

        let notRob = rec(i + 1, n, nums, memo)
        notRob = Array.from([notRob[0], Array.from(notRob[1])])

        let rob = rec(i + 2, n, nums, memo)
        rob = Array.from([rob[0], Array.from(rob[1])])
        rob[0] += nums[i]
        rob[1].push(i)

        if (notRob[0] >= rob[0]) {
            memo[i] = notRob
        } else {
            memo[i] = rob
        }
        return memo[i]
    }

    const res = rec(0, n, nums, memo)
    // console.log(memo)
    // console.log(res[1])
    return res[0]
};

const back = (i, n, nums, memo) => {
    if (i >= n) {
        return 0
    }
    if (memo[i][0] !== -1) {
        return memo[i][0]
    }

    const notRob = back(i + 1, n, nums, memo)
    const rob = back(i + 2, n, nums, memo) + nums[i]

    memo[i] = [Math.max(notRob, rob),[]]
    return memo[i][0]
}