// https://leetcode.com/problems/ransom-note/description/

/**
limited usage of characters from magazine to create the ransom note String

iterate the magazine and record the frequency. Since only lowercase English characters can use an Array of length 26 fill with 0

iterate the ransomNote
    char = ransomNote[i]
    if (magFreq not has the char or magFreq of char is <= 0) {
        // magazine did not have the character or no more usages left
        return false
    }

    // can use the character, reduce by 1 freq
    magFreq at char -= 1

return true // if was able to iterate the entire ransom note, the magazine has sufficient amount of characters

- Time: O(n)
- Space: O(1)   // O(26) = O(1)
 */

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const magFreq = new Array(26).fill(0)

    for (let i = 0; i < magazine.length; i ++) {
        const ord = magazine.charCodeAt(i) - 'a'.charCodeAt(0)

        magFreq[ord] += 1
    }

    for (let i = 0; i < ransomNote.length; i ++) {
        const ord = ransomNote.charCodeAt(i) - 'a'.charCodeAt(0)

        if (magFreq[ord] <= 0) {
            return false
        }

        magFreq[ord] -= 1
    }

    return true
};