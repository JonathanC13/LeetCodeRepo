// https://neetcode.io/problems/sum-of-two-integers/question

/**
 * 1. Assumptions
 *  1. fit 32 bit unsigned
 * 
 * 2. input validation
 *  1. a and b
 *      - typeof a === 'number'
 *      - -1000 <= a,b <= 1000
 * 
 * 3. time and space constraints
 *  BTTC: O(1)
 *  Space: O(1)
 *  
 */

class Solution {
    /**
     * @param {number} a
     * @param {number} b
     * @return {number}
     */
    getSum(a, b) {
        let res = 0
        let carry = 0
        for (let i = 0; i < 32; i ++) {
            const abit = (a >> i) & 1
            const bbit = (b >> i) & 1
            res = res | (abit ^ bbit ^ carry) << i
            carry = abit + bbit + carry >= 2 ? 1 : 0
        }

        // if the primative is unsigned and stores > 32 bit
        const mask = 0xFFFFFFFF
        // check if negative 32 bit number
        if (res > 0x7FFFFFFF) {
            res = ~(res ^ mask) // convert to signed integer
        }
        return res
    }
}