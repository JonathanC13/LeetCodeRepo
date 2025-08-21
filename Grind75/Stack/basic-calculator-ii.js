// https://leetcode.com/problems/basic-calculator-ii/description/

/**
- given the s, while converting to Reverse polish notation evaluate the intermediate results.
- arithmetic rules:
    1. *,/ greater precedence than +,-.
    2. if * compare with /, then left to right. Therefore pop the operator stack since the operator already on the stack is on the left.
* if included brackets:
    ( and ) have lowest precedence, since encountering ')' will force the existing operations to be performed until '(' is hit.

    if s[i] === '('
        push(s[i])
    else if an operator char
        while (stack.length > 0 and curr op lower precedence than top)
            perform operation



create function to return precedence of operations
    +, - = 0
    *, / = 1

    - while the operator stack top has a higher precedence, the operation must be performed before pushing current operator

main
    create a stack for the operands
    create a stack for the operators
    create Set for operators

    while i < s.length
        if (s[i] not in operators and NOT space){
            sNum = ''
            iterate until get full number
            operandStack.push(Number(sNum))
        } else operator {
            while (stack.length > 0 && precedence(s[i]) <= precendence(operatorStack.top)) {
                operand2 = operandStack.pop()
                operand1 = operandStack.pop()
                optor = operatorStack.pop()
                operandStack.push(performOp(operand1, operand2, optor))
            }

            operatorStack.push(s[i])

        }

while (operatorStack.length > 0) {
    operand2 = operandStack.pop()
    operand1 = operandStack.pop()
    optor = operatorStack.pop()
    operandStack.push(performOp(operand1, operand2, optor))
}

return operandStack.pop()   // if well formed equation, the only remaining value is the final result.

- Time: O(n)
- Space: O(n)

 */

const precedence = function(operator) {
    if (operator === '+' || operator === '-') {
        return 1
    } else if (operator === '*' || operator === '/') {
        return 2
    }

    return 0
}

const performOp = (op1, op2, optr) => {
    if (optr === '+') {
        return op1 + op2
    } else if (optr === '-') {
        return op1 - op2
    } else if (optr === '*') {
        return op1 * op2
    } else if (optr === '/') {
        let res = op1 / op2
        if (res < 0) {
            res = Math.ceil(res)
        } else {
            res = Math.floor(res)
        }
        return res
    }

    return 0
}

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    const operandSk = new Array()
    const operatorSk = new Array()

    const operators = new Set(['*', '/', '+', '-'])

    let i = 0
    while (i < s.length) {
        if (s[i] !== ' ' && !operators.has(s[i])) {
            let sNum = ''
            while (i < s.length && isNaN(s[i]) === false) {
                sNum += s[i]
                i += 1
            }
            operandSk.push(Number(sNum))
            continue
        } else if (operators.has(s[i])) {
            while (operatorSk.length > 0 && precedence(s[i]) <= precedence(operatorSk[operatorSk.length - 1])) {
                const op2 = operandSk.pop()
                const op1 = operandSk.pop()
                const optr = operatorSk.pop()
                operandSk.push(performOp(op1, op2, optr))
            }
            operatorSk.push(s[i])
        }
        i += 1
    }

    while (operatorSk.length > 0) {
        const op2 = operandSk.pop()
        const op1 = operandSk.pop()
        const optr = operatorSk.pop()
        operandSk.push(performOp(op1, op2, optr))
    }
    // console.log(operandSk)
    return operandSk.pop()
};