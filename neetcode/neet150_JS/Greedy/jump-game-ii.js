// https://neetcode.io/problems/jump-game-ii

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
        if (nums.length < 2) {
            return 0
        }

        const n = nums.length
        let jumps = 0

        let i = 0
        while (i < n - 1) {
            if (nums[i] === 0) {
                return -1
            }

            jumps += 1
            let localMaxI = i + 1
            for (let j = localMaxI + 1; j <= i + nums[i]; j ++) {
                if (j >= n - 1) {
                    localMaxI = j
                    break
                }

                if (nums[j] >= nums[localMaxI]) {
                    localMaxI = j
                }
            }
            
            i = localMaxI

        }

        return jumps
    }
}
