// https://neetcode.io/problems/string-encode-and-decode?list=neetcode250

/**
 * Encode
 * encode the strings into the format of: NumberOfChars + '#' + string
 * This is so that in the final encoded String with all the Strings:
 *      the number is read until the '#' symbol since the length can be > 9 characters
 *      extract the string from '#' + 1 to '#' + length + 1, since slice end is exclusive
 *      repeat for next string.
 * 
 * - Time: O(n)
 * - Space: O(m)    // the encoded String
 * 
 * Decode
 * let i = 0
 * while i < encoded.length
 *      the number is read until the '#' symbol since the length can be > 9 characters
 *      extract the string from '#' + 1 to '#' + length + 1, since slice end is exclusive
 *      i = '#' + length
 * 
 * - Time: O(n)
 * - Space: O(n)    // res Array
 * 
 * 
 * 
 */

class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = ''
        for (let i = 0; i < strs.length; i ++) {
            encoded += strs[i].length + '#' + strs[i]
        }

        return encoded
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = new Array()
        let i = 0
        while (i < str.length) {
            let len = ''
            while (i < str.length && str[i] !== '#' && isNaN(str[i]) === false) {
                len += str[i]
                i += 1
            }
            len = Number(len)
            i += 1
            res.push(str.slice(i, i + len))
            i += len
        }

        return res
    }
}
