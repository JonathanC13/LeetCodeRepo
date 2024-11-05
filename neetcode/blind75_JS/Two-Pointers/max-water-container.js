// https://neetcode.io/problems/max-water-container

class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxWater = 0
        let left = 0
        let right = heights.length-1

        while (left < right) {
            maxWater = Math.max(maxWater, (right-left) * Math.min(heights[left], heights[right]))
            if (heights[left] < heights[right]) {
                left += 1
            } else {
                right -= 1
            }
        }
        return maxWater
    }
}
