// https://neetcode.io/problems/string-encode-and-decode

class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (strs.length === 0) {
            return ''
        }

        let enc = ''

        for (let s of strs) {
            let len = s.length
            enc += len.toString() + '#' + s
        }
        // console.log(enc)
        return enc
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str.length === 0) {
            return []
        }

        const dec = []
        let i = 0
        while (i < str.length) {
            let subLen = ''
            while (i < str.length && str[i] !== '#') {
                subLen += str[i]
                i += 1
            }

            i += 1
            let len = Number(subLen)
            console.log(i)
            dec.push(str.slice(i, i + len))
            i += len
        }

        return dec
    }
}
