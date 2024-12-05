// https://neetcode.io/problems/minimum-window-with-characters

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t.length > s.length) {
            return ""
        }

        const needT = new Map()
        const haveT = new Map()

        for (let c of t) {
            needT.set(c, (needT.get(c) || 0) + 1)
        }
        
        let need = needT.size
        let have = 0

        let resLen = Number.POSITIVE_INFINITY
        const res = [-1, -1]

        let l = 0

        for (let r = l; r < s.length; r ++) {
            haveT.set(s[r], (haveT.get(s[r]) || 0) + 1)

            if (haveT.get(s[r]) === needT.get(s[r])) {
                have += 1
            }

            while (need === have) {
                
                if (r - l + 1 < resLen) {
                    resLen = r - l + 1
                    res[0] = l
                    res[1] = r
                }

                haveT.set(s[l], haveT.get(s[l]) - 1)
                if (needT.has(s[l]) && needT.get(s[l]) > haveT.get(s[l])) {
                    have -= 1
                }
                l += 1
            }
        }

        return (resLen > 0 ? s.slice(res[0], res[1] + 1) : "")
    }
}
