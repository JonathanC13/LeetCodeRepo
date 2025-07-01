// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/?envType=study-plan-v2&envId=top-interview-150

/*
1. if s.length === 0: return 0

longest = 0
create a Set to store the current characters in the window
l = 0
iterate r over s
    while (l < r && set.has(s[r])) {
        set.delete(s[l])
        l += 1
    }

    set.add(s[r])
    longest = max(longest, r - l + 1)

return longest

- Time: O(n)
- Space: O(n)
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length === 0) {
        return 0
    }

    let l = 0
    let longest = 0
    const st = new Set()

    for (let r = 0; r < s.length; r ++) {
        while (l < r && st.has(s[r])) {
            st.delete(s[l])
            l += 1
        }

        st.add(s[r])
        longest = Math.max(longest, r - l + 1)
    }

    return longest
};