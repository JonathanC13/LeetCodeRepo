// https://neetcode.io/problems/permutation-string

/*
- edge case 1: if s1.length > s2.length: return false

create a Map for String s1's characters and frequencies
create a need var = Object.keys(Map).length

iterate s2, i, for each start position of the substring
    s2Map = new Map()
    let have = 0

    iterate s2, r, from the start position to < i + s.length
        let char = s2[r]

        s2Map.set(char, (s2Map.get(char) || 0) + 1)

        if ((s1Map.get(char) || 0) < s2Map.get(char)) {
            break
        }

        if ((s1Map.get(char) || 0) === s2Map.get(char)) {
            have += 1
        }

        if (have === need) {
            return true
        }

return false

- Time: O(n * m). s1 length * s2 length
- Space: O(1). s1 length
*/

class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) {
            return false
        }

        const s1Map = new Map()
        for (let i = 0; i < s1.length; i ++) {
            s1Map.set(s1[i], (s1Map.get(s1[i]) || 0) + 1)
        }

        const need = Array.from(s1Map).length
        for (let l = 0; l < s2.length - s1.length + 1; l ++) {
            const s2Map = new Map()
            let have = 0

            for (let r = l; r < l + s1.length; r ++) {
                const char = s2[r]
                s2Map.set(char, (s2Map.get(char) || 0) + 1)

                if ((s1Map.get(char) || 0) < s2Map.get(char)) {
                    break
                }

                if ((s1Map.get(char) || 0) === s2Map.get(char)) {
                    have += 1
                }

                if (have === need) {
                    return true
                }
            }
        }

        return false
    }
}
