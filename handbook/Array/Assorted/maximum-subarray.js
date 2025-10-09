// https://leetcode.com/problems/maximum-subarray/description/

/**
1. Assumptions
    - None

2. input validation
    - nums instanceof Array
    - length:
        if nums.length === 0: return 0
    - content: all values in nums are Numbers

3. Time/space constraints
    - Time: O(n)    // one pass
    - Space: O(1)

4. some test cases and edge cases
    edge cases
    - if nums.length === 0: return 0
    test cases
    - nums = []
    - nums = [1, -2, 3] // expected = 3
    - nums = [2, -1, 2] // expected = 3

5. visualize by drawing and manually solve
    - iterate left to right
        add nums[i] to currTotal for the subarray
        update maxSeen
        if (currTotal < 0)
            reset currTotal to 0 since it would not able to achieve the solution if negative preserved in next addition

    Time: O(n)
    Space: O(1)

    - Could have used sliding window since want the subarray, but no need to reduce the window from the left until positive just reset sum to 0 since once the sum goes negative the value at that index was large enough negative to negate all values in the current window already.

6. break into subproblems

7. determine algorithms
    - linear iteration

8. determine data structures
    - Input Array

9. Complexity
    - Time: O(n)
    - Space: O(1)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length === 0) {
        return 0
    }

    let currSum = 0
    let maxSum = nums[0]    // do not init to 0 since max number could be negative
    for (let i = 0; i < nums.length; i ++) {
        currSum += nums[i]
        maxSum = Math.max(maxSum, currSum)
        if (currSum < 0) {
            currSum = 0
        }
    }

    return maxSum
};