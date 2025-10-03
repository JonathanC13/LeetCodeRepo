// https://leetcode.com/problems/longest-substring-without-repeating-characters/
/**
1. Additional assumptions? None

2. Validate input.
    1. Length:
        Emtpy String: return 0
    2. Content:
        String constrained to English letters, digits, symbols and spaces:
            const regex = /^[\x20-\x7E]*$/
            if (regex.test(s) === false): return 0

            ^ and $ → anchors (match from start to end of string).
            [\x20-\x7E] → matches all printable ASCII characters:
            \x20 is space.
            \x7E is ~.
            This range includes letters, digits, punctuation, and symbols.
            * → allows zero or more of them (so even an empty string is valid).

3. Time constaints? Time: O(n)

4. Algorithm: sliding window on the input String since want the longest substring.

5. Data structure to use:
    1. Map where key = char, val = freq in window.

6. Edge cases: None.

7. Some test cases:
    1. A String with variety of characters and various occurances
    2. A String of length > 1 with the same character.

8. Complexity:
    Time: O(n)    // one pass
    Space: O(n)   // Map
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length === 0) {
        return 0
    }

    const regex = /^[\x20-\x7E]*$/
    if (regex.test(s) === false) {
        return 0
    } 

    let max = 0
    let counter = 0
    let l = 0
    const occur = new Map()

    for (let r = l; r < s.length; r ++) {
        // if first time char seen
        if (!occur.has(s[r])) {
            occur.set(s[r], 0)
        }
        // increment occurance in current window
        occur.set(s[r], occur.get(s[r]) + 1)
        if (occur.get(s[r]) > 1) {
            counter += 1
        }

        // while the current char at r is a repeated character, must reduce the window from the left until the first occurance of the character is removed from the window
        while (l <= r && counter > 0) {
            occur.set(s[l], occur.get(s[l]) - 1)
            l += 1
            if (occur.get(s[r]) <= 1) {
                counter -= 1
            }
        }

        // update the max substring length
        max = Math.max(max, r - l + 1)
    }

    return max
};