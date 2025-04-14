// https://neetcode.io/problems/anagram-groups

/*
create a Map for:
    key: String that represents the frequency of each char
    val: Array of Strings that are anagram of eachother

for each str in strs
    since only lowercase english chars, simply create an Array of length 26 fill with 0

    for each char in str
        get the decimal value of the character so to increment that index in the Array

    join the Array into a String

    set into Map

for each key, val
    populate res

return res

- Time: O(n * t)    // n = length of strs, t = longest string
- Space: O(n * t)
*/

class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map()

        for (let i = 0; i < strs.length; i ++) {
            const arr = new Array(26).fill(0)

            for (let c = 0; c < strs[i].length; c ++) {
                const dec = strs[i].charCodeAt(c) - 'a'.charCodeAt(0)
                arr[dec] += 1
            }

            const str = arr.join(',')
            if (map.get(str) === undefined) {
                map.set(str, new Array())
            }
            map.get(str).push(strs[i])
        }

        const res = []
        for (let [k, v] of map.entries()) {
            res.push(v)
        }

        return res
    }
}
