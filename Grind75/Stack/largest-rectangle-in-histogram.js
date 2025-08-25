// https://leetcode.com/problems/largest-rectangle-in-histogram/

/**
// Brute force: for each heights find the max rectangle to the left and right. Find bars that are >= to this height[i]

maxArea = 0
iterate i in height
    pointer l = i
    pointer r = i

    // try to find rectangle where the adjacent bars are >= height[i]
    while (l - 1 >= 0 && height[l - 1]) {
        l -= 1
    }
    while (r + 1 < height.length[r + 1]) {
        r += 1
    }
    maxArea = max(maxArea, height[i] * (r - l + 1)) // get the area of the created rectangle
    
- Time: O(n^2)
- Space: O(1)


* prev smallest height and future smallest height
create an Array of length heights.length and fill with -1
    iterate the heights and at each index save the first smaller element's index on the left

    to do this: // using increasing monotonic stack
        1. while (stack has items and if the top of the stack's index's value >= current value): pop since looking for smaller value
        2. if (stack has items): it means the top index's value is smaller than the current value: left[i] = stack.top
        3. add the current index to the stack

create an Array of length heights.length and fill with n
    do same as above to set each index to hold the first smaller elements index on the right.

This is all to determine the boundaries of each index to calc the max area that height can create.
    max height at that index = height[i] * (right - left - 1)

- Time: O(n)    // n + n + n
- Space: O(n)


monotonic stack
// if you need to keep tack of smaller values use monotonic increasing and if you need to keep track of the larger values use decreasing
// Want to track the smaller values since the max rectangle height is the min height * (index - prev index)

create Array for increasing monotonic stack
    elem: [idx, val]

iterate i in heights
    start = i
    while (stack.length > 0 and top of stack value >= curr height)  // need to pop since want increasing
        const [idx, val] = stack.pop()
        // since removing from stack, need to:
        // 1. eval area of the removed
        maxArea = max(maxArea, val * (i - idx))
        // 2. save the idx because the height at i, which is lower, needs to extend into the higher height bar to include it into its area
        start = idx

    stack.push([start, height[i]])

since the remaining elements are in increasing order, while stack.length > 0: pop and eval the area
    the area of each will be height * (height.length - idx)    // height.length since bar indcludes the index, 1. - idx since increasing, from end to idx that height from idx to end is guarenteed to exist.

- Time: O(n)
- Space: O(n)
 */

const brute = function(heights) {
    let maxArea = 0
    const n = heights.length

    for (let i = 0; i < n; i ++) {
        let l = i
        let r = i

        while (l - 1 >= 0 && heights[l - 1] >= heights[i]) {
            l -= 1
        }
        while (r + 1 < n && heights[r + 1] >= heights[i]) {
            r += 1
        }
        maxArea = Math.max(maxArea, heights[i] * (r - l + 1))
    }

    return maxArea
}

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    //return brute(heights)
};