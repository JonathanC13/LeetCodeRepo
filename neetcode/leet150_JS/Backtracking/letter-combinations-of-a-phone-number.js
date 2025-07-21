// https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/?envType=study-plan-v2&envId=top-interview-150

/*
create a Map for the digit to characters:
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

recursive backtracking; maintain current path combination
    base case 1: if (i >= s.length): // no more digits, so push combination into res
        res.push(combo)
        return

    for the digit's chars
        // continue the path with the selected char
        dfs(s, i + 1, map, combo + char[j], res)

    return

- Time: O(3^n)  // 3 options (except 7 and 9 with 4 options) for each digit in String digits
- Space: O(n)   // n for s.length recursive stack
*/

const dfs = (s, i, mapping, combo, res) => {
    if (i >= s.length) {
        res.push(combo)
        return
    }

    for (let j = 0; j < mapping.get(s[i]).length; j ++) {
        dfs(s, i + 1, mapping, combo + mapping.get(s[i])[j], res)
    }

    return
}

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits.length === 0) {
        return []
    }

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

    dfs(digits, 0, mapping, '', res)
    return res
};