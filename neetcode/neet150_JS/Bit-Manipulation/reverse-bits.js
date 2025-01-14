// https://neetcode.io/problems/reverse-bits

class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number} - a positive integer
     */
    reverseBits(n) {
        let res = 0
        for (let i = 0; i < 32; i ++) {
            let bit = (n & 1)
            n = n >> 1
            res += bit << 31 - i
        }
        console.log(res)
        console.log(res >>> 1)
        return res >>> 0    // https://stackoverflow.com/questions/5747123/strange-javascript-operator-expr-0
    }
}
