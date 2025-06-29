// https://leetcode.com/problems/reverse-words-in-a-string/?envType=study-plan-v2&envId=top-interview-150

/*
iterate the String s and store all words into an Array

inplace reverse the elements in the Array

return Array.join(' ')

- Time: O(n)    // n = length of s
- Space: O(m)   // m = number of words
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const words = new Array()
    let l = 0
    let r = 0

    while (l < s.length) {
        let word = ''
        while (l < s.length && s[l] === ' ') {
            l += 1
        }
        r = l
        while (r < s.length && s[r] !== ' ') {
            word += s[r]
            r += 1
        }
        l = r
        if (word !== '') {
            words.push(word)
        }
    }

    console.log(words)
    l = 0
    r = words.length - 1
    while (l < r) {
        const tmp = words[l]
        words[l] = words[r]
        words[r] = tmp
        l += 1
        r -= 1
    }

    return words.join(' ')
};