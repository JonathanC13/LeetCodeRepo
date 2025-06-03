// https://leetcode.com/problems/asteroid-collision/?envType=study-plan-v2&envId=leetcode-75

/*
create a Stack with an Array

iterate the asteroids
    let newAst = asteroids[i]
    while (stack.length > 0) {
        if (top > 0 && newAst < 0) { // going toward each other, top +ive, new -ive
            if (same size) {
                stack.pop()
                newAst = 0
                break
            } else if (abs(top) < newAst) {
                stack.pop()
            } else {
                // top > newAst, newAst destroyed
                newAst = 0
                break
            }
        } else {
            same direction, break
        }
    }
    if (newAst !== 0) {
        stack.push(newAst)
    }
    

return stack

- Time: O(n)
- Space: O(n)
*/

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    if (asteroids.length === 0) {
        return []
    }

    const stack = new Array()

    for (let i = 0; i < asteroids.length; i ++) {
        let newAst = asteroids[i]
        while (stack.length > 0) {
            const peek = stack[stack.length - 1]
            if (peek > 0 && newAst < 0) {
                if (peek + newAst === 0) {
                    stack.pop()
                    newAst = 0
                    break
                } else if (Math.abs(peek) < Math.abs(newAst)) {
                    stack.pop()
                } else {
                    newAst = 0
                    break
                }
            } else {
                break
            }
        }

        if (newAst !== 0) {
            stack.push(newAst)
        }
    }

    return stack
};