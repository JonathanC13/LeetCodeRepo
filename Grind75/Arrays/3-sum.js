// https://leetcode.com/problems/3sum/description/

/**
sort the nums in non-descending order

let i = 0, as the first value of the potential triplet

while (i < nums.length - 2) {
    l = i + 1
    r = nums.length - 1

    while (l < r) 
        sum = nums[i] + nums[l] + nums[r]
        if (sum === 0) {
            res.push([nums[i], nums[l], nums[r]])

            move l forward until no dup of prev
            move r backward until no dup of prev

        else if sum > 0
            need a less negative
            l += 1
        else 
            r -= 1
    
    move i forward until not the same as prev
}

return res

- Time: O(n^2)
- Space: O(n)   n for result
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (nums.length < 3) {
        return []
    }

    nums.sort((a, b) => {return a - b})
    const res = new Array()

    let i = 0
    while (i < nums.length - 2) {
        let l = i + 1
        let r = nums.length - 1

        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r]
            if (sum === 0) {
                res.push([nums[i], nums[l], nums[r]])

                let prev = nums[l]
                l += 1
                while (l < r && prev === nums[l]) {
                    l += 1
                }

                prev = nums[r]
                r -= 1
                while (l < r && prev === nums[r]) {
                    r -= 1
                }
            } else if (sum < 0) {
                l += 1
            } else {
                r -= 1
            }
        }
        let prev = nums[i]
        i += 1
        while (i < nums.length - 2 && prev === nums[i]) {
            i += 1
        }
    }

    return res
};