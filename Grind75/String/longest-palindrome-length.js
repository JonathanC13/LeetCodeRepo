// https://leetcode.com/problems/longest-palindrome/description/

/**
the center of a palindrome can be even or odd number of chars
the rest have to be even

create a Map for the character's frequencies
    key: char
    value: freq


iterate s
    increment the current character's frequency

longest = 0
oddExists = false

// get the remaining parts of the palindrome, which are all even occurences. if even mid it will also be accounted for
iterate the freq map
    if the char freq even
        longest += char freq

    if (the char's freq is odd) {
        // can use all chars except +1 that makes it odd
        longest += char freq - 1
    }

// if odd mid exists
if (oddExists === true) {
    longest += 1    // odd mid means can add one extra char in the middle
}

return longest

- Time: O(n)    // n + n
- Space: O(n)
 */

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    console.log(s.length)
    const charFreq = new Map()

    for (let i = 0; i < s.length; i ++) {
        if (!charFreq.has(s[i])) {
            charFreq.set(s[i], 0)
        }

        charFreq.set(s[i], charFreq.get(s[i]) + 1)
    }

    let longest = 0
    let oddExists = false

    for (let [k, v] of charFreq.entries()) {
        if (v % 2 === 0) {
            longest += v
        } else if (v % 2 === 1) {
            oddExists = true
            longest += v - 1
        }
    }

    if (oddExists === true) {
        longest += 1
    }

    return longest
};