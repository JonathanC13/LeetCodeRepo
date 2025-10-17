// https://leetcode.com/problems/group-anagrams/description/

/**
1. Assumptions
    - Specific characters? Only English lowercase, therefore can use Array(26). Else if also Uppercase English, put Uppercase first then lower. For lower strs.charCodeAt(i) - 'a'.charCodeAt(0) + 26 // 26 for the uppers

2. Input validation
    strs instanceof Array === true

3. Time/space constraints
    BTTC: O(n*m)    // n = strs.length, m = average String length
    Space: O(n*m)

4. some test cases and edge cases
    edge cases
    1. if strs.length === 0: return []
    test cases
    1. strs = [""]  // expected = [[""]]
    2. strs = ["car", "bat", "rat", "acr", "tab"]   // expected = [[car, acr], [bat, tab], [rat]]

5. visualize by drawing and manually solve
6. break into subproblems
    Since need to group the anagram Strings together, create buckets in a Map where the key is:
        each String fill the char freq in an Array(26) and then convert the Array into a String seperated by ','
        if the Map has the key push into the existing value which is an Array of anagrams, else create new key

7. algo
    - counting freq
    - buckets

8. data structures
    - Strings
    - Map

9. Complexity
    Time: O(n * m)
    Space: O(n * m)

 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    if (strs.length === 0) {
        return []
    }

    const group = new Map()
    for (let i = 0; i < strs.length; i ++) {
        const bucket = new Array(26).fill(0)
        const str = strs[i]
        for (let j = 0; j < str.length; j ++) {
            const ord = str.charCodeAt(j) - 'a'.charCodeAt(0)
            bucket[ord] += 1
        }

        const key = bucket.join(',')
        if (!group.has(key)) {
            group.set(key, new Array())
        }
        group.get(key).push(str)
    }

    const res = new Array()
    for (let [k, v] of group) {
        res.push(v)
    }

    return res
};