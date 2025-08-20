// https://leetcode.com/problems/daily-temperatures/description/

/**
create res Array of length temps, fill with 0

create a Stack to hold the highest temperatures from its index to the next highest. The top will hold the lowest so far. 
    elem of [temp, idx]
iterate the temparatures from the end 
    this is so that we can compare the current temperature to the top of the stack, which is the lowest so far
    if the top is higher than the current, then it is the closest future temp that is warmer
    else continue to pop the top to find the closest warmer

return res

- Time: O(n)    // n + log n
- Space: O(n)
 */

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const stack = new Array()
    const res = new Array(temperatures.length).fill(0)

    for (let i = temperatures.length - 1; i >= 0; i --) {
        // console.log(stack)
        while (stack.length > 0 && stack[stack.length - 1][0] <= temperatures[i]) {
            stack.pop()
        }

        if (stack.length > 0) {
            res[i] = stack[stack.length - 1][1] - i
        }
        stack.push([temperatures[i], i])
    }

    return res
};