// https://neetcode.io/problems/daily-temperatures

/*
// res = Array(temps.length).fill(0)
stack = []

iterate the temps from the end to front
    const temp = temperatures[i]

    while stack.length > 0 AND the curr temp is >= top of stack
        // since stack is lowest indexes on top, popping is removing the closest values that are not > curr val
        stack.pop

    // at this point the top element index is the index of the nearest future higher temp
    res[i] = top index - i  // can actually just update temperatures array, just store the value first

    push curr element onto stack to add future temp since going backwards to the upcoming indexes

Time: O(n log n). n * log n
Space: O(n)
*/

class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const n = temperatures.length
        // const res = Array(n).fill(0)
        const stack = Array()

        for (let i = n - 1; i >= 0; i --) {
            const temp = temperatures[i]

            while (stack.length > 0 && temp >= stack[stack.length - 1][0]) {
                stack.pop()
            }

            if (stack.length === 0) {
                temperatures[i] = 0
            } else {
                temperatures[i] = stack[stack.length - 1][1] - i
            }

            stack.push([temp, i])
        }

        return temperatures
    }
}
