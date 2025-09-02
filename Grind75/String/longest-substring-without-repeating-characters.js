// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

/**
create a Set to maintain the current characters in the substring; currSet
sliding window
l = 0

maxLen = 0
substr = ''

for (let r = 0; r < s.length; r ++) {
    // if the current char at r exists within currSet, must move l forward until it is removed
    while (l < r && currSet.has(s[r])) {
        currSet.delete(s[l])
        l += 1
    }
    currSet.add(s[r])

    // record if longer substring
    if (r - l + 1 > maxLen) {
        maxLen = r - l + 1
        substr = s.slice(l, r + 1)
    }
}

return maxLen

- Time: O(n)
- Space: O(n)
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const currSet = new Set()
    let l = 0

    let maxLen = 0
    let substr = ''

    for (let r = 0; r < s.length; r ++) {
        while (l < r && currSet.has(s[r])) {
            currSet.delete(s[l])
            l += 1
        }

        currSet.add(s[r])

        if (r - l + 1 > maxLen) {
            maxLen = r - l + 1
            substr = s.slice(l, r + 1)
        }
    }

    console.log(substr)
    return maxLen
};