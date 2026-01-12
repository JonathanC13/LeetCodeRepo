// https://leetcode.com/problems/missing-number/

/**
1. Assumptions
    1. None

2. input validation
    1. nums
        - nums instanceof Array
        - nums.length >= 0
        - nums only contains numbers from 0 to n

3. time and space constraints
    BTTC: O(n)
    Space: O(1)

4. edge cases and some test cases
    edge cases
    1. if n === 0
        return 0

    test cases
    1. missing number is < n
        inputs
            n = 3
            nums = [0, 1, 3]
        expected output
            2
    2. missing number is n
        inputs
            n = 3
            nums = [0, 1, 2]
        expected output
            3

5. visualize by drawing and manually solve
6. break into subproblems
    - marking solution
        Since range of numbers in Array contain only numbers from 0 to n, can mark at indexes which numbers in that range exist in the Array then iterate forward to find the index that has not been marked or if get to end the missing number is n.
        n = 5
        [0,1,2,4,5]

        Method of marking:
        1. iterate nums
            if nums[i] >= nums.length
                continue
            
            nums[abs(nums[i])] *= -1 // mark value at index nums[i] with negative. Need abs() since the value currently being used as an index marked from a previous value

        2. iterate for first positive, or at end return n
            be sure to check for -0

    - Binary operation solution with XOR
        iterate nums and XOR all values and indexes XOR num.length
        This final result is the missing number since if the value exists it will cancel out with the index of same value.

        eg 1, n = 3
        0, 1, 3 = 0 ^ 0, ^ 1 ^ 1, 3 ^ 2, ^ 3 = 2

        eg2, n = 3
        0, 1, 2 = 0 ^ 0 ^ 0 ^ 3 = 3

7. algos
    - Marking
    - XOR

8. data structures
    - Array

9. complexity
    Time: O(n)
    Space: O(1)

 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    if (nums.length === 0) {
        return 0
    }

    // marking solution
    // return marking(nums)

    // XOR solution
    let res = nums.length
    for (let i = 0; i < nums.length; i ++) {
        res ^= nums[i] ^ i
    }
    return res
};

const marking = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= nums.length) {
            continue
        }
        nums[Math.abs(nums[i])] *= -1
    }
    console.log(nums)

    for (let i = 0; i < nums.length; i++) {
        if (Object.is(nums[i], -0)) {
            continue
        }
        if (nums[i] >= 0) {
            return i
        }
    }
    return nums.length
}