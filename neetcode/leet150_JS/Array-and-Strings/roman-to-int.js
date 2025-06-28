// https://leetcode.com/problems/roman-to-integer/description/?envType=study-plan-v2&envId=top-interview-150

/*
Create a Map for the character to integer value

res = 0
while i < s.length
    val = map.get(char at i)
    if i + 1 < s.length and map.get(char at i + 1) === val * 5 or === val * 10
        val = map.get(char at i + 1) - val
        i += 2
    else
        i += 1

    res += val

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
    let i = 0
    while (i < s.length) {
        let val = mapping.get(s[i])
        if (i + 1 < s.length && (mapping.get(s[i + 1]) === val * 5 || mapping.get(s[i + 1]) === val * 10)) {
            val = mapping.get(s[i + 1]) - val
            i += 2
        } else {
            i += 1
        }
        res += val
    }

    return res
};