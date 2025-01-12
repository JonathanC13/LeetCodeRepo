// https://neetcode.io/problems/anagram-groups

/*
- edge case 1: if strs.length === 0: return [[]]
- edge case 2: if strs.length === 1: return [strs]

Anagrams will have the same chars and same freqencies

Maintain a Map where the key is the Hash Map stringified and the value is an array of the Strings that are anagrams of eachother

iterate each strs
    let hash = Array(26).fill(0)
    for each char in str[i]
        charOrd = char.charCodeAt(0) - 'a'.charCodeAt(0)
        hash[charOrd] += 1

    hashKey = hash.join(',')    // make sure to delimit!
    if (!Map has hashKey) {
        Map.set(hashKey, [])
    }
    Map.get(hashKey).push(str)

res = []
iterate the Map
    res.push(mapVal)

return res

Time: O(n * m). (strs.length * max word length) + map length
Space: O(n). 26 + n for map
*/

class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if (strs.length === 0) {
            return []
        }
        if (strs.length === 1) {
            return [strs]
        }

        const anaMap = new Map()
        
        for (let i = 0; i < strs.length; i ++) {
            const hash = Array(26).fill(0)
            for (let j = 0; j < strs[i].length; j ++) {
                hash[strs[i][j].charCodeAt(0) - 'a'.charCodeAt(0)] += 1
            }
            
            const hashKey = hash.join(',')
            if (!anaMap.has(hashKey)) {
                anaMap.set(hashKey, [])
            }
            anaMap.get(hashKey).push(strs[i])
        }

        const res = []
        for (let [key, val] of anaMap.entries()) {
            res.push(val)
        }

        return res
    }
}
