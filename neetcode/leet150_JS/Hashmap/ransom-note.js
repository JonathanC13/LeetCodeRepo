// https://leetcode.com/problems/ransom-note/description/?envType=study-plan-v2&envId=top-interview-150

/*
create a Map:
    key: character
    val: freq of char in magazine

iterate the ransom note
    if not in magMap or count <= 0
        return false

    reduce freq

return true

- Time: O(m + n)    // m = magazine length, n = ransom note length
- Space: O(m)
*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if (magazine.length < ransomNote.length) {
        return false
    }

    const magMap = new Map()
    for (let i = 0; i < magazine.length; i ++) {
        if (!magMap.has(magazine[i])) {
            magMap.set(magazine[i], 0)
        }

        magMap.set(magazine[i], magMap.get(magazine[i]) + 1)
    }

    for (let i = 0; i < ransomNote.length; i ++) {
        if (!magMap.has(ransomNote[i]) || magMap.get(ransomNote[i]) <= 0) {
            return false
        }

        magMap.set(ransomNote[i], magMap.get(ransomNote[i]) - 1)

    }

    return true
};