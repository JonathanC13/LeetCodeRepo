// https://neetcode.io/problems/string-encode-and-decode

class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let enc = ''
        for (let s of strs) {
            enc = enc + (s.length).toString() + '#' + s 
        }
        
        return enc
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = []
        let leng = ''
        let i = 0
        while(i < str.length) {
            if(str[i] !== '#') {
                leng = leng + str[i]
                i ++;
            } else {
                i = i + 1

                // got length of word, now slice
                // const end = i + Number(leng)
                res.push(str.slice(i, i + Number(leng)))
                i = i + Number(leng)
                leng = ''
            }
        }

        return res
    }
}
