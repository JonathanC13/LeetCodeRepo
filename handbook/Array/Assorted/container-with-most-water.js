// https://leetcode.com/problems/container-with-most-water/description/

/**
1. Assumptions
    - Only positive values

2. Input validation
    - height instanceof Array
    - length
        - if height.length < 2: return 0
    - content
        - height only contains Numbers

3. time/space constraints
    - BTTC: Time: O(n)  // on pass
    - Space: O(1)

4. some test cases and edge cases
    edge cases
    - if (height.length < 2): return 0
    test cases
    1. heights = []  // expected = 0
    2. heights = [1, 3, 1, 5]   // expected = 6. 3*2

5. visualize by drawing and manually solve
    since area is calculated by length * width. create two pointers: left at index 0 and right at n - 1, so that the width of the container starts at max
    calculate the area by taking the min of the heights at left and right * width, update maxWater
    to strive for max area, move the pointer that has the lower height to maintain the higher wall

6. break into subproblems

7. determine algorithm
    - two pointers

8. data structures
    - Input Array

9. complexity
    - Time: O(n)
    - Space: O(1)
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    if (height.length < 2) {
        return 0
    }

    let maxWater = 0
    let l = 0
    let r = height.length - 1
    while (l < r) {
        maxWater = Math.max(maxWater, Math.min(height[l], height[r]) * (r - l))
        if (height[l] < height[r]) {
            l += 1
        } else {
            r -= 1
        }
    }
    return maxWater
};