// https://neetcode.io/problems/combinations-of-a-phone-number

/*
create a Map where the key is the number and the value is the string of characters.

Given the digits, in the recursive function track the:
    index in digits,
    the current string

    - base case: if curr string length === digits.length: res.push(curr string)

    each call is iterating the current digit's mapped value.
        appending the character to the current string
        calling the next recursive step with the next index i
        removing the character after use.

    return

- Time: O(n * k^n). n length of digits * k options^n
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

        this.dfs(digits, 0, res, map, '')

        return res
    }

    dfs(digits, i, res, map, currStr) {
        if (i >= digits.length) {
            res.push(currStr)
            return
        }
        
        for (let j = 0; j < map.get(digits[i]).length; j ++) {
            currStr += map.get(digits[i])[j]
            this.dfs(digits, i + 1, res, map, currStr)
            currStr = currStr.slice(0, currStr.length - 1)
        }

        return
    }
}
