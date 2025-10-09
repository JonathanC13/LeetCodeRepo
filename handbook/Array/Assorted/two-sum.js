// https://leetcode.com/problems/two-sum/description/

/**
1. Assumptions:
    - Only need to return 1 solution, if many exist

2. Input validation
    - nums instanceof Array, typeof target === 'Number'
    - length: 
        if (nums.length === 0) {return []}
    - Content:
        nums only contains Numbers
        target is a Number

3. Time/space constraints:
    BTTC: Time: O(n)    // one pass
    Space: O(n)

4. test cases and edge cases
    edge cases
    - nums = [], target = 1
    test cases
    - nums = [], target = 1 // expected []
    - nums = [1, 3, 2], target = 3  // expected [0, 2]

5. visualize by drawing and manually solve
    brute force method
        - for each index i, search forward, j = i + 1, for the value that sums to target. Time: O(n^2)

    Using a Map to hold the difference needed for a value at an index so that when Map contains nums[i] it indicates another index needed this value to sum to target
        - Time: O(n)
        - Space: O(n)   // for Map

6. Break into subproblems

7. Determine algorithm
    - linear iteration
    - Map for tabulation

8. Determine data structures
    - Input Array
    - Map

9. Complexity
    - Time: O(n)
    - Space: O(n)
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    if (nums instanceof Array === false || nums.length === 0) {
        return []
    }

    const reqs = new Map()
    for (let i = 0; i < nums.length; i ++) {
        if (reqs.has(nums[i])) {
            return [reqs.get(nums[i]), i]
        } else {
            reqs.set(target - nums[i], i)
        }
    }

    return []
};