// https://leetcode.com/problems/asteroid-collision/

/**
1. Assumptions
    1. None

2. input validation
    asteroids is an Array of Numbers

3. time and space constraints
    BTTC: O(n)  // n to iterate the asteroids Array
    Space: O(n) // for the stack

4. edge cases and some test cases
    edge cases
    1. asteroids length <= 1 meaning the final state is already present
    test cases
    1. 
        inputs
            asteroids = [-2, -1, 10, -1, 5, -10]
        expected output
            [-2, -1]

5. visualize by drawing and manually solve
6. break into subproblems
    Need a data structure where the most recent asteroid is added and when a new asteroid appears need to evaluate from most recent to least recent until no collision is possible.
    Therefore, use Stack

    Since going left to right in Array asteroid;
        toPush = asteroid[i]
        while current asteroid is < 0 (moving left) and stack is not empty and stack.top > 0 (moving right)
            if (current asteroid larger)
                stack.pop
            else if equal size
                stack.pop
                toPush = null
                break
            else
                current asteroid destroyed by top asteroid
                toPush = null
                break

        if toPush !== null: the asteroid was not destroyed, push onto stack

7. algos
    - Array iteration
    - stack operation

8. data structures
    - Arrays
    - Stack

9. complexity
    Time: O(n)
    Space: O(n)
 */

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    if (asteroids.length <= 1) {
        return asteroids
    }

    const stk = new Array()
    for (let i = 0; i < asteroids.length; i++) {
        let toPush = asteroids[i]
        while (stk.length > 0 && stk[stk.length - 1] > 0 && toPush < 0) {
            if (stk[stk.length - 1] < toPush * -1) {
                stk.pop()
            } else if (stk[stk.length - 1] === toPush * -1) {
                // both destroyed
                stk.pop()
                toPush = null
            } else {
                toPush = null   // destroyed
                break
            }
        }
        if (toPush !== null) {
            stk.push(toPush)
        }
    }

    return stk
};