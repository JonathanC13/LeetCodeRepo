// https://leetcode.com/problems/single-number/

/**
1. Assumptions
    1. None

2. input validation
    1. nums
        - nums instanceof Array
        - nums.length > 0
        - nums contains Numbers

3. time and space constraints
    BTTC: O(n)
    Space: O(1)

4. edge cases and some test cases
    edge cases
    1. if nums.length === 1: return nums[0]

    test cases
    1. 
        inputs
            nums = [4,1,2,1,2]
        expected output
            4

5. visualize by drawing and manually solve
6. break into subproblems
    XOR every element in nums together. The elements that appear twice will cancel eachother and the element that appears once will remain at the end

7. algos
    - Bitwise operators

8. data structures
    - Array

9. Complexity
    - Time: O(n)
    - Space: O(1)

 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    if (nums.length === 1) {
        return nums[0]
    }

    let res = 0
    for (let i = 0; i < nums.length; i ++) {
        res ^= nums[i]
    }

    return res
};