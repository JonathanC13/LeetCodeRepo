// https://leetcode.com/problems/container-with-most-water/description/

/**
maintain var that records the most water contained
create left pointer at 0
create right pointer at height.length - 1

while (l < r)
    calculate the container's water with the heights at left and right pointer. min(heights[l], heights[r]) * (r - l)
    update the most water contained

    move the pointer that has the lower height since to strive for greater water keep the higher height

return maxWater

- Time: O(n)
- Space: O(1)
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxWater = 0
    let l = 0
    let r = height.length - 1

    while (l < r) {
        maxWater = Math.max(maxWater, Math.min(height[l], height[r]) * (r - l))

        if (height[l] < height[r]) {
            l += 1
        } else {
            r -= 1
        }
    }

    return maxWater
};