// https://leetcode.com/problems/valid-parentheses/

/**
1. Assumptions
    1. only bracket characters

2. input validation
    1. s only contains the bracket characters
        regex = /^[()\{\}\[\]]*$/

3. time and space constraints
    BTTC: O(n)
    Space: O(n)

4. edge cases and some test cases
    1. if s.length === 0
        return true
    2. if the number of chars is odd, then impossible to be valid 
    if s.length % 2 === 1
        return false
    test cases
    1. valid
        inputs
            s = (()[{}])
        expected output
            true
    2. invalid
        inputs
            s = (){}[)

5. visualize by drawing and solve manually
6. break into subproblems
    since for valid parentheses when a closing bracket appears it must close its associated open bracket. A data structure to maintain the most recent open brackets to least recent is a Stack. Therefore, when a close bracket appears, if the stack is empty or the top open bracket is not correct, return false

7. Algos
    - Stack operations

8. Data structures
    - Stack

9. complexity
    Time: O(n)
    Space: O(n)

 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length === 0) {
        return true
    }
    if (s.length % 2 === 1) {
        return false
    }

    const regex = /^[()\{\}\[\]]*$/
    
    if (regex.test(s) === false) {
        return false
    }

    const openBracks = new Set(['(', '{', '['])
    const closeBracks = new Map([
        [')','('],
        ['}','{'],
        [']','[']
    ])

    const stk = new Array()
    
    for (let i = 0; i < s.length; i ++) {
        if (openBracks.has(s[i])) {
            stk.push(s[i])
        } else if (closeBracks.has(s[i])) {
            if (stk.length === 0 || closeBracks.get(s[i]) !== stk.pop()) {
                return false
            }
        }
    }
    
    return stk.length === 0 ? true : false
};