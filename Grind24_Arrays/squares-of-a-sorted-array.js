// https://leetcode.com/problems/squares-of-a-sorted-array/

/**
let mid = 0, find the left most positive value. use binary search for log(n) Time complexity.
    use if nums[mid] < 0: go right.
        else go left

        * at the end the pointer l be on the left most positive (if exists.)
        * since <, if there is a 0 (target), it will put l on the index

set l ptr to mid - 1
set r ptr to mid

while l >= 0 || r < nums.length
    if (l >= 0 && r < nums.length)
        if (-1 * nums[l] <= nums[r]) {
            res.push(nums[l] * nums[l])
            l -= 1
        } else {
            res.push(nums[r] * nums[r])
            r += 1
        }
    else if (l >= 0)
        res.push(nums[l] * nums[l])
        l -= 1
    else {
        res.push(nums[r] * nums[r])
        r += 1
    }
return res

- Time: O(n)
- Space: O(n)   // n for result arr
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let l = 0
    let r = nums.length - 1
    while (l <= r) {
        const mid = Math.floor((r - l) / 2) + l
        if (nums[mid] < 0) {
            l = mid + 1
        } else {
            r = mid - 1
        }
    }

    const res = new Array()

    r = l
    l = l - 1
    while (l >= 0 || r < nums.length) {
        if (l >= 0 && r < nums.length) {
            if (-1 * nums[l] <= nums[r]) {
                res.push(nums[l] * nums[l])
                l -= 1
            } else {
                res.push(nums[r] * nums[r])
                r += 1
            }
        } else if (l >= 0) {
            res.push(nums[l] * nums[l])
            l -= 1
        } else {
            res.push(nums[r] * nums[r])
            r += 1
        }
    }

    return res
};