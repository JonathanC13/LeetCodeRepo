// https://leetcode.com/problems/baseball-game/description/

/*
    Since dealing with the most recent previous scores, use a Last in First out data structure Stack.

    I'll use a basic Array.

    1. If an integer, push into the end of the Array
    2. '+'. Peek the 'top' and 'top - 1', add the values, and push into the end
    3. 'D'. Peek the 'top' (the end) of the Array, double the value, and push into the end
    4. 'C'. pop from the end

    at the end, iterate the Array and return the sum
*/

/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    const stack = new Array()

    for (let i = 0; i < operations.length; i ++) {
        if (Number(operations[i])) {
            stack.push(Number(operations[i]))
        } else if (operations[i] === '+') {
            stack.push(stack[stack.length - 1] + stack[stack.length - 2])
        } else if (operations[i] === 'D') {
            stack.push(stack[stack.length - 1] * 2)
        } else if (operations[i] === 'C') {
            stack.pop()
        }
    }
    
    let sum = 0
    for (let i = 0; i < stack.length; i ++) {
        sum += stack[i]
    }

    return sum
};