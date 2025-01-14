// https://neetcode.io/problems/reverse-integer

class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    reverse(x) {
        let res = this.rec(Math.abs(x), 0) * ((x >= 0) ? 1 : -1)

        if (res < -(2 ** 31) || res > (2 ** 31) - 1) {
            return 0
        }

        return res
    }

    rec(x, rev) {
        if (x === 0) {
            return rev
        }
        // to reverse: rev * 10 to move current bits forward 1 place. Then add one's place of x
        rev = rev * 10 + x % 10
        // continue by reducing x by the ones place
        return this.rec(Math.floor(x / 10), rev)
    }
}
