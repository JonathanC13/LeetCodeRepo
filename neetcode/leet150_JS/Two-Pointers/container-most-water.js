// https://leetcode.com/problems/container-with-most-water/?envType=study-plan-v2&envId=top-interview-150

/*
one pointer at beginning
one pointer at end

maxW = 0

while l < r
    maxW = max(maxW, min(height[l], height[r]) * r - l)

    // keep the taller height since this has the possibility to result in another max water
    if (height[l] < height[r]) {
        l += 1
    } else {
        r -= 1
    }

return maxW

- Time: O(n)
- Space: O(1)
*/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    if (height.length < 2) {
        return 0
    }

    let l = 0
    let r = height.length - 1

    let maxW = 0
    while (l < r) {
        maxW = Math.max(maxW, Math.min(height[l], height[r]) * (r -l))

        if (height[l] < height[r]) {
            l += 1
        } else {
            r -= 1
        }
    }

    return maxW
};