// https://leetcode.com/problems/max-consecutive-ones-iii/description/?envType=study-plan-v2&envId=leetcode-75

/*
create a window that represents 1s and k >= 0
pointer l for left side of the window = 0
pointer r for the right side of the window = 0

windowOnes = 0
maxOnes = 0

while (r < nums.length) {
    if (nums[r] === 1) { // increase window if 1 since no need for replacement
        windowOnes += 1
        r += 1
    } else {
        // nums[r] === 0
        if (k > 0) {    // if 0 and can replace, increase window
            windowOnes += 1
            r += 1
            k -= 0
        } else {    // cannot replace, must reduce window until re-obtain replacement that was previously used.
            while (l <= r && k === 0) {
                if (nums[l] === 0) {
                    k += 1
                }
                windowOnes -= 1
                l += 1
            }
        }
    }

    maxOnes = Math.max(maxOnes, windowOnes)
}

return maxOnes

- Time: O(n)
- Space: O(1)
*/

const withLen = (nums, k) => {
    let longest = 0
    let l = 0
    let r = l
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
        longest = Math.max(longest, r - l)
    }

    return longest
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    return withLen(nums, k)

    let windowOnes = 0
    let maxOnes = 0

    let l = 0
    let r = l

    return withLen

    while (r < nums.length) {
        if (nums[r] === 1) {
            windowOnes += 1
            r += 1
        } else {
            if (k > 0) {
                windowOnes += 1
                r += 1
                k -= 1
            } else {
                while (l <= r && k === 0) {
                    if (nums[l] === 0) {
                        k += 1
                    }
                    windowOnes -= 1
                    l += 1
                }
            }
        }

        maxOnes = Math.max(maxOnes, windowOnes)
    }

    return maxOnes
};