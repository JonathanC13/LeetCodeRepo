// https://leetcode.com/problems/basic-calculator-ii/description/

/**
1. Assumptions
    s is a valid mathematical expression
    1. Two operators will not appear adjacent like 3 +- 2
    2. no overflow of 32 bit integer
    3. division floor toward 0

2. input validation
    1. mathematical expression
        regesx = /^[0-9 ()+\-/*]*$/        // all digits, space, bracks, operations

3. time and space constraints
    BTTC: O(n)
    Space: O(m) // Reversed polish notation Stack

4. edge cases and some test cases
    edge cases
    1. s.length === 0: return 0
    test cases
    1. unary operation at beginning
        input
            s = '-2 + 3'
        expected output
            1
    2. unary operation after open bracket
        input
            s = '2 + (-2 * 4)'
        expected output
            -8
    1. order of operations
        input
            s = 2 + 3 * 2 / 6
        expected output
            3

5. visualize by drawing and manually solve
6. break into subproblems
    handle unary:
        1. at beginning. -2 + 3
            initial state: unary = true
        2. after open bracket
            if open bracket
                unary = true

        at beginning of loop. Check if true unary, the non-space character is either '+' or '-'
            if true, push 0 into operand Stack



    iterate expression s from left to right
        if space: 
            i += 1
            continue

        can operate on reverse polish notation while iterating the expression, do not need to build entire RPN. Order of operations is:
            0: (, )
            1: +, -
            2: *, /
            if equal precedence apply the top's operator, since iterating left to right this is the correct order of operations

        if operand
            since string, extract Number
            push onto operand Stack
        else operator or open bracket
            while (stack not empty and current operator precedence <= stack's top)
                need to perform operation for correct order of operator application on operands

            push current operator onto stack

        else
            // closed bracket
            while operator top is not (
                perform operations

            pop top, it will be the open bracket since expression is valid.

    complete remaining operations

    return stack top. The only value in the Stack is the final result.

7. algos
    - Stack
    - Reverse polish notation

8. data structures
    - Stack
    - Array

9. Complexity
    Time: O(n)
    Space: O(m) // Stack
 */

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    if (s.length === 0) {
        return 0
    }

    const operands = new Array()
    const operators = new Array()

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
                operands.push(0)
            }
        }

        if (isNaN(s[i]) === false) {
            let l = i
            while (i < s.length && isNaN(s[i]) === false) {
                i += 1
            }
            operands.push(Number(s.slice(l, i)))
        } else if (s[i] === '(') {
            unary = true
            operators.push('(')

            i += 1
        } else if (s[i] === ')') {
            while (operators.length > 0 && operators[operators.length - 1] !== '(') {
                const opr = operators.pop()
                if (operands.length < 2) {return null}
                const op2 = operands.pop()
                const op1 = operands.pop()
                operands.push(operation(op1, op2, opr))
            }

            operators.pop()
            i += 1
        } else {
            // operators
            while (operators.length > 0 && prec(s[i]) <= prec(operators[operators.length - 1])) {
                const opr = operators.pop()
                if (operands.length < 2) {return null}
                const op2 = operands.pop()
                const op1 = operands.pop()
                operands.push(operation(op1, op2, opr))
            }

            operators.push(s[i])
            i += 1
        }
    }

    while (operators.length > 0) {
        const opr = operators.pop()
        if (operands.length < 2) {return null}
        const op2 = operands.pop()
        const op1 = operands.pop()
        operands.push(operation(op1, op2, opr))
    }
    
    if (operands.length !== 1) {
        return null
    } else {
        return operands.pop()
    }
};

const prec = (op) => {
    if (op === '(' || op === ')') {
        return 0
    } else if (op === '+' || op === '-') {
        return 1
    } else {
        return 2
    }
}

const operation = (op1, op2, opr) => {
    if (opr === '+') {
        return op1 + op2
    } else if (opr === '-') {
        return op1 - op2
    } else if (opr === '*') {
        return op1 * op2
    } else {
        let res = op1 / op2
        if (res < 0) {
            return Math.ceil(res)
        } else {
            return Math.floor(res)
        }
    }
}