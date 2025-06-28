// https://leetcode.com/problems/length-of-last-word/description/?envType=study-plan-v2&envId=top-interview-150

/*
2 pointer

start at end
move right pointer backward until char is not ' '

l = r
move left pointer backward until char is ' '

return right - left

- Time: O(n)
- Space: O(1)
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let r = s.length - 1
    let l = r
    const arr = new Array()

    while (r >= 0 && s[r] === ' ') {
        r -= 1
    }

    l = r
    while (l >= 0 && s[l] !== ' ') {
        arr.push(s[l])
        l -= 1
    }
    // console.log(r - l)
    return r - l
};