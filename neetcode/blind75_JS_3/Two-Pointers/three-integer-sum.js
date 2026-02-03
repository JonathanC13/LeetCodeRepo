// https://neetcode.io/problems/three-integer-sum/question

/**
 * 1. Assumptions
 *  1. None
 * 
 * 2. input validation
 *  1. nums
 *      - nums instanceof Array
 *      - nums.length >= 0
 *      - nums's elements are Numbers
 * 
 * 3. time and space constraints
 *  BTTC: O(n)
 *  Space: O(1)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if nums.length < 3
 *      return []
 * 
 *  test cases
 *  1. no possible duplicate triplets
 *      inputs
 *          nums = [-2, 0, 1, 1]
 *      expected output
 *          [[-2, 1, 1]]
 *  2. possible duplicate triplet
 *      inputs
 *          nums = [-2, -2, 0, 1, 1]
 *      expected output
 *          [[-2, 1, 1]]
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  sort the nums in non-descending order, this is so duplicate triplets can be avoided by moving pointers until not equal previous value.
 * 
 *  2 pointers;
 *  while iterate i from 0 to end and nums[i] <= 0 since sorted in non-descending if nums[i] > 0 then impossible to sum to 0
 *      1. left pointer start at i + 1
 *      2. right pointer start at end
 *      
 *      while (l < r) {
 *          if sum === 0
 *              push to res
 * 
 *              move l and r while the value is the same as previous index's value to avoid duplicate triplet
 *          else
 *              determine whether l or r moves:
 *              1. if sum > 0: need a less positive number, move right pointer left
 *              2. else left pointer right
 *
 *      }
 * 
 * 7. algos
 *  - 2 Pointers
 * 
 * 8. datastructures
 *  - Arrays
 * 
 * 9. complexity
 *  Time: O(n)
 *  Space: O(1)
 * 
 */

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        if (nums.length < 3) {
            return []
        }

        nums.sort((a, b) => a - b)

        const res = new Array()
        let i = 0
        while (i < nums.length - 2 && nums[i] <= 0) {
            
            let l = i + 1
            let r = nums.length - 1
            while (l < r) {
                const sum = nums[i] + nums[l] + nums[r]
                if (sum === 0) {
                    res.push([nums[i], nums[l], nums[r]])
                    
                    // move pointers for next triplet and avoid duplicate
                    const lPrev = nums[l]
                    l += 1
                    while (l < r && nums[l] === lPrev) {
                        l += 1
                    }

                    const rPrev = nums[r]
                    r -= 1
                    while (l < r & nums[r] === rPrev) {
                        r -= 1
                    }                   
                } else if (sum > 0) {
                    r -= 1
                } else {
                    l += 1
                }
            }

            const prev = nums[i]
            i += 1
            while (i < nums.length - 2 && nums[i] === prev) {
                i += 1
            }
        }

        return res
    }
}
