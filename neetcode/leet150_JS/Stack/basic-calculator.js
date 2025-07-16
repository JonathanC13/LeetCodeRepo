// https://leetcode.com/problems/basic-calculator/description/?envType=study-plan-v2&envId=top-interview-150

/*
s consists of digits, '+', '-', '(', ')', and ' '

clean the String s of spaces

There will be no two consecutive operators in the input
    This helps covers front characters like situation of 1 + -1
    1. Need to handle scenario of: x + (-1     // check if before char is '(' and after char is a number
    2. Need to handle scenario of: -1          // check if before index out of bounds and after char is a number
    ** hold flag that will determie if 0 needs to be inserted before the Unary + or -
        Therefore:
            For case 1: unary flag initialized with true to handle '-' at beginning
            For case 2: After '(' seen, set unary to true since (-1 could occur

create an Array to store the Reversed Polish Notation of the expression
create Stack for operators for the RPN

iterate String s, while i < s.length
    if (s[i] is a Number)
        l = i
        while (s[i] is a Number)
            get the entire number. i += 1

        num = rpn.push(Number(s.slice(l, i)))
    else if s[i] is an operator
        operator = s[i]

        while (stack not empty && precedence(operator) <= precedence(stack.top))    // it is <= since left to right
            // precedence list:
            0 = ( and )
            1 = - and +
            2 = * and /
            // pushing higher precedence into the RPN because it is read left to right so operator precedence is ordered left to right

            pop = stack.pop()
            rpn.push(pop)

        stack.push(operator)
        i += 1

    else if (
        stack.push(s[i])
        i += 1
    else if )
        while stack is not empty 
            pop = stack.pop()

            if (pop !== '(')
                rpn.push(pop)
            else
                break

        i += 1

empty remaining elements of stack into the rpn

create resStack for the results for the RPN

return resStack.pop()

- Time: O(n)
- Space: O(n)
*/

const precedence = (op) => {
    if (op === '(' || op === ')') {
        return 0
    } else if (op === '+' || op === '-') {
        return 1
    } else if (op === '*' || op === '/') {
        return 2
    }
}

const applyOperation = (operator, rpnStack) => {
    const op2 = rpnStack.pop()
    const op1 = rpnStack.pop()
    let res = 0
    if (operator === '+') {
        res = op1 + op2
    } else {
        res = op1 - op2
    }

    rpnStack.push(res)
}

var calculateShorter = function(s) {
    const opStack = new Array()
    const rpnStack = new Array()

    const operators = new Set(['+', '-', '*', '/'])

    let unary = true
    let i = 0
    while (i < s.length) {
        if (s[i] === ' ') {
            i += 1
            continue
        }

        if (unary === true) {
            unary = false
            if (s[i] === '+' || s[i] === '-') {
                rpnStack.push(0)
            }
        }

        if (!isNaN(s[i])) {
            let l = i
            while (i < s.length && !isNaN(s[i])) {
                i += 1
            }
            let num = Number(s.slice(l, i))
            rpnStack.push(num)
        } else if (operators.has(s[i])) {

            while (opStack.length > 0 && precedence(s[i]) <= precedence(opStack[opStack.length - 1])) {
                const pop = opStack.pop()
                // rpnArr.push(pop)
                applyOperation(pop, rpnStack)
            }
            opStack.push(s[i])
            i += 1
        } else if (s[i] === '(') {
            unary = true
            opStack.push('(')
            i += 1
        } else if (s[i] === ')') {
            while (opStack.length > 0) {
                const pop = opStack.pop()
                if (pop !== '(') {
                    // rpnArr.push(pop)
                    applyOperation(pop, rpnStack)
                } else {
                    break
                }
            }
            i += 1
        }
    }

    while (opStack.length > 0) {
        applyOperation(opStack.pop(), rpnStack)
    }

    return rpnStack.pop()
}
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    if (s.length === 0) {
        return 0
    }

    return calculateShorter(s)

    const opStack = new Array()
    const rpnArr = new Array()

    const operators = new Set(['+', '-', '*', '/'])

    // need to clean spaces before and not just run pointer over since the case for '-' needs to check prev and after char
    // s = s.replaceAll(" ", "")
    // console.log(s)
    let unary = true
    let i = 0
    while (i < s.length) {
        if (s[i] === ' ') {
            i += 1
            continue
        }

        if (unary === true) {
            unary = false
            if (s[i] === '+' || s[i] === '-') {
                rpnArr.push(0)
            }
        }

        if (!isNaN(s[i])) {
            let l = i
            while (i < s.length && !isNaN(s[i])) {
                i += 1
            }
            let num = Number(s.slice(l, i))
            rpnArr.push(num)
        } else if (operators.has(s[i])) {
            // if (s[i] === '-' && ((i - 1 >= 0 && s[i-1] === '(') || i - 1 < 0) && i + 1 < s.length && !isNaN(s[i+1])) {
            //     // make the following number negative and then save
            //     i += 1
            //     let l = i
            //     while (i < s.length && !isNaN(s[i])) {
            //         i += 1
            //     }
            //     const num = Number(s.slice(l, i))
            //     rpnArr.push(-1 * num)
            //     continue
            // }

            while (opStack.length > 0 && precedence(s[i]) <= precedence(opStack[opStack.length - 1])) {
                const pop = opStack.pop()
                rpnArr.push(pop)
            }
            opStack.push(s[i])
            i += 1
        } else if (s[i] === '(') {
            unary = true
            opStack.push('(')
            i += 1
        } else if (s[i] === ')') {
            while (opStack.length > 0) {
                const pop = opStack.pop()
                if (pop !== '(') {
                    rpnArr.push(pop)
                } else {
                    break
                }
            }
            i += 1
        }
    }

    while (opStack.length > 0) {
        rpnArr.push(opStack.pop())
    }
    console.log(rpnArr)

    const resStack = new Array()

    for (let i = 0; i < rpnArr.length; i ++) {
        if (operators.has(rpnArr[i])) {
            op2 = resStack.pop()
            op1 = resStack.length > 0 ? resStack.pop() : 0    // since expression can begin with '-', there is a scenario where the stack is empty, so use 0
            let res = 0
            if (rpnArr[i] === '+') {
                res = op1 + op2
            } else {
                res = op1 - op2
            }
            resStack.push(res)
        } else {
            resStack.push(rpnArr[i])
        }
    }
    return resStack.pop()
};