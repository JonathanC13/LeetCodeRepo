// https://neetcode.io/problems/string-encode-and-decode

/*
encode
    edge case 1: if strs.length === 0: return ''

    let resStr = ''
    iterate the strs
        encoded will have 3 components; 1. the length of the str, 2. a special char to indicate length is complete, and 3. the str
        e.x. neet = 4&neet, so that when decoding get the length value until '&' then get the chars from '&' +1 to < '&' + length

    return resStr

    - Time: O(n)
    - Space: O(m). // length of all the strs

decode
    edge case 1: if str.length === 0: return []

    // encoded will come in this format:
    // neet = 4&neet, so that when decoding get the length value until '&' then get the chars from '&' +1 to < '&' + length

    const res = []
    let i = 0   // need pointer to jump forward
    while (i < str.length) {
        // get length
        let len = ''
        while (i < str.length && str[i] !== '&') {
            len += str[i]
            i += 1
        }
        i += 1  // pass over the '&'
        // slice out the chars
        res.push(str.slice(i, i + Number(len)))
        i += Number(len)
    }

    return res

    - Time: O(m). total length of the str
    - Space: O(n). the number of encoded Strings

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

        let res = ''
        for (let i = 0; i < strs.length; i ++) {
            res += String(strs[i].length) + '&' + strs[i]
        }

        return res
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str === '') {
            return []
        }

        const res = []
        let i = 0
        while (i < str.length) {
            let len = ''
            while (i < str.length && str[i] !== '&') {
                len += str[i]
                i += 1
            }
            i += 1

            res.push(str.slice(i, i + Number(len)))
            i += Number(len)
        }

        return res
    }
}
