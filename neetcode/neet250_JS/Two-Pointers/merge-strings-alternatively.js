// https://leetcode.com/problems/merge-strings-alternately/

/*
- edge case 1: if (word1.length === 0 || word2.length === 0) {
    return word1.length ? word1 : word2
}

initialize a w1 pointer to the beginning of word1. = 0
initilaize a w2 pointer to the beginnging of word2. = 0
let res = ''
while (w1 < word1.length && w2 < word2.length) {
    res = res + word1[w1] + word2[w2]
    w1 += 1
    w2 += 1
}

// left overs
while (w1 < word1.length) {
    res += word1[w1]
    w1 += 1
}

while (w2 < word2.length) {
    res += word2[w2]
    w2 += 1
}

return res

- Time: O(m + n)
- Space: O(m + n)
*/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    if (word1.length === 0 || word2.length === 0) {
        return word1.length ? word1 : word2
    }

    let w1 = 0
    let w2 = 0
    let res = ''
    while (w1 < word1.length && w2 < word2.length) {
        res = res + word1[w1] + word2[w2]
        w1 += 1
        w2 += 1
    }

    while (w1 < word1.length) {
        res += word1[w1]
        w1 += 1
    }

    while (w2 < word2.length) {
        res += word2[w2]
        w2 += 1
    }

    return res
};