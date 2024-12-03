// https://neetcode.io/problems/max-water-container

class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        if (heights.length < 1) {
            return 0
        }

        if (heights.length === 2) {
            return Math.min(heights[0], heights[1])
        }

        let max = 0

        let l = 0
        let r = heights.length - 1

        while (l < r) {
            max = Math.max(max, (r - l) * Math.min(heights[l], heights[r]))

            if (heights[l] < heights[r]) {
                l += 1
            } else {
                r -= 1
            }
        }

        return max
    }
}
