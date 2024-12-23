// https://neetcode.io/problems/combinations-of-a-phone-number

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
                ['2', 'abc'],
                ['3', 'def'],
                ['4', 'ghi'],
                ['5', 'jkl'],
                ['6', 'mno'],
                ['7', 'pqrs'],
                ['8', 'tuv'],
                ['9', 'wxyz']
            ]
        )

        const res = []

        this.DFS(digits, 0, res, map, '')

        return res
    }

    DFS(digits, i, res, map, str) {
        if (str.length === digits.length) {
            res.push(str)
            return
        }

        const chars = map.get(digits[i])

        for (let j = 0; j < chars.length; j ++) {
            this.DFS(digits, i + 1, res, map, str + chars[j])
        }

        return
    }


}
