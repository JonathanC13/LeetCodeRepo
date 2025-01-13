// https://neetcode.io/problems/string-encode-and-decode


/*
Encode
get the length of a string and then add to the encoded string with the format [length]#[String]
Time: O(n)
Space: O(1)

Decode:
const res = []
while i < str.length
    get the length
    let len = ""
    while (str[i] !== '#' && Number(str[i]) !== undefined) {
        len += str[i]
        i += 1
    }

    if (str[i] !== '#' || Number(len) === undefined) {
        // something has gone wrong
        return ''
    }

    i += 1
    res.push(str.slice(i, i + Number(len)))
    i = i + Number(len)

return res

*/

class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = ''

        for (let i = 0; i < strs.length; i ++) {
            encoded += `${strs[i].length}#${strs[i]}`
        }
        
        return encoded
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = []
        let i = 0
        while (i < str.length) {
            let len = ''
            while (str[i] !== '#' && Number(str[i]) !== undefined) {
                len += str[i]
                i += 1
            }
            
            if (str[i] !== '#' || Number(len) === undefined) {
                // wrong encoded
                return ''
            }

            i += 1
            res.push(str.substring(i, i + Number(len)))
            i = i + Number(len)
        }

        return res
    }
}
