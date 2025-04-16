// https://neetcode.io/problems/max-water-container

/*
amount = (x2 - x1) * min(y2, y1)

two pointer
    1. l = 0
    2. r = length - 1

max = 0

while l < r
    calc amount
    save max(max, amount)

    move the pointer that has the lesser height since to strive for most water keep the higher height longer

- Time: O(n)
- Space: O(1)
*/

class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0
        let l = 0
        let r = heights.length - 1

        while (l < r) {
            const water = (r - l) * Math.min(heights[l], heights[r])
            max = Math.max(max, water)

            if (heights[l] < heights[r]) {
                l += 1
            } else {
                r -= 1
            }
        }

        return max
    }
}
