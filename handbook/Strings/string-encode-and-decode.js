// https://neetcode.io/problems/string-encode-and-decode?list=neetcode250

/**
 * 1. Assumptions
 *  1. What are the valid characters in the Strings? All UTF-8 characters
 * 
 * 2. input validation
 *  - str instanceof Array
 *  - length:
 *      if str.length === 0: return ''
 *  - content, each String only has UTF-8 characters
 *      const regex = /^[\s\S]*$/u;
 *          - [\s\S] matches any character, including newlines.
 *          - The u flag makes the regex Unicode-aware, so it properly handles characters outside the BMP (like emojis, CJK, etc.).
 *          - Anchors ^ and $ ensure it matches the whole string.
 * 
 * 3. time/space constraints
 *  - Encode:
 *      BTTC: O(n)  // n = strs.length
 *      Space: O(m) // m = encoded String length
 * 
 *  - Decode:
 *      BTTC: O(n)
 *      Space: O(n) // decoded into Array
 * 
 * 4. Edge cases and some test cases
 *  edge cases
 *  1. Encode: if (strs.length === 0) {return ""}
 *  2. Decode: if (str.length === 0) {return []}
 *  test cases
 *  1. strs = ["abc", "def"]
 *  2. strs = ["abc", "abc"]
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  Encode
 *      For each String in strs, append to the encoded String in the format of: str.length + '$' + str. 
 *      This is so that when decoded it has a standard format. The '$' is the stopper for the length since digits can be > 1. Any valid UTF-8 character can be used as the 'stopper' since it will be the first specific character expected after the length.
 *  Decode
 *      While encoded still has chars
 *          Get the length of the encoded String by moving the index forward until the special stopper.
 *          Move past the stopper and then slice out the String
 * 
 * 7. Algo
 *  Encode
 *      Formatting
 *  Decode
 *      Slicing
 * 
 * 8. Data structures
 *  - Strings
 * 
 * 9. Complexity
 *  Encode
 *      Time: O(n)
 *      Space: O(m)
 * 
 *  Decode
 *      Time: O(n)
 *      Space: O(n)
 * 
 * 
 */

class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (strs.length === 0) {
            return ''
        }

        let encoded = ''
        for (let i = 0; i < strs.length; i ++) {
            encoded += strs[i].length.toString() + "$" + strs[i]    // if '$' causes invalid token error, it is the compiler. The code is correct, just change to "$"
        }
        return encoded
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str.length === 0) {
            return []
        }
        const res = new Array()
        let i = 0
        while (i < str.length) {
            let len = ''
            while (i < str.length && str[i] !== "$") {
                len += str[i]
                i += 1
            }
            i += 1
            res.push(str.slice(i, i + Number(len)))
            i = i + Number(len)
        }
        return res
    }
}
