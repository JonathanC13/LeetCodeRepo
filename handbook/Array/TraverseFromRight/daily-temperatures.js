// https://leetcode.com/problems/daily-temperatures/description/

/**
1. Assumptions:
    None

2. Validate inputs
    - type: the temperatures is an instanceof Array
    - Length: if the temperatures.length === 0: return []
    - content: Assume Numbers, but can check on each access if want.

3. Constraints?
    - Time: O(n)    // one pass
    - Space: O(n)

4. visualize by drawing and manually solve.
    - Brute force: Time: O(n^2)
    for each index, i
        iterate forward, j, to find the index where the temp[j] is > than temp[i]

    - Time: O(n)
    Use a Stack to hold the highest seen temperatures from the left looking right
    iterate the temperatures from right to left
        while the stack is not empty && temps[i] >= stack top
            pop // this is because 1. looking for closest future index with a higher temp. 2. popping temps <= temps[i] is valid since temps[i] will be the closest higher temp and the ones it popped are not closer than i since iterating from right to left

        if stack is empty
            ans[i] = 0
        else
            ans[i] = stack top - i

        push i onto stack   // for temps < i

5. Some examples and edge cases
    edge cases
    1. if temp.length === 0: return []
    Some test cases:
    1. temp = []
    2. temp = [2,1,1,3]

6. break in parts to solve
    1. select the index of interest with temps[i]
    2. find the forward index that is temps[j] > temps[i]

7. algorithm
    - iterate Array right to left
    - Use Stack to maintain temps that are highest as seen from left toward right

8. Data structures
    - Input Array
    - Stack

9. Complexity
    - Time: O(n)
    - Space: O(n)
 */

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    if (temperatures instanceof Array === false) {
        return []
    }
    if (temperatures.length === 0) {
        return []
    }

    const n = temperatures.length
    const stack = new Array()
    const ans = new Array(n).fill(0)
    for (let i = n - 1; i >= 0; i --) {
        while (stack.length > 0 && temperatures[i] >= temperatures[stack[stack.length - 1]]) {
            stack.pop()
        }

        if (stack.length !== 0) {
            ans[i] = stack[stack.length - 1] - i
        }

        stack.push(i)
    }

    return ans
};