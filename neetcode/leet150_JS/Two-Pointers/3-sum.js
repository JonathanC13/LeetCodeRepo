// https://leetcode.com/problems/3sum/description/?envType=study-plan-v2&envId=top-interview-150

/*
sort nums in non-descending order so that duplicates are next to eachother and choosing which pointer to change is easier

while i < nums.length - 2
    l = i + 1
    r = nums.length - 1

    while (l < r)
        sum = nums[i] + nums[l] + nums[r]

        if (sum === 0) {
            res.push([nums[i], nums[l], nums[r]])

            // move left until no dup of previously used
            prev = nums[l]
            l += 1
            while (l < r && prev === nums[l]) {
                l += 1
            }
        } else if (sum > 0) {
            r -= 1
        } else {
            l += 1
        }

    // move left until no dup of previously used
    prev = nums[i]
    i += 1
    while (i < nums.length - 2 and prev === nums[i])
        i += 1

    return res

- Time: O(n log n)
- Space: O(1)
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (nums.length < 3) {
        return []
    }

    nums.sort((a, b) => a - b)

    const res = new Array()

    let i = 0
    while (i < nums.length - 2) {
        let l = i + 1
        let r = nums.length - 1

        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r]

            if (sum === 0) {
                res.push([nums[i], nums[l], nums[r]])

                const prev = nums[l]
                l += 1
                while (l < r && prev === nums[l]) {
                    l += 1
                }
            } else if (sum > 0) {
                r -= 1
            } else {
                l += 1
            }
        }

        const prev = nums[i]
        i += 1
        while (i < nums.length - 2 && prev === nums[i]) {
            i += 1
        }
    }

    return res
};