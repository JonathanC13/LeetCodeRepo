// https://neetcode.io/problems/anagram-groups

class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if (strs.length === 0) {
            return []
        }

        const anagramGroups = new Object();

        for (const s of strs) {
            const count = Array(26).fill(0)
            for (const c of s) {
                const idx = c.charCodeAt(0) - 'a'.charCodeAt(0)
                count[idx] = count[idx] + 1
            }
            const key = count.join()
            if (Object.hasOwn(anagramGroups, key)) {
                anagramGroups[key].push(s)
            } else {
                anagramGroups[count.join()] = [s]
            }
        }
        const res = []
        for (const key in anagramGroups) {
            res.push(anagramGroups[key])
        }
        return res
    }
}
