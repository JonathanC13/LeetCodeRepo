// https://leetcode.com/problems/decode-string/?envType=study-plan-v2&envId=leetcode-75

/*
create a Stack with an Array

while i < s.length
    if (s[i] !== ']') {
        stack.push(s[i])
    } else {
        // need to find the strng that is to be repeated, *finding the first closing bracket will be the most nested.
        while (stack.length > 0 && peek !== '[') {
            str = pop + str // build repeat string
        }
        if (stack.length > 0 && peek === '[') { // if always well formed, do not need and repeat int will be present
            pop
        }
        while (stack.length > 0 && Number(peek)) {
            k = pop + k // build repeat times number in string
        }

        repeated = ''
        for (let i = 0; i < Number(k); i ++) {
            repeated += str
        }

        stack.push(repeated)

    }

    let res = ''
    while (stack.length > 0) {
        res = stack.pop() + res
    }
    return res

- Time: O(n log n)
- Space: O(n)
*/

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    const stack = new Array()
    
    let i = 0
    while (i < s.length) {
        console.log(s[i], ' ===')
        if (s[i] !== ']') {
            stack.push(s[i])
        } else {
            console.log('peek: ', stack[stack.length - 1])
            let str = ''
            let k = ''
            // need to find the strng that is to be repeated, *finding the first closing bracket will be the most nested
            while (stack.length > 0 && stack[stack.length - 1] !== '[') {
                str = stack.pop() + str // build repeat string
            }
            console.log('str: ', str)

            // pop '['. If always well formed; do not need to check just pop, and the repeat int will be present. 
            if (stack.length > 0 && stack[stack.length - 1] === '[') { 
                stack.pop()
            }
            while (stack.length > 0 && (Number(stack[stack.length - 1]) || stack[stack.length - 1] === '0')) {
                k = stack.pop() + k // build repeat times number in string
            }
            console.log('k: ', k)

            repeated = ''
            for (let i = 0; i < Number(k); i ++) {
                repeated += str
            }
            console.log('repeated: ', repeated)
            stack.push(repeated)

        }
        
        i += 1
    }

    let res = ''
    while (stack.length > 0) {
        res = stack.pop() + res
    }
    return res
};