// https://neetcode.io/problems/largest-rectangle-in-histogram

class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const n = heights.length

        const stack = []
        const left = new Array(n).fill(-1)
        const right = new Array(n).fill(n)

        for (let i = 0; i < n; i ++) {
            while (stack.length && heights[stack[stack.length - 1]] >= heights[i]) {
                stack.pop()
            }

            if (stack.length) {
                left[i] = stack[stack.length - 1]
            }

            stack.push(i)
        }

        stack.length = 0
        for (let i = n - 1; i >= 0; i --) {
            while (stack.length && heights[stack[stack.length - 1]] >= heights[i]) {
                stack.pop()
            }

            if (stack.length) {
                right[i] = stack[stack.length - 1]
            }

            stack.push(i)
        }

        console.log(left)
        console.log(right)

        let maxArea = 0;
        for (let i = 0; i < n; i++) {
            left[i] += 1;
            right[i] -= 1;
            console.log(heights[i] * (right[i] - left[i] + 1))
            maxArea = Math.max(maxArea, heights[i] * (right[i] - left[i] + 1));
        }

        return maxArea;
    }
}
