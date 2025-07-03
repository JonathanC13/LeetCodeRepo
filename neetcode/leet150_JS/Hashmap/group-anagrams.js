// https://leetcode.com/problems/group-anagrams/?envType=study-plan-v2&envId=top-interview-150

/*
since restricted to lowercase English letters.
Arr of 26 will hold all, just offset the ascii value c.charCodeAt(0) - 'a'.charCodeAt(0)

create Map to hold the commonality and Array of strs that are anagrams of eachother
    key: commonality
    value: Array of anagrams of eachother

iterate strs
    create Arr of length 26 fill 0 where: index represents the char ascii - 'a' and the value is the frequency

    iterate the str at strs[i]
        Arr[j] += 1

    convert Arr to String to obtain a key, remember to keep seperator since freq can > 9

    if (not Map.has(key))
        Map.set(key, [])

    Map.get(key).push(strs[i])

iterate Map and put the values into a result Array

- Time: O(n * m)    // n = strs.length, m = longest strs[i]
- Space: O(n)
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    if (strs.length === 0) {
        return []
    }  

    const aMap = new Map()

    for (let i = 0; i < strs.length; i ++) {
        const arr = new Array(26).fill(0)
        const s = strs[i]
        for (let j = 0; j < s.length; j ++) {
            arr[s.charCodeAt(j) - 'a'.charCodeAt(0)] += 1
        }

        const key = arr.join(',')
        if (!aMap.has(key)) {
            aMap.set(key, new Array())
        }

        aMap.get(key).push(s)
    }

    const res = new Array()
    for (let [k, v] of aMap.entries()) {
        res.push(v)
    }

    return res
};