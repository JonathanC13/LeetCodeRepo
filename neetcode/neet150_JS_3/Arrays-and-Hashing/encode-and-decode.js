// https://neetcode.io/problems/string-encode-and-decode/question

/**
 * 1. Assumptions
 *  1. Any characters
 * 
 * 2. input validation
 *  - encode
 *      1. strs
 *          - strs instanceof Array
 *          - strs.length >= 0
 *          - strs elements are Strings
 *  - decode
 *      1. str
 *          - typeof str === 'string'
 *          
 * 3. time and space constraints
 *  - encode
 *      BTTC: O(n)  // n = strs.length
 *      Space: O(m) // m = encoded String
 * 
 *  - decode
 *      BTTC: O(n)
 *      Space: O(n)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. 
 *      - encode:
 *          if strs.length === 0: return ''
 *      - decode
 *          if (str.length === 0): return []
 * 
 * 
 *  test cases
 *  1. 1 String
 *      - encode
 *          inputs
 *              strs = ['happy']
 *          expected output
 *              encoded String
 * 
 *      - decode
 *          inputs
 *              str = encoded String
 *          expected output
 *              ['happy']
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  - encode
 *      Create the encoded String in format of:
 *          str length + '$' + str
 * 
 *  - decode
 *      With the chosen format, the decode will read the String length from i until char is '$' then slice out the String
 * 
 * 7. algos
 *  - encoding into a singular String for transfer since can only Strings are simpliest.
 * 
 * 8. data structures
 *  - Arrays
 * 
 * 9. complexity
 *  - encode
 *      BTTC: O(n)  // n = strs.length
 *      Space: O(m) // m = encoded String
 * 
 *  - decode
 *      BTTC: O(n)
 *      Space: O(n)        
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
            encoded += strs[i].length.toString() + "$" + strs[i]
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

            // get length
            while (str[i] !== "$") {
                len += str[i]
                i += 1
            }
            i += 1  // to pass '$'

            if (isNaN(len)) {
                break
            }
            len = Number(len)
            res.push(str.slice(i, i + len))
            i += len
        }

        return res
    }
}
