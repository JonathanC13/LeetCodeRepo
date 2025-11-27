// https://leetcode.com/problems/daily-temperatures/

/**
1. Assumptions
    1. None

2. input validation
    1. temperatures is an Array of Numbers

3. time and space constraints
    BTTC: O(n)
    Space: O(m) // m for stack length

4. edge cases and some test cases
    edge cases
    1. temperatures empty
        return []
    2. temperatures length 1
        return [0]
    test cases
    1. 
        inputs
            [5, 1, 3, 2, 7, 2]
        expected output
            [4, 1, 2, 1, 0, 0]

5. visualize by drawing and manually solve
6. break into subproblems
    Since need to find the future date where the temperature is warmer, start iterating temperatures from right to left.
    Use a Stack to store the index of temperatures larger than the current temperature. 
    This is so that for the current temperature:
        1. if Stack is empty, there are no temperatures warmer than this. Set outcome to 0
        2. while there are temperatures <= current temperature, pop from the Stack since need to find a warmer temperature. If found, outcome = top index - current i
            * The reason can pop those future temperatures is because the current is warmer and any temperature at lower indexes will evaluates this one.

7. algos
    - Stack operations

8. data structures
    - stack
    - array

- Complexity
    Time: O(n)
    Space: O(m)
 */

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const n = temperatures.length
    if (n === 0) {
        return []
    }
    if (n === 1) {
        return [0]
    }

    const warmer = new Array()
    const res = new Array(n).fill(0)

    for (let i = n - 1; i >= 0; i --) {
        while (warmer.length >= 0 && temperatures[i] >= temperatures[warmer[warmer.length - 1]]) {
            warmer.pop()
        }

        if (warmer.length !== 0) {
            res[i] = warmer[warmer.length - 1] - i
        }

        warmer.push(i)
    }

    return res
};