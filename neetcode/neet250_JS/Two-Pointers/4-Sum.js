// https://leetcode.com/problems/4sum/description/

/*
Reduce K sum problem into K - 1 sum problem until 2 Sum problem

Time: O(N ^ K - 1). // each N has K - 1 options. e.g. 2 sum. either take or move on. 3 sum; take, move on, 
Space: O(n)
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    
    const kSum = (nums, target, k, idx) => {
        const res = []

        if (idx >= nums.length) {
            return res
        }

        if (k === 2) {
            let left = idx
            let right = nums.length - 1

            while (left < right) {
                const sum = nums[left] + nums[right]

                if (sum < target) {
                    left += 1
                } else if (sum > target) {
                    right -= 1
                } else {
                    console.log(nums[left], nums[right])
                    res.push([nums[left], nums[right]])

                    left += 1
                    while (left < right && nums[left] === nums[left - 1]) {
                        left += 1
                    }
                }
            }
        } else {
            for (let i = idx; i <= nums.length - k; i ++) {
                if (i > idx && nums[i - 1] === nums[i]) {
                    console.log(i)
                    continue
                }

                const ret = kSum(nums, target - nums[i], k - 1, i + 1)
                if (ret.length !== 0) {
                    ret.forEach((itm) => {
                        itm.push(nums[i])
                    })
                    res.push(...ret)
                }
            }
        }

        return res

    }

    nums.sort((a, b) => {return a - b})
    return kSum(nums, target, 4, 0)
};