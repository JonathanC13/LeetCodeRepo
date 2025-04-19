// https://neetcode.io/problems/generate-parentheses

/*
recursive DFS

root has to be '('

each recursive step has:
    1. a Stack to ensure valid next char
    2. a String for the current string
    3. n

2 paths at each step:
    1. if n !== 0: add '('
    2. if stack.size() !== 0:
        add ')' and pop a '('

base cases:
    1. if stack.size() === 0 && n === 0
        res.push(String)

- Time: O(2^n)
- Space: O(n)

WRONG

recusrive dfs backtracking
create a stack  with an array for the current parentheses String

dfs
    if numOfOpen === numOfClosed === n:
        add to res

    if (numOfOpen < n)
        can add '(' to stack
        rec to next char: numOfOpen + 1
        pop '('

    if (numOfClosed < numOfOpen) 
        can add ')'
        rec to next char: numOfClosed + 1
        pop '('

- Time: O(< 2^n)
- Space: O(n)
*/

class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        if (n === 0) {
            return ['']
        }

        const stack = []
        const res = []
        this.gen(n, 0, 0, stack, res)
        return res
    }

    gen(n, openN, closedN, stack, res) {
        if (openN === closedN && openN === n) {
            res.push(stack.join(''))
            return
        }

        if (openN < n) {
            stack.push('(')
            this.gen(n, openN + 1, closedN, stack, res);
            stack.pop()
        }
        if (closedN < openN) {
            stack.push(')')
            this.gen(n, openN, closedN + 1, stack, res);
            stack.pop()
        }
    }
}
