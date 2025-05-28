// https://leetcode.com/problems/reverse-words-in-a-string/description/?envType=study-plan-v2&envId=leetcode-75

/*
create an Array to hold the individual words
itearate the String from the end
    save each complete word

return words.join(' ')

- Time: O(n)
- Space: O(m)
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const words = new Array()
    let word = ''
    for (let r = s.length - 1; r >= 0; r --) {
        if (s[r] === ' ') {
            if (word !== '') {
                words.push(word)
                word = ''
            }
        } else {
            word = s[r] + word
        }
    }
    if (word !== '') {
        words.push(word)
    }
    
    return words.join(' ')
};