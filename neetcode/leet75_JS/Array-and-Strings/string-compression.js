// https://leetcode.com/problems/string-compression/?envType=study-plan-v2&envId=leetcode-75

/*
create pointer i for the current input index in chars
create pointer j to iterate start
create pointer k to iterate end

while j < chars.length
    curr = chars[j]
    while (k < chars.length && curr === chars[k]) {
        k += 1
    }

    len = k - j

    chars[i] = curr
    i + 1
    if (len > 1) {
        lenStr = len.toString()
        for (let a = 0; a < lenStr.length; a ++) {
            chars[i] = lenStr[a]
            i += 1
        }
    }

    k = j

return i + 1

- Time: O(n)
- Space: O(1)

*/

/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let i = 0
    let j = 0
    let k = 0

    while (j < chars.length) {
        const curr = chars[j]

        while (k < chars.length && curr === chars[k]) {
            k += 1
        }

        const len = k - j
        chars[i] = curr
        i += 1

        if (len > 1) {
            const lenStr = len.toString()
            for(let a = 0; a < lenStr.length; a ++) {
                chars[i] = lenStr[a]
                i += 1
            }
        }

        j = k
    }
    console.log(chars)
    return i
};