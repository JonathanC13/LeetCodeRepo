// https://leetcode.com/problems/longest-common-prefix/description/

/*
- edge case 1: if (strs.length === 0) {return ""}

output = ""
n = strs[0].length
iterate 0 to < n
    iterate 2nd str to last
        if i >= strs[j].length || strs[0][i] !== strs[j][i]
            return output

    output += strs[0][i]

return output

Time: O(m * n). m is the min String length, n is the number of Strings in strs
Space: O(m)
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return ""
    }

    let output = ""
    const wordLen = strs[0].length
    const n = strs.length

    for (let i = 0; i < wordLen; i ++) {
        for (let j = 1; j < n; j ++) {
            if (i >= strs[j].length || strs[0][i] !== strs[j][i]) {
                return output
            }
        }

        output += strs[0][i]
    }

    return output
};