// https://leetcode.com/problems/decode-string/description/

/**
create a Stack

iterate i in s
    if (s[i] !== ']')   // once the first closed bracket is found, it is the deepest nested for this portion in the string
        stack.push(s[i])
    else
        str = ''
        // get the string that is to be repeated
        while (stack.length > 0 and stack.top !== '[')  // the beginning of the string to be repeated
            str = stack.pop() + str

        if (stack.length > 0 and stack.top === '[') // pop the open bracket
            stack.pop()
        else
            // malformed
            return '-1'

        // get the number that the string should repeat
        sNum = ''
        while (stack.length > 0 && stack.top is Number) {
            sNum = stack.pop() + sNum
        }

        // repeat and store back into stack
        res = ''
        for (let j = 0; j < Number(sNum); j ++) {
            res += str
        }
        stack.push(res)

decoded = ''
while stack.length > 0
    decoded = stack.pop() + decoded

return decoded

- Time: O(n)
- Space: O(n)
 */

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    const stack = new Array()

    for (let i = 0; i < s.length; i ++) {
        if (s[i] !== ']') {
            stack.push(s[i])
        } else {
            console.log(stack)
            let str = ''
            while (stack.length > 0 && stack[stack.length - 1] !== '[') {
                str = stack.pop() + str
            }

            if (stack.length > 0 && stack[stack.length - 1] === '[') {
                stack.pop()
            } else {
                return '-1'
            }

            let sNum = ''
            while (stack.length > 0 && isNaN(stack[stack.length - 1]) === false) {
                sNum = stack.pop() + sNum
            }

            let repeated = ''
            for (let j = 0; j < Number(sNum); j ++) {
                repeated += str
            }
            stack.push(repeated)
        }
    }

    let decoded = ''
    while (stack.length > 0) {
        decoded = stack.pop() + decoded
    }
    return decoded
};