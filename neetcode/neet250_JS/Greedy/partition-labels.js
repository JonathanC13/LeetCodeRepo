// https://neetcode.io/problems/partition-labels

/*
create a Map for the final index that each character occurs.
iterate the string left to right and add/update the index in the Map

res = []

i = 0
while (i < S.length) {
    charLastIdx = Map.get(i)
    if the char at i === charLastIdx {
        // this char will not appear in another substring
        res.push(1)
        i += 1
        continue
    }

    x = i + 1
    while (x < charLastIdx) {
        // iterate the window from x to charLastIdx and update charLastIdx if there are chars within that appear even later than the previous charLastIdx
        charLastIdx = Math.max(charLastIdx, Map.get(x))
        x += 1
    }
    res.push(charLastIdx - i + 1)
    i = charLastIdx + 1
}

return res

Time: O(n). n + n = O(n)
Space: O(n)
*/

class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(S) {
        if (S.length === 0) {
            return []
        }

        const lastMap = new Map()
        for (let i = 0; i < S.length; i ++) {
            lastMap.set(S[i], i)
        }
        console.log(lastMap)
        const res = []
        let i = 0
        while (i < S.length) {
            let charLastIdx = lastMap.get(S[i])

            if (i === charLastIdx) {
                res.push(1)
                i += 1
                continue
            }

            let x = i + 1
            while (x < S.length && x < charLastIdx) {
                charLastIdx = Math.max(charLastIdx, lastMap.get(S[x]))
                x += 1
            }
            res.push(charLastIdx - i + 1)
            i = charLastIdx + 1
        }

        return res
    }
}
