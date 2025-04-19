// https://neetcode.io/problems/daily-temperatures

/*
create res with size temps fill with 0

create a Stack using an Array
    it will store the highest temp seeen from this index + 1 to end.
    at each temps, it will remove all temps that are lower or equal than it from the stack until it finds the one that is higher.
    

iterate temps from end
    while (stack.length > 0 && temps[i] >= stack.top.value) {
        stack.pop
    }

    if (stack.length === 0) {
        res[i] = 0
    } else {
        res[i] = stack.top.index - i
    }
    stack.push([temps[i], i])

return res

- Time: O(n)
- Space: O(n)
*/

class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const n = temperatures.length
        const res = new Array(n).fill(0)
        const stack = new Deque()
        for (let i = n - 1; i >= 0; i --) {
            while (stack.size() > 0 && temperatures[i] >= stack.back()[0]) {
                stack.popBack()
            }

            if (stack.size() === 0) {
                res[i] = 0
            } else {
                res[i] = stack.back()[1] - i
            }

            stack.pushBack([temperatures[i], i])
        }

        return res

    }
}
