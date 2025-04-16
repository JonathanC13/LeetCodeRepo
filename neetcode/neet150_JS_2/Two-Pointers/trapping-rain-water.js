// https://neetcode.io/problems/trapping-rain-water

/*
create an array for left max where each value is the max height seen on the left
create an array for right max where each value is the max height seen on the right

total = 0
iterate i to < length
    water = min(leftMax[i], rightMax[i]) - height[i]    // the water at the index is limited by the min of the left and right and then must subtract itself.

    total += water < 0 ? 0 : water

return total

- Time: O(n) // n + n
- Space: O(n)   //n + n
*/

class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const n = height.length
        const leftMax = new Array(n).fill(0)
        leftMax[0] = height[0]
        const rightMax = new Array(n).fill(0)
        rightMax[n - 1] = height[n - 1]

        for (let i = 1; i < n; i ++) {
            leftMax[i] = Math.max(leftMax[i - 1], height[i])
            rightMax[n - i - 1] = Math.max(rightMax[n - i], height[n - i - 1])
        }

        let total = 0
        for (let i = 0; i < n; i ++) {
            const water = Math.min(leftMax[i], rightMax[i]) - height[i]

            total += water < 0 ? 0 : water

        }

        return total
    }
}
