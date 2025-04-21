// https://neetcode.io/problems/largest-rectangle-in-histogram

/*
create an Array of length heights.length and fill with -1
    iterate the heights and at each index save the first smaller element index on the left

    to do this:
        1. while (stack has items and if the top of the stack's index's value >= current value): pop since looking for smaller value
        2. if (stack has items): it means the top index's value is smaller than the current value: left[i] = stack.top
        3. add the current index to the stack

create an Array of length heights.length and fill with n
    do same as above to set each index to hold the first smaller elements index on the right.

This is all to determine the boundaries of each index to calc the max area that height can create.
    max height at that index = height[i] * (right - left - 1)

- Time: O(n)    // n + n + n
- Space: O(n)
*/

class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const n = heights.length;
        const leftReach = Array(n).fill(-1);
        const rightReach = Array(n).fill(n);
        const stack = [];

        for (let i = 0; i < n; i ++) {
            while (stack.length && heights[stack[stack.length - 1]] >= heights[i]) {
                stack.pop()
            }
            if (stack.length) {
                leftReach[i] = stack[stack.length - 1]
            }
            stack.push(i)
        }

        stack.length = 0

        for (let i = n - 1; i >= 0; i --) {
            while (stack.length && heights[stack[stack.length - 1]] >= heights[i]) {
                stack.pop()
            }
            if (stack.length) {
                rightReach[i] = stack[stack.length - 1]
            }
            stack.push(i)
        }

        let max = 0
        for (let i = 0; i < n; i ++) {
            max = Math.max(max, heights[i] * (rightReach[i] - leftReach[i] - 1))
        }

        return max
    }
}
