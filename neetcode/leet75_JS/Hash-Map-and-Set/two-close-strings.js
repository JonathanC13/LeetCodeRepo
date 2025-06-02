// https://leetcode.com/problems/determine-if-two-strings-are-close/description/?envType=study-plan-v2&envId=leetcode-75

/*
edge case 1: if word1.length !=== word2.length: return false

create 2 Arrays of length 26, fill with false to indicate char present in word
create 2 Arrays of length 26, fill with 0 to save the frequencies of each char

// To check if op 1 can be used, must check that word1 and word2 have the same chars
iterate 0 to < 26
    if char1Arr does not match char2Arr: return false

// For op 2 to work, the frequencies of char in word1 and word2 have to be the same regardless of character, so that the chars can be swapped into the matching freq of the other word
sort freq1Arr and freq2Arr in non-descending
iterat 0 to < 26
    if freq1Arr does not match freq2Arr

return true

- Time: O(n log n). n log n for the sort of frequencies
- Space: O(n)
*/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    if (word1.length !== word2.length) {
        return false
    }

    const char1Arr = new Array(26).fill(false)
    const char2Arr = new Array(26).fill(false)
    const freq1Arr = new Array(26).fill(0)
    const freq2Arr = new Array(26).fill(0)

    for (let i = 0; i < word1.length; i ++) {
        char1Arr[word1.charCodeAt(i) - 'a'.charCodeAt(0)] = true
        char2Arr[word2.charCodeAt(i) - 'a'.charCodeAt(0)] = true

        freq1Arr[word1.charCodeAt(i) - 'a'.charCodeAt(0)] += 1
        freq2Arr[word2.charCodeAt(i) - 'a'.charCodeAt(0)] += 1
    }

    freq1Arr.sort((a, b) => {return a - b})
    freq2Arr.sort((a, b) => {return a - b})
    console.log(freq1Arr)
    console.log(freq2Arr)

    for (let i = 0; i < char1Arr.length; i ++) {
        if (char1Arr[i] !== char2Arr[i] || freq1Arr[i] !== freq2Arr[i]) {
            return false
        }
    }

    return true
};