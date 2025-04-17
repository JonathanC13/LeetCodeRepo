// https://neetcode.io/problems/longest-substring-without-duplicates

/*
use 2 pointers to define the substring that has no repeating characters

for the current substring defined, store the characters into a Set

when a duplicate character is seen, move the left pointer forward until the current is no longer a duplicate.

- Time: O(n)
- Space: O(n)
*/

class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let longest = 0
        const chars = new Set()

        let left = 0
        for (let right = left; right < s.length; right ++) {
            while (left < right && chars.has(s[right])) {
                chars.delete(s[left])
                left += 1
            }
            
            chars.add(s[right])

            longest = Math.max(longest, right - left + 1)

        }

        return longest
    }
}
