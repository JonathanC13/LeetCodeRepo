// https://neetcode.io/problems/max-water-container

/*
max amount of water is the area that is created by the (min height of the two sides) * the distance

left pointer = 0
right pointer = heights.length - 1

track max water

while (left < right) {
    max = Math.max(max, Math.min(heights[left], heights[right]) * (right - left)))

    // keep the highest height
    if (height[left] > height[right]) {
        right -= 1
    } else {
        left += 1
    }
}

return max

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

        let max = 0

        let left = 0
        let right = heights.length - 1
        while (left < right) {
            max = Math.max(max, Math.min(heights[left], heights[right]) * (right - left))

            if (heights[left] > heights[right]) {
                right -= 1
            } else {
                left += 1
            }
        }

        return max
    }
}
