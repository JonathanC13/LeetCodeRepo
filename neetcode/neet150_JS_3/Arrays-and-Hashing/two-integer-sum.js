// https://neetcode.io/problems/two-integer-sum/question

/**
 * 1. Assumptions
 *  1. i !== j
 * 
 * 2. input validation
 *  1. nums
 *      - nums instanceof Array
 *      - nums.length >= 0
 *      - nums elements are Numbers, full range
 *  2. target
 *      - typeof target === 'number'
 *      - full Number range
 * 
 * 3. time and space constraint
 *  BTTC: O(n)  // n = nums.length. 
 *  Space: O(n) // use n space so that all combination do not need to be checked resulting in Time O(n^2)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if nums.length < 2: return []
 * 
 *  test cases:
 *  1. 
 *      inputs
 *          nums = [3,4,5,6], target = 7
 *      expected output
 *          [0, 1]
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  Hash the difference the current nums[i] need to reach target
 *      - Map: k = difference, v = own index
 * 
 *  iterate nums and if the current nums[i] exists in the Hash table then a previous index needs the current to satisfy the target.
 * 
 * 7. aglos
 *  - Hashing
 * 
 * 8. data structures
 *  - Arrays
 *  - Hash table
 * 
 * 9. complexity
 *  Time: O(n)
 *  Space: O(n)
 * 
 */

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        if (nums.length < 2) {
            return []
        }

        const mapDiff = new Map()

        for (let i = 0; i < nums.length; i ++) {
            if (mapDiff.has(nums[i])) {
                return [mapDiff.get(nums[i]), i]
            }
            mapDiff.set(target - nums[i], i)
        }

        return []
    }
}
