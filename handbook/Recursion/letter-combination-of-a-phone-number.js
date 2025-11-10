// https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/

/**
 * 1. Assumptions
 *  1. None
 * 
 * 2. input validation
 *  1. type
 *      1. typeof digits === 'string'
 *  2. length
 *      1. if digits.length === 0: return [""]
 *  3. content
 *      1. digits regex = /^[2-9]*$/
 * 
 * 3. time and space constraints
 *  BTTC: O(n * 3^n)    // each digit n * average 3 paths
 *  Space: O(n)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if digits === 0: return [""]
 *  test cases
 *  1. 
 *      input
 *          digits = "23"
 *      expected output
 *          ["ad", "ae", "af", "bd', 'be', 'bf', 'cd', 'ce', 'cf']
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into smaller subproblems
 * 
 * recursive backtracking
 * 
 *  for the current digit iterate the characters it can represent
 *      add the character to the String combo
 *      recursively call with the next digit's index
 *      remove the character from the String combo so that the next will be used
 * 
 *  base case 1: no more digits
 *      if (i >= digits.length) {
 *          res.push(combo)
 *          return
 *      }
 * 
 * 7. algos
 *  1. recursive backtracking
 * 
 * 8. data structures
 *  1. Strings
 *  2. Recursive stack
 * 
 * 9. Complexity
 *  Time: O(n * 3^n)    // each digit n * average 3 paths
 *  Space: O(n)
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