// https://neetcode.io/problems/sum-of-two-integers

class Solution {
    /**
     * @param {number} a
     * @param {number} b
     * @return {number}
     */
    getSum(a, b) {
        let carry = 0
        let res = 0
        let mask = 0xFFFFFFFF   // 32 bits
        for (let i = 0; i < 32; i ++) {
            let aBit = a & 1    // extract right most bit
            let bBit = b & 1
            let toAdd = aBit ^ bBit ^ carry // determine curr bit to add to result
            carry = (aBit + bBit + carry) >= 2 ? 1 : 0  // get carry for next
            
            res += toAdd << i   // add to result, toAdd is shifted to correct position

            a = a >> 1
            b = b >> 1
        }

        return res
    }
}
