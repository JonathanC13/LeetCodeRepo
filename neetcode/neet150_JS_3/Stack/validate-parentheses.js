// https://neetcode.io/problems/validate-parentheses/question

/**
 * 1. Assumptions
 *  1. None
 * 
 * 2. input validation
 *  1. s
 *      - typeof s === 'string'
 *      - s.length >= 0
 *      - regex = '/^[(){}/[/]]*$/'
 * 
 * 3. time and space constraints
 *  BTTC: O(n)  // n = s.length
 *  Space: O(n)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if s.length === 0: return true
 *  2. if s.length === 1: return false
 * 
 *  test cases
 *  1. invalid closing type
 *      inputs
 *          s = '(){]}'
 *      expected output
 *          false
 *  2. invalid closing order
 *      inputs
 *          s = '())[]'
 *      expected output
 *          false
 *  3. not all open brackets closed
 *      inputs
 *          s = ''([()]'
 *      expected output
 *          false
 *  4. valid
 *      inputs
 *          s = '([{}])'
 *      expected output
 *          true
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  Since order of which bracket to close is the most recently opened, use a Stack since Last in First out
 * 
 *  iterate s
 *      if open bracket
 *          push onto Stack
 *      else
 *          open = pop top
 *          if 'open' is not the corresponding open bracket to the current closed bracket: return false
 * 
 *  if Stack still has elements, it means not all open brackets were closed: return false
 *  return true
 * 
 * 7. algos
 *  - Stack operations LIFO
 * 
 * 8. data structures
 *  - Stack
 * 
 * 9. complexity
 *  Time: O(n)
 *  Space: O(n)
 *          
 * 
 */

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length === 0) {
            return true
        }
        if (s.length === 1) {
            return false
        }

        const setOpenBrackets = new Set(['(', '{', '['])
        const mapClosedBrackets = new Map([
            [')', '('],
            ['}', '{'],
            [']', '[']
        ])

        const stackOpen = new Array()

        for (let i = 0; i < s.length; i ++) {
            if (setOpenBrackets.has(s[i])) {
                stackOpen.push(s[i])
            } else {
                const open = stackOpen.pop()
                if (mapClosedBrackets.get(s[i]) !== open) {
                    return false
                }
            }
        }

        if (stackOpen.length !== 0) {
            return false
        }
        return true
    }
}
