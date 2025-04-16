// https://neetcode.io/problems/three-integer-sum

/*
edge case 1: if nums.length < 3: return []

sort the nums in non-descending order

3 pointers
    1 for each value

initial
    1. l = 0
    2. l2 = l + 1
    3. r = l2 + 1

iterate l to < l - 2
    if nums[l] > 0: break since sorted it will not go to 0

    if prev number is the same, continue so that it will not generate the same triplet

    let l = l + 1
    let r = length - 1

    while l < r
        find target 
        if sum > 0
            r --
        else if sum < 0
            l ++
        else
            found
            to not generate a duplicate triplet, move l until value not the same as the one used

- Time: O(n^2)  // n log n to sort, + n^2 to iterate. n^2 is much larger therefore n^2
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
        nums.sort((a,b) => a - b)
        const res = []

        for (let i = 0; i < nums.length - 2; i ++) {
            if (nums[i] > 0) {
                break
            }

            if (i > 0 && nums[i - 1] === nums[i]) {
                continue
            }

            let l = i + 1
            let r = nums.length - 1
            while (l < r) {
                const sum = nums[i] + nums[l] + nums[r]
                if (sum > 0) {
                    r -= 1
                } else if (sum < 0) {
                    l += 1
                } else {
                    // found
                    res.push([nums[i], nums[l], nums[r]])

                    let prev = nums[l]
                    l += 1
                    while (l < r && prev === nums[l]) {
                        l += 1
                    }
                }
            }
        }

        return res
    }
}
