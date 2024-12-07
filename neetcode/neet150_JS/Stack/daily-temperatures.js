// https://neetcode.io/problems/daily-temperatures

class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        if (temperatures.length === 0) {
            return []
        }

        const stack = new Array()
        const res = new Array(temperatures.length)

        for (let i = 0; i < temperatures.length; i ++){
            if (stack.length === 0) {
                stack.push(i)
            } else {
                while (stack.length !== 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
                    const pop = stack.pop()
                    res[pop] = i - pop
                }

                stack.push(i)
            }
        }

        while (stack.length !== 0) {
            const pop = stack.pop()
            res[pop] = 0
        }

        return res
    }
}
