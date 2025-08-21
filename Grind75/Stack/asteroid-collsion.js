// https://leetcode.com/problems/asteroid-collision/description/

/**
create a Stack, so that the most recent asteroid is on top

iterate i in asteroids
    currAsteroid = asteroids[i]
    while (stack.length > 0 and top is positively moving and currAsteroid is negatively moving) {
        // two asteroids meet, determine outcome
        if (abs(currAsteroid) > abs(top asteroid)) {
            // the smaller top asteroid is destroyed
            stack.pop()
        } else if (currAsteroid === top asteroid) {
            // both are destroyed
            currAsteroid = null
            stack.pop()
            break
        } else {
            // the top > current, currAsteroid is discarded
            currAsteroid = null
            break
        }
    }
    if (currAsteroid !== null) {
        stack.push(currAsteroid)
    }

- Time: O(n)
- Space: O(n)
 */

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    const stack = new Array()

    for (let i = 0; i < asteroids.length; i ++) {
        let currAst = asteroids[i]
        while (stack.length > 0 && stack[stack.length - 1] > 0 && currAst < 0) {
            if (Math.abs(currAst) > stack[stack.length - 1]) {
                stack.pop()
            } else if (Math.abs(currAst) === stack[stack.length - 1]) {
                currAst = null
                stack.pop()
                break
            } else {
                currAst = null
                break
            }
        }
        if (currAst !== null) {
            stack.push(currAst)
        }
    }

    return stack
};