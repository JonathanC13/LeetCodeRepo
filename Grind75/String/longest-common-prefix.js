// https://leetcode.com/problems/longest-common-prefix/description/

/**
commonPre = ''

iterate i in strs[0].length
    common = True
    iterate s in strs to strs.length - 1
        if (strs[s].length <= i || strs[s + 1].length <= i || strs[s][i] !== strs[s + 1][i]) {
            common = False
            break
        }

    if (common === True) {
        commonPre += strs[0][i]
    } else {
        break
    }

- Time: O(l * n)    // l = shortest word, n = number of strs
- Space: O(1)
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return ''
    }

    let commonPre = ''

    for (let i = 0; i < strs[0].length; i ++) {
        let common = true
        for (let s = 0; s < strs.length - 1; s ++) {
            if (strs[s].length <= i || strs[s + 1].length <= i || strs[s][i] !== strs[s + 1][i]) {
                common = false
                break
            }
        }

        if (common === true) {
            commonPre += strs[0][i]
        } else {
            break
        }
    }

    return commonPre
};