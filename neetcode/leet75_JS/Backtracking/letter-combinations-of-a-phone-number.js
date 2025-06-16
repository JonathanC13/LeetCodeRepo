// https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/?envType=study-plan-v2&envId=leetcode-75

/*
create a map for:
    key: the number
    value: array for the letters

recursive backtracking (digits, i, mapping, combos, combo)
    base case 1: 
        if (i >= digits.length)
            no more digits and combination complete
            combos.push(combo)
            return

    // x number of paths, x = letters for the digit
    iterate the letters the digit can represent
        combo.push(letter[i])
        combos += dfs(digits, i + 1, combo)
        combo.pop()

    return

- Time: O(4^n)  . n = length of digits. 4^n since each digit has max 4 paths.
- Space: O(n)
*/

const dfs = (digits, i, mapping, combos, combo) => {
    if (i >= digits.length) {
        combos.push(combo.join(''))
        return
    }

    for (let j = 0; j < mapping.get(digits[i]).length; j ++) {
        combo.push(mapping.get(digits[i])[j])
        dfs(digits, i + 1, mapping, combos, combo)
        combo.pop()
    }

    return
}

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits === '') {
        return []
    }

    const combos = new Array()
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

    dfs(digits, 0, mapping, combos, [])
    return combos
};