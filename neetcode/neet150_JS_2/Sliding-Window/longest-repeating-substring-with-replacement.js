// https://neetcode.io/problems/longest-repeating-substring-with-replacement

/*
Must traverse the String s with each unique character as the main and then any other char is for replacement.
    iterate String s and add each to a Set

create 2 pointers to define the substring that is the longest with replacement

for each unique char
    let left = 0
    move right forward
        if not the char
            replacements += 1

        while (left < right AND replacements > k) {
            // too many, need to reduce
            if (s[left] !== char) {
                replacements -= 1
            }
            left += 1
        }

        longest = max(longest, right - left + 1)

return longest

- Time: O(n * m)    // n = s.length, m = # of unqiue chars
- Space: O(m)
*/

class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const unique = new Set()
        for (let i = 0; i < s.length; i ++) {
            unique.add(s[i])
        }

        let longest = 0
        for (const [char, _] of unique.entries()) {
            // console.log(char)
            let left = 0
            let replaced = 0
            for (let right = left; right < s.length; right ++) {
                if (s[right] !== char) {
                    replaced += 1 
                }

                while (left < right && replaced > k) {
                    if (s[left] !== char) {
                        replaced -= 1
                    }
                    left += 1
                }

                longest = Math.max(longest, right - left + 1)
            }
        }

        return longest
    }
}
