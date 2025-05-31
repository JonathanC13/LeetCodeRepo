// https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/description/?envType=study-plan-v2&envId=leetcode-75

/*
create Set with the vowels

create initial window, count the number of vowels in the k window

l = 0
for r = l + k to r < s.length
    if s[l] is a vowel, subtract
    if s[r] is a vowel, add
    record if number is new max

return maxVowels

- Time: O(n)
- Space: O(1)
*/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    if (s.length < k) {
        return 0
    }

    const vowels = new Set(['a', 'e', 'i', 'o', 'u'])

    let windowVowels = 0
    for (let i = 0; i < k; i ++) {
        if (vowels.has(s[i])) {
            windowVowels += 1
        }
    }
    let maxVowels = windowVowels

    let l = 0
    for (let r = l + k; r < s.length; r ++) {
        if (vowels.has(s[l])) {
            windowVowels -= 1
        }
        l += 1
        if (vowels.has(s[r])) {
            windowVowels += 1
        }

        maxVowels = Math.max(maxVowels, windowVowels)
    }

    return maxVowels

};