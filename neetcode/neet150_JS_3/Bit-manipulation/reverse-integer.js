// https://neetcode.io/problems/reverse-integer/question

/**
 * 1. Assumptions
 *  1. ...
 * 
 * 2. input validation
 *  - x
 *      - typeof x === 'number'
 *      - x within 32 bit integer
 * 
 * 3. time and space constraints
 *  BTTC: O(1)
 *  Space: O(1)
 * 
 * 4. edge case and some test cases
 *  edge cases
 *  1. if x === 0: return 0
 * 
 *  test cases
 *  1. reversed is within 32 bit
 *      inputs
 *          x = 1356
 *      expected output
 *          6531
 *  2. outside of 32 bit integer
 *      inputs
 *          x = 1234566782
 *      expected output
 *          false
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  extract most right digit, then result = result * 10 + digit
 *  to avoid using values outside of 32 bit signed, check if have room:
 *      +ive, return 0 if:
 *          1. res > max / 10
 *          2. depend on last digit. for current res * 10: max / 10 === current res && adding the digit doesnt cause overflow: digit > max % 10
 *      -ive, 
 *          1. res < maxNI / 10
 *          2. res === maxNI / 10 && digit > maxNI % 10
 * 
 * 7. algos
 *  - ...
 * 
 * 8. data structures
 *  - ...
 * 
 * 9. complexity
 *  Time: O(1)
 *  Space: O(1)
 */

class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    reverse(x) {
        const maxPI = (2 ** 31) - 1
        const maxNI = -(2 ** 31)
        
        let n = x
        let res = 0
        while (n !== 0 && n !== -0) {
            console.log(n)
            const digit = n % 10
            n = Math.trunc(n / 10)

            if ((res > maxPI / 10 || (res === maxPI / 10 && digit > maxPI % 10)) || 
                (res < maxNI / 10 || (res === maxNI / 10 && digit > maxNI % 10))) {
                return 0
            }

            res = res * 10 + digit
        }
        
        return res === -0 ? 0 : res
    }
}
