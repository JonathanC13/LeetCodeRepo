// https://neetcode.io/problems/three-integer-sum

/*
for 1st pointer left = 0 to nums.length - 2 
    to avoid duplicates if nums[left] === nums[left - 1]: continue

    2nd pointer i = left + 1
    3rd pointer right = nums.length - 1

    while (i < right) {
        sum = nums[left] + nums[i] + nums[right]
        if sum < 0
            need more positive number, i += 1
        else if sum > 0
            need less positive number, right -= 1
        else
            // 0
            res.push([nums[left], nums[i], nums[right]])

            i += 1
            // to avoid duplicate, move i until the prev value is not equal to the current
            while (i < right && nums[i - 1] === nums[i]) {
                i += 1
            }
    }
    return res

- Time: O(n^2) // n for left pointer, and n for i to right
- Space: O(n)
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

        nums.sort((a,b) => {return a - b})
        console.log(nums)

        let res = []

        for (let left = 0; left < nums.length - 2; left ++) {

            if (left > 0 && nums[left - 1] === nums[left]) {
                // to avoid triplets
                continue
            }

            let i = left + 1
            let right = nums.length - 1
            while (i < right) {
                const sum = nums[left] + nums[i] + nums[right]
                if (sum < 0) {
                    // need more positive number
                    i += 1
                } else if (sum > 0) {
                    // need less positive number 
                    right -= 1
                } else {
                    res.push([nums[left], nums[i], nums[right]])
                    
                    i += 1
                    // to avoid duplicate triplets, need to more the left pointer until previous value is different
                    while (i < right && nums[i - 1] === nums[i]) {
                        i += 1
                    }
                }
            }
        }

        return res
    }
}
