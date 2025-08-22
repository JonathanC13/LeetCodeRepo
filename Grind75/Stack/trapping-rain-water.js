// https://leetcode.com/problems/trapping-rain-water/description/

/*
* Two pointers solution: 
    record the max height on the left and the right, move the pointer where the height is lower (since maintaining the higher wall will result in the maximal water) and check water can be filled at that pointer, if height < max seen on that side since a container needs higher side walls.
    The water at that pointer will be min(leftMax, rightMax) - height.
    This is performed while l < r to evaluate all heights

- Time: O(n)
- Space: O(1)
*/

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let total = 0
    let l = 0
    let r = height.length - 1
    let leftMax = height[l]
    let rightMax = height[r]

    while (l < r) {
        if (height[l] < height[r]) {
            l += 1
            if (height[l] < leftMax) {  // check so that the added water won't be negative.
                // maybe can fill water, still relies on right max too
                total += Math.min(leftMax, rightMax) - height[l]
            } else {
                leftMax = Math.max(leftMax, height[l])
            }
        } else {
            r -= 1
            if (height[r] < rightMax) {
                total += Math.min(leftMax, rightMax) - height[r]
            } else {
                rightMax = Math.max(rightMax, height[r])
            }
        }
    }

    return total
};