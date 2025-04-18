// https://neetcode.io/problems/validate-parentheses

/*
create a set for openning parentheses

create a map for
    key = closed parentheses
    value = the corresponding open parentheses

Use a Dequeue() for the Stack
    since when a closed parentheses appears, it must close the most recent open

iterate String s
    if (open.has(s[i])) {
        pushBack onto the stack
    } else if (closed.has(s[i])) {
        if (closed.get(s[i]) !== stack.popBack()) {
            wront closing bracket
            return false
        }
    } else {
        continue
    }

return stack.size() === 0 ? true : false

- Time: O(n)
- Space: O(n)
*/

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const open = new Set(['(', '{', '['])
        const closed = new Map([
            [')', '('],
            ['}', '{'],
            [']', '[']
        ])

        const stack = new Deque()

        for (let i = 0; i < s.length; i ++) {
            if (open.has(s[i])) {
                stack.pushBack(s[i])
            } else if (closed.has(s[i])) {
                if (closed.get(s[i]) !== stack.popBack()) {
                    return false
                }
            }
        }
        
        return !stack.size()
    }
}
