// https://neetcode.io/problems/combinations-of-a-phone-number

/*
create a Map for:
    key = digit
    value = Array of chars

recursive backtracking
    for each digit, choose the next char in the value Array to use in the path

- Time: O(n * m^n)    // n = number of digits. m = max number of chars for a digit
- Space: O(n)
*/

class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if (digits.length === 0) {
            return []
        }
        const map = new Map([
            ['2', ['a','b','c']],
            ['3', ['d','e','f']],
            ['4', ['g','h','i']],
            ['5', ['j','k','l']],
            ['6', ['m','n','o']],
            ['7', ['p','q','r','s']],
            ['8', ['t','u','v']],
            ['9', ['w','x','y','z']],
        ])
        // console.log(map)

        const res = new Array()
        this.dfs(digits, 0, map, new Array(), res)
        return res
    }

    dfs(digits, i, map, combo, res) {
        if (i === digits.length) {
            res.push(combo.join(''))
            return
        }

        for (let c = 0; c < map.get(digits[i]).length; c ++) {
            combo.push(map.get(digits[i])[c])
            this.dfs(digits, i + 1, map, combo, res)
            combo.pop()
        }

        return
    }
}
