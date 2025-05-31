// https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/description/?envType=study-plan-v2&envId=leetcode-75

/*
edge case 1: if nums.length < 2: return 0

create pointer l for left of window
create pointer r for right of window

k = 1
longest = 0

while r < nums.length
    if nums[r] === 1 {
        r += 1
    } else {
        if (k > 0) {
            r += 1
        } else {
            while (l <= r && k === 0) {
                if (nums[l] === 0) {
                    k += 1
                }
                l += 1
            }
        }
    }
    longest = Math.max(longest, r - l + 1)

return if longest === nums.length ? 
    longest - 1     // if equal it means that the array was entirely 1s
    :
    longest
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    if (nums.length < 2) {
        return 0
    }
    let k = 1
    let longest = 0
    let l = 0
    let r = 0
    while (r < nums.length) {
        if (nums[r] === 1) {
            r += 1
        } else {
            if (k > 0) {
                k -= 1
                r += 1
            } else {
                while (l <= r) {
                    if (nums[l] === 0) {
                        l += 1
                        r += 1
                        break
                    }
                    l += 1
                }
            }
        }
        console.log(l, r)
        longest = Math.max(longest, r - l + (k === 0 ? -1 : 0))
    }

    return longest === nums.length ? longest - 1 : longest
};