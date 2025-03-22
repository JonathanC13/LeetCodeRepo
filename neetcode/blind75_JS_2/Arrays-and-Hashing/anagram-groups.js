// https://neetcode.io/problems/anagram-groups

/*
edge case 1: if strs.length === 0: return []
edge case 2: if strs.length === 1: return [[strs[0]]]

create a Map that will hold the k-v pairs
    key: 26 char long string that represents an Arr of counts for each lowercase letter.
    value: the Array for all the strings that are an anagram of each other

iterate the strs
    populate the charCountArr
    convert charCountArr to String
    if in Map, append
    else add new key-val pair

const res
iterate the key-val pairs
    push vals into res

return res

- Time: O(n * m). n = length of strs. m = longest String in strs
- Space: O(n)
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
            return [[strs[0]]]
        }

        const anagramMap = new Map()
        for (let i = 0; i < strs.length; i ++) {

            const charCountArr = new Array(26).fill(0)
            for (let j = 0; j < strs[i].length; j ++) {
                charCountArr[strs[i].charCodeAt(j) - 'a'.charCodeAt(0)] += 1
            }

            const charCountStr = charCountArr.join(',')
            if (anagramMap.get(charCountStr) === undefined) {
                anagramMap.set(charCountStr, [])
            }
            anagramMap.get(charCountStr).push(strs[i])
        }

        const res = []
        for (let [k, v] of anagramMap.entries()) {
            res.push(v)
        }

        return res
    }
}
