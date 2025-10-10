// https://leetcode.com/problems/maximum-product-subarray/description/

/**
1. Assumptions
    - None

2. Input validation
    ...

3. Time/Space constraints
    - Time: O(n)    // one pass
    - Space: O(1)

4. some test cases and edge cases
    edge cases
    - if nums.length === 0: return 0
    test cases
    - nums = [] // expected = 0
    - nums = [1, 2, 0, 4]   // expected = 4
    - nums = [-1, 0, 2, -2] // expected = 2
    - nums = [5, -2, 4] // expected = 5
    - nums = [5, -2, 4, -1] // expected 40

5. visualize by drawing and manually solve
    - Cannot use sliding window since there is no condition to start reducing from the left. if negative cannot start reducing since there could be another negative to negate.

    - prefix and suffix
        - in case of a 0, when the prefix/suffix goes to 0 reset to 1
        - in case of odd number of values that is <= 0. the prefix or suffix will get the max product before evaluating into its product
        - in case of even number of values. the prefix and suffix will iterate the entire Array and get the max product

6. break into subproblems
    - one loop, iterate prefix prod and suffix prod

7. determine algorithm
    - linear iteration

8. data structure
    - Input Array

9. Complexity
    - Time: O(n)
    - Space: O(1)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    if (nums.length === 0) {
        return 0
    }
    const n = nums.length
    let maxProd = nums[0]
    let prefix = 1
    let suffix = 1
    for (let i = 0; i < n; i ++) {
        prefix *= nums[i]
        suffix *= nums[n - 1 - i]
        maxProd = Math.max(maxProd, prefix, suffix)
        if (prefix === 0) {
            prefix = 1
        }
        if (suffix === 0) {
            suffix = 1
        }
    }

    return maxProd
};