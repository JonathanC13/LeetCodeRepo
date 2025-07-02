// https://leetcode.com/problems/valid-anagram/?envType=study-plan-v2&envId=top-interview-150

/*
create and populate a Map for String s
    key: char
    val: freq of char

create and populate a Map for String t
    key: char
    val: freq of char

iterate sMap
    if freq of char in sMap !== freq of char in tMap
        return false

return true

- Time: O(n)
- Space: O(n)
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false
    }

    const sMap = new Map()
    const tMap = new Map()

    for (let i = 0; i < s.length; i ++) {
        if (!sMap.has(s[i])) {
            sMap.set(s[i], 0)
        }
        sMap.set(s[i], sMap.get(s[i]) + 1)
        
        if (!tMap.has(t[i])) {
            tMap.set(t[i], 0)
        }
        tMap.set(t[i], tMap.get(t[i]) + 1)
    }

    for (let [k, v] of sMap.entries()) {
        if (v !== tMap.get(k)) {
            return false
        }
    }

    return true
};