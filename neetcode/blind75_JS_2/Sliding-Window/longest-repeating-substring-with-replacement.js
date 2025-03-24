// https://neetcode.io/problems/longest-repeating-substring-with-replacement

/*
edge case 1: s.length < k: return s.length

create a Set for the unique chars in String s
iterate s
    add to Set

max = 0

iterate the Set
    const currChar = current Set value
    let rep = 0 to count the number of replacements currenlt used in the substring
    let l = 0, always start at 0

    for (let r = 0; r < s.length; r ++) {
        if the char at s[r] !== currChar
            rep += 1

        while (l < r && rep > k) {
            // need to remove the chars that require replacement. Move left pointer forward until within acceptable replacement
            if (s[l] !== currChar) {
                rep -= 1
            }
            l += 1
        }

        max = Math.max(max, r - l + 1)
    }

return max

- Time: O(m * n)    // m is the unique chars in String s, n is the length of String s
- Space: O(m)


*/

class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        if (s.length < k) {
            return s.length
        }

        let max = 0
        const charSet = new Set()
        for (let i = 0; i < s.length; i ++) {
            charSet.add(s[i])
        }

        for (let currChar of charSet) {
            let l = 0
            let rep = 0

            for (let r = 0; r < s.length; r ++) {
                if (s[r] !== currChar) {
                    rep += 1
                }

                while (l < r && rep > k) {
                    if (s[l] !== currChar) {
                        rep -= 1
                    }
                    l += 1
                }

                max = Math.max(max, r - l + 1)
            }
        }

        return max
    }
}
