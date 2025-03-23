// https://neetcode.io/problems/max-water-container

/*
edge case 1: if heights.length < 2: return 0
edge case 2: if heights.length === 2:
    return Math.min(heights[0], heights[1]) * 1

the equation of the most water is the area equation of length * width. In this case, length is the Min height of the container wall and width is the index difference.

let l = 0
let r = heights.length - 1
let maxWater = 0
while (l < r) {
    maxWater = Math.max(maxWater, Math.min(heights[l], heights[r]) * (r - l))

    to strive for max water need to keep the high height wall, move the pointer that has the lower height toward the center
    if (height[l] < height[r]) {
        l += 1
    } else {
        r -= 1
    }
}

return maxWater

- Time: O(n)
- Space: O(1)
*/

class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        if (heights.length < 2) {
            return 0
        }
        if (heights.length === 2) {
            return Math.min(heights[0], heights[1]) * 1
        }

        let l = 0
        let r = heights.length - 1
        let maxWater = 0
        while (l < r) {
            maxWater = Math.max(maxWater, Math.min(heights[l], heights[r]) * (r - l))

            if (heights[l] < heights[r]) {
                l += 1
            } else {
                r -= 1
            }
        }

        return maxWater
    }
}
