// https://leetcode.com/problems/reverse-vowels-of-a-string/description/?envType=study-plan-v2&envId=leetcode-75

/*
create Set for vowels, upper and lowercase

create an Array to hold the [vowel, index]
iterate String s forward    time: O(n)
    save the vowel and index into Array

iterate Array and swap to reverse

- Time: O(n)
- Space: O(m)   // m = # of vowels
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const set = new Set([
        'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U',
    ])
    const arrS = s.split('')
    const v = new Array()
    for (let i = 0; i < s.length; i ++) {
        if (set.has(s[i])) {
            v.push([s[i], i])
        }
    }

    let l = 0
    let r = v.length - 1
    while (l < r) {
        arrS[v[l][1]] = v[r][0]
        arrS[v[r][1]] = v[l][0]
        l += 1
        r -= 1
    }

    return arrS.join('')
};