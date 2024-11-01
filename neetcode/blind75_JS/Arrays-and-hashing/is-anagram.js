// https://neetcode.io/problems/is-anagram

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false
        }

        // Two obj hash table. More space, but less iterations when comparing obj keys to eachother rather than iterating string t fully.
        const objCountS = new Object();
        const objCountT = new Object();

        for (let i = 0; i < s.length; i ++) {
            objCountS[s[i]] = (objCountS[s[i]] || 0) + 1; // if does not exist, initial value is 0
            objCountT[t[i]] = (objCountT[t[i]] || 0) + 1;
        }

        for (const key in objCountS) {
            if (objCountS[key] !== objCountT[key]) {
                return false
            }
        }

        return true;

        // One obj Hash
        // const countS = new Object();

        // for (let i = 0; i < s.length; i ++) {
        //     if (Object.hasOwn(counts, s[i])) {
        //         counts[s[i]] = counts[s[i]] + 1
        //     } else {
        //         counts[s[i]] = 1
        //     }
        // }

        // for (let i = 0; i < t.length; i ++) {
        //     if (Object.hasOwn(counts, t[i])) {
        //         counts[t[i]] = counts[t[i]] - 1
        //         if (counts[t[i]] === 0) {
        //             delete counts[t[i]]
        //         }
        //     } else {
        //         return false
        //     }
        // }

        // if (Object.keys(counts).length === 0) {
        //     return true;
        // } else {
        //     return false;
        // }

    }
}
