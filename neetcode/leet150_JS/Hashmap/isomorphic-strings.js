// https://leetcode.com/problems/isomorphic-strings/description/?envType=study-plan-v2&envId=top-interview-150

/*
1. if s.length !== t.length: return false

create an emtpy Map for characters in String s
    key: char
    val: map to in String t

since char in s cannot map to the same char, also create a Map for the destination char
    key: char that was mapped to
    val: char map to this one

iterate String s
    if sMap not has s[i] and tMap not has t[i]
        map set s[i]: t[i]
        map set t[i]: s[i]

    else if (sMap has s[i] && sMap get s[i] !== t[i]) || (tMap has t[i] && tMap get t[i] !== s[i])    // prev map and curr map into t at i is a different character
        return false
        
return true

- Time: O(n)    // n = length String s
- Space: O(n)
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) {
        return false
    }

    const sMap = new Map()
    const tMap = new Map()

    for (let i = 0; i < s.length; i ++) {
        if (!sMap.has(s[i]) && !tMap.has(t[i])) {
            sMap.set(s[i], t[i])
            tMap.set(t[i], s[i])
        } else if ((sMap.has(s[i]) && sMap.get(s[i]) !== t[i]) || (tMap.has(t[i]) && tMap.get(t[i]) !== s[i])) {
            return false
        }
    }

    return true
};