// https://neetcode.io/problems/valid-parenthesis-string/question

/**
 * 1. Assumptions
 *  1. ...
 * 
 * 2. input validation
 *  - typeof s === 'string'
 *  - regex = '/^[()*]*$'
 * 
 * 3. time and space constraints
 *  BTTC: O(n)
 *  Space: O(n)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if s.length === 0: return true
 * 
 *  test cases
 *  1. valid with *
 *      inputs
 *          s = '*()(*)*))'
 *      expected output
 *          true
 *  2. invalid
 *      inputs
 *          s = '()*('
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  Use Stacks since closing perenthesis closes the most recent open
 *  - if see (: push into openStack
 *  - if see *: push into starStack
 *  - if see ): 
 *      if openStack.length > 0: pop openStack // use openStack first since * more flexible and can be ""
 *      else if starStack > 0: pop starStack
 *      else return false, invalid
 * 
 *  At end if openStack.length > 0, need to see if '*' can close all opens
 *  - openStack element needs to store index, i, of open char
 *  - starStack element needs to store index, i, of * char because * needs to be after to close open
 * 
 * 7. algos
 *  - Stack operations
 * 
 * 8. data structures
 *  - Stack
 * 
 * 9. complexity
 *  Time: O(n)
 *  Space: O(n)
 */

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    checkValidString(s) {
        const open = new Array()
        const star = new Array()

        for (let i = 0; i < s.length; i ++) {
            if (s[i] === '(') {
                open.push(i)
            } else if (s[i] === '*') {
                star.push(i)
            } else {
                if (open.length > 0) {
                    open.pop()
                } else if (star.length > 0) {
                    star.pop()
                } else {
                    return false
                }
            }
        }

        while (open.length > 0 && star.length > 0 && open[open.length - 1] < star[star.length - 1]) {
            open.pop()
            star.pop()
        } // once open i > star i, no way to close (

        return open.length === 0
    }
}
