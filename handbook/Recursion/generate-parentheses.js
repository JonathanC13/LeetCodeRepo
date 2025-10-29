// https://leetcode.com/problems/generate-parentheses/description/

/**
1. Assumptions
    1. None

2. input validation
    - typeof n === 'Number'

3. time/space constraints
    BTTC: O(n * 2^n)    // each index has the 2 paths of open and close bracket
    Space: O(n) // recursive stack

4. edge cases and some test cases
    edge cases
    1. if (n === 0): return [""]
    test cases
    1. 
        Input 
            n = 1

        Output
            ["()"]

    2.
        Input
            n = 2
        
        Output
            ["(())", "()()"]

5. visualize by drawing and manually solve
6. break into subproblems
    Use recursive backtracking to explore different paths from an index, 1 path choose open bracket if has inventory or choose close bracket if there is an open bracket waiting to be closed.

    maintain recursive variables for:
        combo: the current String of parentheses
        opened: how many opened currently in combo
        closed: how many closed
        openStack: Will contain the open backets not closed yet.

    rec(...)
        base case 1
            if (opened === n && closed === n) {
                add to result Array
                return
            }

        if (opened < n) {
            // can still add open brackets
            openStack.push('(')
            rec(..., opened + 1, closed, combo + "(")
            openStack.pop()
        }

        if (closed < n && openStack.length > 0) {
            // closed brackets available and there are open brackets to be closed
            openStack.pop()
            rec(..., opened, closed + 1, combo + ")")
            openStack.push('('))
        }

        return

7. algos
    - Recursive backtracking

8. Data structures
    - recursive stack
    - stack

9. Complexity
    Time: O(n * 2^n)    // each index has the paths of open and close bracket
    Space: O(n) // recursive stack
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    if (n === 0) {
        return [""]
    }

    const res = new Array()
    rec(n, 0, 0, new Array(), "", res)
    return res
};

const rec = (n, opened, closed, openStack, combo, res) => {
    if (opened === n && closed === n) {
        res.push(combo)
        return
    }

    if (opened < n) {
        openStack.push('(')
        rec(n, opened + 1, closed, openStack, combo + '(', res)
        openStack.pop()
    }

    if (closed < n && openStack.length > 0) {
        openStack.pop()
        rec(n, opened, closed + 1, openStack, combo + ')', res)
        openStack.push('(')
    }

    return
}