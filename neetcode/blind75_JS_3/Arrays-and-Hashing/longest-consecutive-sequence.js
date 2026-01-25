// https://neetcode.io/problems/longest-consecutive-sequence/question

/**
 * 1. Assumptions
 *  1. the longest consecutive subsequence does not have to be in order they appear in the original Array
 * 
 * 2. input validation  
 *  1. nums
 *      - nums instanceof Array
 *      - nums.length >= 0
 *      - nums's elements are Numbers
 * 
 * 3. time and space constraints
 *  BTTC: O(n)
 *  Space: O(n)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if nums.length <= 1: return nums.length
 * 
 *  test cases
 *  1. multiple consecutive, return longest
 *      inputs
 *          nums = [2,20,4,10,3,4,5]
 *      expected output
 *          4
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  iterate nums
 *      if value not in the Map
 *          Add each number into a hash map where key = number, value = the longest sequence length at insertion or updated head/tail for new length
 *              - add sequence length of value - 1 and value + 1
 * 
 * 7. algos
 *  - Hashing
 * 
 * 8. data structures
 *  - Hash map
 * 
 * 9. complexity
 *  Time: O(n)
 *  Space: O(n)
 * 
 */

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length <= 1) {
            return nums.length
        }

        const mapConsec = new Map()
        let longest = 0

        for (let i = 0; i < nums.length; i ++) {
            if (!mapConsec.has(nums[i])) {
                // add to map 1 + sequence length (value - 1) + (value + 1)
                mapConsec.set(nums[i], 1 + (mapConsec.has(nums[i] - 1) ? mapConsec.get(nums[i] - 1) : 0) + (mapConsec.has(nums[i] + 1) ? mapConsec.get(nums[i] + 1) : 0))
                longest = Math.max(longest, mapConsec.get(nums[i]))
                // if this number contributed to a sequence, must update the head and tail so that other values that extend will has the correct length
                // to get to head = nums[i] + seq length of (nums[i] + 1)
                mapConsec.set(nums[i] + (mapConsec.has(nums[i] + 1) ? mapConsec.get(nums[i] + 1) : 0), mapConsec.get(nums[i]))

                // tail = nums[i] - seq length of (nums[i] - 1)
                mapConsec.set(nums[i] - (mapConsec.has(nums[i] - 1) ? mapConsec.get(nums[i] - 1) : 0), mapConsec.get(nums[i]))
            }
        }

        return longest
    }
}
