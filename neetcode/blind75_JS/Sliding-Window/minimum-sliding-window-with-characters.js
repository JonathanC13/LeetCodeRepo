// https://neetcode.io/problems/minimum-window-with-characters

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (s.length === 0) {
            return ""
        }

        const window = new Map()
        const countT = new Map()
        for (let i = 0; i < t.length; i++) {
            countT.set(t[i], (countT.get(t[i]) || 0) + 1)
        }

        let have = 0
        let need = countT.size
        let resIdx = [-1, -1]
        let resLen = Number.POSITIVE_INFINITY
        let left = 0

        for (let i = 0; i < s.length; i ++) {
            window.set(s[i], (window.get(s[i]) || 0) + 1)
            
            if (countT.has(s[i]) && window.get(s[i]) === countT.get(s[i])) {
                have += 1
            }
            
            while (have === need) {
                if (i - left + 1 < resLen) {
                    resIdx = [left, i]
                    resLen = (i - left + 1)
                }

                window.set(s[left], window.get(s[left]) - 1)
                if (countT.has(s[left]) && window.get(s[left]) < countT.get(s[left])) {
                    have -= 1
                }

                left += 1
            }
        }

        return (resLen === Number.POSITIVE_INFINITY) ? ("") : (s.slice(resIdx[0], resIdx[1] + 1))
    }
}
