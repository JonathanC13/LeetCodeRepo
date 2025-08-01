// https://leetcode.com/problems/add-binary/?envType=study-plan-v2&envId=top-interview-150

/**
while a OR b still have bits
    bit = carry // from last operation
    if a has bits
        bit += a's right bit (convert to number since char)
    if b has bits
        bit += b's right bit

    to get the bit at current position, it is the remainder of bit % 2
    res = (bit % 2).toString() + res
    to get the carry for the next bit, it is the number of times 2 is divided into bit
    carry = floor(bit / 2)

if carry === 1
    res = '1' + res

- Time: O(n)    // n = longest of a and b
- Space: O(n)   // n for result
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let res = ''
    let carry = 0
    while (a.length > 0 || b.length > 0) {
        let curr = carry
        if (a.length > 0) {
            curr += Number(a[a.length - 1])
            a = a.slice(0, a.length - 1)
        }
        if (b.length > 0) {
            curr += Number(b[b.length - 1])
            b = b.slice(0, b.length - 1)
        }
        res = (curr % 2).toString() + res
        carry = Math.floor(curr / 2)
    }
    if (carry === 1) {
        res = carry.toString() + res
    }
    return res
};