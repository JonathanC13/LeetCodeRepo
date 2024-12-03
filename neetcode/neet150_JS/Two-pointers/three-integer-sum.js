// https://neetcode.io/problems/three-integer-sum

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        if (nums.length < 3) {
            return []
        }

        nums.sort((a, b) => {return a - b})
        const res = []
        console.log(nums)

        for (let i = 0; i < nums.length - 2; i ++) {
            if (nums[i] > 0) {
                break
            }

            if (i > 0 && nums[i] === nums[i - 1]) {
                continue
            }

            let l = i + 1
            let r = nums.length - 1

            while (l < r) {
                const sum = nums[i] + nums[l] + nums[r]
                
                if (sum < 0) {
                    l += 1
                } else if (sum > 0) {
                    r -= 1
                } else {
                    res.push([nums[i], nums[l], nums[r]])

                    l += 1
                    r -= 1

                    while (l < r && nums[l] === nums[l - 1]) {
                        l += 1
                    }
                }
            }
        }
        return res
    }
}
