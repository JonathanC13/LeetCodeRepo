// https://leetcode.com/problems/greatest-common-divisor-of-strings/description/?envType=study-plan-v2&envId=leetcode-75

/*
Need to start String x with the longest of str1 and str2

while x.length > 0
    evaluate if str1 and str2 can be divided by x, if true return x

    // if could not divide, reduce x by removing the last character

return x

- Time: O(x * (m + n))    //  x = shortest of str1, str2, m = str1 length, n = str2 length
- Space: O(x)           // x = shortest of str1
*/

var checkDivide = function(str, divisor) {
    let len = str.length
    let i = 0
    let j = 0
    while (i < len) {
        if (str[i] !== divisor[j]) {
            return 0
        }
        i += 1
        j += 1
        if (j >= divisor.length) {
            j = 0
        }
    }
    return i
}

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    const m = str1.length
    const n = str2.length
    let x = m < n ? str1 : str2

    while (x.length > 0) {
        if (m % x.length === 0 && n % x.length === 0) {
            const i = checkDivide(str1, x)
            const j = checkDivide(str2, x)
            if (i === m && j === n) {
                return x
            }
        }

        x = x.slice(0, x.length - 1)
    }
    return x
};