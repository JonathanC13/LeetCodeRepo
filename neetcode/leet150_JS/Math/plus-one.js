// https://leetcode.com/problems/plus-one/description/?envType=study-plan-v2&envId=top-interview-150

/*
create result arr
carry = 0
iterate digits right to left
    sum = digit[i] + 1 + carry
    if (sum > 9)
        carry = 1
    else 
        carry = 0

    res.push(sum)

if (carry !== 0)
    res.push(carry)

return res.reverse()
*/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const res = new Array()
    let carry = 0
    digits[digits.length - 1] = digits[digits.length - 1] + 1
    for (let i = digits.length - 1; i >= 0; i--) {
        let sum = digits[i] + carry
        if (sum > 9) {
            sum = 0
            carry = 1
        } else {
            carry = 0
        }

        res.push(sum)
    }

    if (carry !== 0) {
        res.push(carry)
    }

    return res.reverse()
};