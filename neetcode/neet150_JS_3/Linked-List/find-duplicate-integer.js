// https://neetcode.io/problems/find-duplicate-integer/question

/**
 * 1. Assumptions
 *  1. ...
 * 
 * 2. input validation
 *  1. nums
 *      - nums instanceof Array
 * 
 * 3. time and space constratints
 *  BTTC: O(n)
 *  Space: O(1)
 * 
 * 4. edge cases and some tet cases
 *  edge cases
 *  1. if nums.length === 2: return nums[0]
 * 
 *  test cases
 *  1. appears twice
 *      inputs
 *          nums = [1,2,3,2]
 *      expected output
 *          2
 *  2. > 2 times
 *      inputs
 *          nums = [1,2,3,2,2]
 *      expected output
 *          2
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  1. With extra space, can use Array of length n + 1 and mark visited, if re-visited then that number is the duplicate
 * 
 *  2. without extra space, hashing solution that modifies the array
 *      since the numbers are [1,n] and nums.length is n + 1
 *      for each num 
 *          idx = nums[abs(nums[i]) - 1]    // needs abs since this index already marked
 *          if nums[idx] < 0   
 *              already marked, therefore duplicate. return abs(nums[i])
 *          mark visited in nums[idx] *= -1
 * 
 *  3. Floyd cycle
 *      1. Presence of a Cycle: Start both pointers at the head of the list. If the fast pointer reaches the end (null), there is no cycle. Eventually, they meet somewhere inside the cycle (not necessarily at the start).
 *      2. Finding the Start of a Cycle: After detecting a cycle, reset one pointer (e.g., the tortoise) to the head and keep the other (the hare) at the meeting point. Move both pointers one step at a time. The node where they meet is the start of the cycle, which is the index where the number appears > 2 times.
 * 
 *      Based on: distance from start TO entrance = distance from meeting point TO entrance
 * 
 *      Note:
 *      Be consistent with your starts for #1 and #2
 *      e.g. if #1. slow = 0, and fast = 0, then #2 slow reset to 0
 *      e.g. if #1. slow = nums[0] and fast = nums[0], it is already on the second node of the linked list. Therefore #2, slow reset to slow = nums[0]
 * 
 * 7. algos
 *  - Floyd cycle detection
 * 
 * 8. data structures
 *  - Array
 *  - Linked list
 * 
 * 9. complexity
 *  Time: O(n)
 *  Space: O(1)
 */

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        if (nums.length === 2) {
            return nums[0]
        }

        // 1. find meeting within cycle
        let slow = 0
        let fast = 0
        do {
            slow = nums[slow]
            fast = nums[nums[fast]]
        } while (slow !== fast)

        // 2. find entrance of cycle which is the duplicate
        slow = 0
        while (slow !== fast) {
            slow = nums[slow]
            fast = nums[fast]
        }
        return slow
    }
}
