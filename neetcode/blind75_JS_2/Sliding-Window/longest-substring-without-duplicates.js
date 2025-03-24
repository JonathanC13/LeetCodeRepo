// https://neetcode.io/problems/longest-substring-without-duplicates

/*
edge case 1: if s.length < 2: return s.length

create left pointer = 0 to mark the start of the substring
create right pointer = 0 to mark the end of the substring
create a Set to hold the current characters in the current substring defined by left and right
max = 0

while (right < s.length) {
    const currChar = s[right]
    while left < right && currChar exists in Set
        // need to keep removing chars at left until the currChar doesn't exist in Set so that the substring can continue with unique characters
        remove the char that exists at left from the Set
        move the left pointer forward for the next char

    add the currChar to the Set
    max = Math.max(max, right - left + 1)
    right += 1
}

- Time: O(n)
- Space: O(n).  the entire String s could have no duplicates.
*/

class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (s.length < 2) {
            return s.length
        }

        let left = 0
        let right = 0
        let max = 0
        const charSet = new Set()

        while (right < s.length) {
            const currChar = s[right]
            while (left < right && charSet.has(s[right])) {
                charSet.delete(s[left])
                left += 1
            }

            charSet.add(currChar)
            max = Math.max(max, right - left + 1)
            right += 1
        }
        return max
    }
}
