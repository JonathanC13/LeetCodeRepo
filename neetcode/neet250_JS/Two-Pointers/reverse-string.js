// https://leetcode.com/problems/reverse-string/description/

/*
- edge case 1: if (s.length < 2) return

initialize a left pointer at 0
initialize a right pointer at the end

while left < right,
    swap the content at the left and right pointer
    move left + 1
    move right - 1

- Time: O(n) ... n/2
- Space: O(1)
*/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    if (s.length < 2) {
        return
    }

    let left = 0
    let right = s.length - 1

    while (left < right) {
        let tmp = s[left]
        s[left] = s[right]
        s[right] = tmp

        left += 1
        right -= 1
    }
};