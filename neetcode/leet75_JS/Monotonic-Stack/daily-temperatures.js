// C:\Users\jonhs\Desktop\VS code\pyStuff\prac\LeetCodeRepo\neetcode\leet75_JS\Bit-Manipulation\min-flips.js

/*
use stack that will store: [temp, idx]
starts from the end because the future temps are stored first for comparison with past temperatures

if temp is >= top of stack
    pop
else
    if stack is empty: res[i] = 0
    else
        res[i] = top's idx - i

    stack.push([temp, i])

- Time: O(n)
- Space: O(n)   // n for result Array
*/

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const stack = new Array()
    const res = new Array(temperatures.length).fill(0)

    for (let i = temperatures.length - 1; i >= 0; i --) {
        while (stack.length > 0 && temperatures[i] >= stack[stack.length - 1][0]) {
            stack.pop()
        }

        if (stack.length > 0) {
            res[i] = stack[stack.length - 1][1] - i
        }
        stack.push([temperatures[i], i])
    }

    return res
};