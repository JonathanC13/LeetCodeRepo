// https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/

/**
create a Map for the number mapping to the letters
    const mapping = new Map(
        [
            ['2', ['a', 'b', 'c']],
            ['3', ['d', 'e', 'f']],
            ['4', ['g', 'h', 'i']],
            ['5', ['j', 'k', 'l']],
            ['6', ['m', 'n', 'o']],
            ['7', ['p', 'q', 'r', 's']],
            ['8', ['t', 'u', 'v']],
            ['9', ['w', 'x', 'y', 'z']]
        ]
    )

main
    res = new Array()

    rec(digits, 0, currStr, res, mapping)

    return res

* {String} digits
* {number} i    // the current digit to pick a character for
* {String} currStr
* {String[]} res
* {Map} mapping
rec
    base case 1:
    if (i === digits.length) {
        // no more digits to convert
        res.push(currStr)
    }

    const chars = mapping.get(digits[i])

    // choose the char to represent the digit
    iterate j in chars from 0 to chars.length
        rec(digits, i + 1, currStr + chars[j], res, mapping)

    return

- Time: O(n * 4^n)  // 4^n = a digit has either 3 or 4 chars to include in the combo, * n since must perform for each digit
- Space: O(n)
 */

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits.length === 0) {
        return []
    }

    const res = new Array()
    const mapping = new Map(
        [
            ['2', ['a', 'b', 'c']],
            ['3', ['d', 'e', 'f']],
            ['4', ['g', 'h', 'i']],
            ['5', ['j', 'k', 'l']],
            ['6', ['m', 'n', 'o']],
            ['7', ['p', 'q', 'r', 's']],
            ['8', ['t', 'u', 'v']],
            ['9', ['w', 'x', 'y', 'z']]
        ]
    )

    rec(digits, 0, "", res, mapping)
    return res
};

const rec = function(digits, i, currStr, res, mapping) {
    if (i === digits.length) {
        res.push(currStr)
        return
    }

    const chars = mapping.get(digits[i])

    for (let j = 0; j < chars.length; j ++) {
        rec(digits, i + 1, currStr + chars[j], res, mapping)
    }

    return
}