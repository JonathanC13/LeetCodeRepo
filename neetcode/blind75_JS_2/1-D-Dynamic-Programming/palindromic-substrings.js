// https://neetcode.io/problems/palindromic-substrings

/*
edge case 1: if s.length <= 1: return s.length

for each index, determine a palindrome if the center is one char and if the center is even index and index + 1 are the same char

- Time: O(n^2)
- Space: O(1)
*/

class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        if (s.length <= 1) {
            return s.length
        }

        const palins = []
        let count = [0]

        for (let i = 0; i < s.length; i ++) {
            this.checkPalin(s, i, palins, count)
        }
        console.log(palins)
        return count[0]
    }

    checkPalin(s, i, res, count) {
        // odd center
        let l = i
        let r = i
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            res.push(s.slice(l, r + 1))
            count[0] += 1
            l -= 1
            r += 1          
        }

        // even center
        l = i
        r = i + 1
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            res.push(s.slice(l, r + 1))
            count[0] += 1
            l -= 1
            r += 1          
        }
        
    }
}
