// https://leetcode.com/problems/word-pattern/?envType=study-plan-v2&envId=top-interview-150

/*
Poorly worded problem. Here is an attempt to explain it better.

Given a pattern and a string s, find if s follows the same pattern. pattern and s are same if:

each character in pattern represents a word in s
No two distinct characters in pattern can represent the same word in s
No single character in pattern can represent two distinct words in s.
e.g.:

pattern = 'abab'; s = 'dog cat dog cat'; return True
'a' represents 'dog' and 'b' represents cat

pattern = 'abcb'; s = 'dog cat dog cat'; return False
'a' represents 'dog', 'b' represents 'cat'. Then 'c' cannot represent 'dog' again as 'a' already represents 'dog' (#2 condition is: No two distinct characters in pattern i.e. 'a' and 'c' can represent same word i.e 'dog'.)

pattern = 'abcb'; s = 'dog cat hat cat'; return True
'a' represents 'dog'; 'b' represents 'cat'; 'c' represents 'hat'; and last 'cat' is already represented by 'b' and last character in pattern is also 'b'.

convert String s into an Array of words. Easy since seperated with single space

create a Map for pattern chars:
    key: char in pattern
    val: word it maps to

create a Map for s words:
    key: word in s
    val: pattern char it maps to

iterate pattern
    if (pMap not has p[i] && wMap not has words[i])
        add p[i] to pMap
        add words[i] to wMap
    else if (pMap has p[i] && wMap has words[i] && pMap.get([i]) !== wMap.get(words[i]))    // exists in both but not map to eachother, meaning non unique mapping
        return false

return true

- Time: O(n)
- Space: O(n)

*/

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const words = s.split(' ')
    if (pattern.length !== words.length) {
        return false
    }

    const pMap = new Map()
    const wMap = new Map()

    for (let i = 0; i < pattern.length; i ++) {
        if (!pMap.has(pattern[i]) && !wMap.has(words[i])) {
            pMap.set(pattern[i], words[i])
            wMap.set(words[i], pattern[i])
        } else if ((pMap.has(pattern[i]) && pMap.get(pattern[i]) !== words[i]) || (wMap.has(words[i]) && wMap.get(words[i]) !== pattern[i])) {
            return false
        }
    }

    return true
};