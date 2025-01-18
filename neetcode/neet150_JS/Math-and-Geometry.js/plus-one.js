// https://neetcode.io/problems/plus-one

class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        if (digits.length === 0) {
            return digits
        }

        let carry = 1
        let i = digits.length - 1
        while(carry && i >= 0) {
            if (digits[i] === 9) {
                digits[i] = 0
                carry = 1
            } else {
                digits[i] += carry
                carry = 0
            }
            i -= 1
        }

        return carry === 1 ? [carry, ...digits] : digits
    }
}
