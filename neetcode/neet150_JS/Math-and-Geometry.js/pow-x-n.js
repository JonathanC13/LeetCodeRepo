// https://neetcode.io/problems/pow-x-n

class Solution {
    /**
     * @param {number} x
     * @param {number} n
     * @return {number}
     */
    myPow(x, n) {
        if (n === 0) {
            return 1
        }
        let res = x
        let neg = n < 0
        n = n < 0 ? n * -1 : n
        for (let i = 1; i < n; i ++) {
            res *= x
        }

        if (neg) {
            res = 1 / res
        }

        return res
    }
}
