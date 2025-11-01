// https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/

/**
recursive backtracking
    for each character the current number can represent
        recursively call for the next digit with the current character appended to the current combination

Time: O(n * 3^n)    // each digit n * average 3 paths
Space: O(n)
 */

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
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

    const res = new Array()
    rec(digits, 0, mapping, "", res)
    return res
};

const rec = (digits, i, mapping, combo, res) => {
    if (i >= digits.length) {
        res.push(combo)
        return
    }

    const chars = mapping.get(digits[i])
    for (let j = 0; j < chars.length; j ++) {
        rec(digits, i + 1, mapping, combo + chars[j], res)
    }

    return
}