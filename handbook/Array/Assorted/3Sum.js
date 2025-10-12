// https://leetcode.com/problems/3sum/description/

/**
1. Assumptions:
    - The numbers in each triplet can be in any order, just do not have duplicate triplets

2. Input validation
    - nums instanceof Array
    - Length:
        if (nums.length < 3): return []
    - Content:
        nums contains Numbers

3. Time/space constraints
    - Time: O(n^2)    
    - Space: O(m)   // m for results

4. some test cases and edge cases
    edge cases
    - if nums.length < 3: return []
    test cases
    - nums = [] // expected = []
    - nums = [3, 2] // expected = []
    - nums = [-3, 0, 3, 2, 1]   // expected = [[-3, 0, 3], [-3, 2, 1]]

5. visualize by drawing and manually solve
    since the target is 0, sort the nums in non-descending order.
    Three pointer solution
        1. a left pointer at index 0 which will be the most negative value, left pointer and end of nums defines the search space
        Two pointers within to search for the two other values of the triplet
        2. a right pointer at the end which is the most positive value.
        3. a pointer at left + 1 that will iterate to the right pointer to find the triplet
            break early when sum > 0 since going forward will just get a >= pos sum

        To avoid duplicate triplets. When pointers are moved, move until not the previous value

6. break into subproblems

7. determine algorithm
    - Sort to prep data
    - three pointers

8. data structures
    - Input Array

9. Complexity
    - Time: O(n^2)
    - Space: O(m)
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (nums.length < 3) {
        return []
    }

    nums.sort((a, b) => a - b)

    const res = new Array()
    const n = nums.length
    let l = 0
    while (l + 2 < n) {
        let i = l + 1
        let r = n - 1
        while (i < r) {
            const sum = nums[l] + nums[i] + nums[r]
            if (sum === 0) {
                res.push([nums[l], nums[i], nums[r]])

                // move i until not prev
                let prev = nums[i]
                i += 1
                while (i < r && nums[i] === prev) {
                    i += 1
                }

                // also move right leftward when sum === 0 since nums[i] moving rightward getting increasing values, need to decrease nums[r] to try to reach 0
                prev = nums[r]
                r -= 1
                while (i < r && nums[r] === prev) {
                    r -= 1
                }
            } else if (sum > 0) {
                // reduce the greater number
                r -= 1
            } else {
                i += 1
            }
        }

        let prev = nums[l]
        l += 1
        while (l + 2 < n && nums[l] === prev) {
            l += 1
        }
        
    }

    return res
};