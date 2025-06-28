// https://leetcode.com/problems/longest-common-prefix/?envType=study-plan-v2&envId=top-interview-150

/*
currPre = ''

iterate 0 to end of word1
    let match = true
    pref = currPre + word1[i]

    iterate the rest of the words
        if i >= word2.length || word1[i] === word2[i]
            match = false
            break

    if (!match) {
        return currPre
    }

    // all word2s has same prefix
    currPre = pref

- Time: O(m * n)    // m = the shortest word, n = number of words
- Space: O(m)


*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return ''
    }

    let currPre = ''

    for (let i = 0; i < strs[0].length; i ++) {
        let match = true
        let pre = currPre + strs[0][i]

        for (let j = 1; j < strs.length; j ++) {
            if (i >= strs[j].length || strs[0][i] !== strs[j][i]) {
                match = false
                break
            }
        }

        if (!match) {
            return currPre
        }

        currPre = pre
    }

    return currPre
};