// https://neetcode.io/problems/sum-of-two-integers

/*
Time: O(1)
Space: O(1)
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
            const currbit = abit ^ bbit ^ carry
            res = res | (currbit << i)

            carry = abit + bbit + carry >= 2 ? 1 : 0
        }

        const mask = 0xFFFFFFFF // handle signed
        if (res > 0x7FFFFFFF) {
            res = ~(res ^ mask);
        }


        return res
    }
}
