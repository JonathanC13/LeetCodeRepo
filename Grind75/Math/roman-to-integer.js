// https://leetcode.com/problems/roman-to-integer/description/

/**
create map for the roman numerals to digit

const mapping = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000]
])

res = 0

iterate i in String s from 0 to s.length
    if encounter 'I'
        check if next char is 'V' or 'X'
    else if 'X'
        check if next char is 'L' or 'C'
    else if 'C'
        check if next char is 'D' or 'M'
    else
        no altercation of digit

return res

- Time: O(n)
- Space: O(1)
 */

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const mapping = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000]
    ])

    let res = 0
    const n = s.length
    let i = 0
    while (i < n) {
        let v1 = mapping.get(s[i])    // e.g. 1
        if ((s[i] === 'I' || s[i] === 'X' || s[i] === 'C') && i + 1 < n) {
            // need to check if subtraction occurs
            if (mapping.get(s[i + 1]) / 5 === v1 || mapping.get(s[i + 1]) / 10 === v1) {
                // subtraction order valid
                i += 1
                v1 = mapping.get(s[i]) - v1
            }
        } // else, no modification needed therefore just add
        i += 1
        res += v1
    }

    return res
};