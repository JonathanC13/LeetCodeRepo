// https://neetcode.io/problems/minimum-stack/question

/**
 * 1. Assumptions
 *  1. ...
 * 
 * 2. input validation
 *  1. val
 *      - typeof val === 'number'
 * 
 * 3. time and space constraints
 *  Every function
 *      BTTC: O(1)
 *      Space: O(1)
 * 
 *  object
 *      Space: O(n) // n = max size stack grows to
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if getMin() called when no values: return null
 * 
 *  test cases
 *  1. min is updated
 *      inputs
 *          operations = ["init", 'push', 1, push, 2, top, getMin, push, -1, top, getMin, pop, top, getMin]
 *      expected output
 *          [null, null, null, 2, 1, null, -1, -1, 2, 1]
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  maintain two stacks with underlying Array
 *  One for normal Stack
 *  One for min Stack, where on push(val), if new val < current minStack top push it else push current minStack top
 *      Therefore each index represents the min value for all indexes below it.
 * 
 * 7. algos
 *  - Stack operations
 * 
 * 8. data structures
 *  - Stack with Arrays
 * 
 * 9. complexity
 *  Each function:
 *      Time: O(1)
 *      Space: O(1)
 * 
 *  Overall object
 *      Space: O(n) // n = max size stack grows to
 *      
 */

class MinStack {
    constructor() {
        this.stk = new Array()
        this.minStk = new Array()
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stk.push(val)

        const n = this.minStk.length
        if (n > 0 && val > this.minStk[n - 1]) {
            this.minStk.push(this.minStk[n - 1])
        } else {
            this.minStk.push(val)
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.stk.pop()
        this.minStk.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.stk[this.stk.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStk[this.minStk.length - 1]
    }
}
