// https://leetcode.com/problems/add-binary/

/**
binary least significant bit on the right
when 1 + 1 it = 0 and carry = 1

let carry = 0
let res String = ""
while (a.length > 0 || b.length > 0)
    get aBit if a.length > 0, right shift by one to drop most right bit
    get bBit if b.length > 0, right shift by one

    resSum = Number(aBit) + Number(bBit)
    add to res String. since going right to left. res = (resSum % 2) + res
    get the carry = floor(resSum/2) // 2 and 3 will produce a carry

if there is a remaining carry, add to front of res

return res

- Time: O(n)    // longest of a and b
- Space: O(n)
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let carry = 0
    let res = ""
    while (a.length > 0 || b.length > 0) {
        let aBit = 0
        if (a.length > 0) {
            aBit = Number(a[a.length - 1])
            a = a.slice(0, a.length - 1)
        }

        let bBit = 0
        if (b.length > 0) {
            bBit = Number(b[b.length - 1])
            b = b.slice(0, b.length - 1)
        }

        const resBit = aBit + bBit + carry
        res = (resBit % 2).toString() + res
        carry = Math.floor(resBit / 2)
    }

    if (carry !== 0) {
        res = carry.toString() + res
    }

    return res
};