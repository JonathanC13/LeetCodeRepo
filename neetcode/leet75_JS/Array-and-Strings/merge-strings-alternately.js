// https://leetcode.com/problems/merge-strings-alternately/description/?envType=study-plan-v2&envId=leetcode-75

/*
create new array of length word1.length + word2.length
i = 0
j = 0
k = 0
while word1 and word2 have characters
    add char from word1 at i into res arr
    i += 1
    k += 1
    add char from word2 at j into res arr
    j += 1
    k += 1

add remaining chars if word1 or word2 not complete

return res.join('')

- Time: O(m + n)
- Space: O(m + n)
*/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    const m = word1.length
    const n = word2.length
    const res = new Array(m + n)
    let i = 0
    let j = 0
    let k = 0

    while (i < m || j < n) {
        if (i < m) {
            res[k] = word1[i]
            i += 1
            k += 1
        }
        if (j < n) {
            res[k] = word2[j]
            j += 1
            k += 1
        }
    }
    
    return res.join('')
};