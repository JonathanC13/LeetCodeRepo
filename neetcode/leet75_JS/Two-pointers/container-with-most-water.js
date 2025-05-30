// https://leetcode.com/problems/container-with-most-water/description/?envType=study-plan-v2&envId=leetcode-75

/*
edge case 1: if heights.length < 2: return 0

create variable to hold max water seen

create pointer for left of container
create pointer for right of container

while l < r
    maxW = max(maxW, calculate the container water) // equation: (r - l) * min(heights[l], heights[r])

    move the pointer that has the lower height since we want to maximize the water

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
        maxW = Math.max(maxW, (r - l) * Math.min(height[l], height[r]))

        if (height[l] < height[r]) {
            l += 1
        } else {
            r -= 1
        }
    }

    return maxW
};