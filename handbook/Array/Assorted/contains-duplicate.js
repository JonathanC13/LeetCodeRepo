// https://leetcode.com/problems/contains-duplicate/description/

/**
1. Assumptions
    - None

2. Input validation
    - nums instanceof Array
    - length:
        if nums.length === 0: return false
    - content: nums contains only Numbers

3. Time/space constraints
    - BTTC: Time: O(n)  // one pass
    - Space: O(n)   // for one pass, need space O(n)

4. some examples and edge cases
    edge cases
    - if nums.length === 0: return false
    some test cases
    - nums = [] // expected = false
    - nums = [1, 2, 3]  // expected = false
    - nums = [1, 2, 1]  // expected = true

5. visualize by drawing and manually solve
    brute force Time: O(n^2)
        for each index i, iterate j = i + 1 in search if the value at nums[i] appears again

    One pass, use Set to store the seen values already. if nums[i] is already in the Set, return true
        - Time: O(n)
        - Space: O(n)

6. break into subproblems

7. Determine algorithm
    - linear iteration

8. Data structures
    - Input Array
    - Set

9. Complexity
    - Time: O(n)
    - Space: O(n)
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    if (nums.length === 0) {
        return false
    }

    const set = new Set()
    for (let i = 0; i < nums.length; i ++) {
        if (set.has(nums[i])) {
            return true
        } else {
            set.add(nums[i])
        }
    }

    return false
};