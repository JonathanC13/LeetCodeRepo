// https://neetcode.io/problems/find-duplicate-integer

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let slow = 0
        let fast = 0

        while (true) {
            slow = nums[slow]
            fast = nums[nums[fast]]

            if (slow === fast) {
                break
            }
        }
        
        let newSlow = 0
        while (true) {
            slow = nums[slow]
            newSlow = nums[newSlow]

            if (slow === newSlow) {
                return slow
            }
        }

        return -1
    }
}
