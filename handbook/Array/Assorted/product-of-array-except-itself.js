// https://leetcode.com/problems/product-of-array-except-self/description/

/**
1. Assumptions
    - None

2. Input validation
    - nums instanceof Array
    - length:
        if nums.length === 0: return []
    - content: all values in nums are Numbers

3. time/space constraints
    - Time: O(n)
    - Space: O(n)

    - additional: cannot use division

4. some test cases and edge cases
    edge cases
    - if nums.length === 0: return []
    test cases
    - nums = [] // expected = []
    - nums = [-1, 1, 2] // expected = [2, -2, -1]
    - nums = [-1, 0, 2] // expected = [0, -2, 0]
    - nums = [-1, 0, 2, 0]  // expected = [0, 0, 0, 0]

5. visualize by drawing and manually solve
    Brute force with division
        - iterate nums to count the number of zeroes.
        - if the number of zeros > 1 then the result Array is all 0s. Case 1: > 1 zero
        - iterate nums and get the product of all the Numbers that are not 0
        - iterate nums 
            if count of zeros !== 0 // case 2: 1 zero
                if the nums[i] === 0: then res[i] = prod    // since 1 zero and exclude itself, the res[i] is the prod
                else res[i] = 0 // since the one zero zeroed the other index values
            else
                // case 3: no zeroes.
                res[i] = prod / nums[i] // divide to exclude self from prod

        - Time: O(n)    // n + n + n ~= n
        - Space: O(1)

    Without division
        - create an Array for the suffix products, excluding the value at i
        - create var to hold the current prefix prod, init = 1
        - iterate nums
            res[i] = prefix * suffix[i]
            prefix = prefix * nums[i]

        - Time: O(n)    // n + n ~= n
        - Space: O(n)   // n for suffix Array

6. break into subproblems

7. Determine algorithm
    - suffix product
    - linear iteration

8. Determine data strucutures
    - Input Array

9. Complexity
    - Time: O(n)
    - Space: O(n)

 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    if (nums.length === 0) {
        return []
    }

    const n = nums.length
    const res = new Array(n).fill(1)
    for (let i = n - 2; i >= 0; i --) {
        res[i] = res[i + 1] * nums[i + 1]
    }
    let prefix = 1
    for (let i = 0; i < n; i ++) {
        res[i] = prefix * res[i]
        prefix = prefix * nums[i]
    }

    return res
};