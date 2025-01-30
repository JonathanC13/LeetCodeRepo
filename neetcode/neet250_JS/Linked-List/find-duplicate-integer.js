// https://neetcode.io/problems/find-duplicate-integer

/*
- edge case 1: if (nums.length < 2) {
    return null
}

Without modifying the the array nums. So, do not sort.
O(1) extra space. So, no hash map

Treat each value at the ith position as the index it links to. 
With this mechanism, perform cycle detection and break when slow and fast pointer meet.
Then initialize another itr at 0

walk itr and slow by one until they meet. The value is the duplicate.

- Time: O(n)
- Space: O(1)
*/

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        if (nums.length < 2) {
            return null
        }

        let slow = 0
        let fast = 0

        while (fast <= nums.length) {
            slow = nums[slow]
            fast = nums[nums[fast]]

            if (slow === fast) {
                break
            }
        }
        
        let itr = 0
        while (slow <= nums.length) {
            itr = nums[itr]
            slow = nums[slow]

            if (itr === slow) {
                return itr
            }
        }

        return null
    }
}
