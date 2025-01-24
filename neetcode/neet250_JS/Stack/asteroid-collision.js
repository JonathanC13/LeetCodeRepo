// https://leetcode.com/problems/asteroid-collision/description/

/*
Iterate the asteroid
    if stack is empty:
        push onto stack
    else
        while stack has elements and curr !== null && top direction is positive (moving right) and curr is negative (moving left)
            pop the top element
            if the abs size of each are equal
                both destroyed
                curr = null
            else if abs curr < abs popped
                curr = popped
            
        if (curr !== null)
            push surviving astroid onto stack

Time: O(n log n).
Space: O(n)


*/

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    const stack = []

    for (let i = 0; i < asteroids.length; i ++) {
        let curr = asteroids[i]
        while (stack.length > 0 && curr !== null && stack[stack.length - 1] > 0 && curr < 0) {
            // diff directions
            const popped = stack.pop()

            if (Math.abs(curr) < Math.abs(popped)) {
                curr = popped
            } else if (Math.abs(curr) === Math.abs(popped)) {
                curr = null
            }
        }
        if (curr !== null) {
            stack.push(curr)
        }
    }

    return stack
};