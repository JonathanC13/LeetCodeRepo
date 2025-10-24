// https://leetcode.com/problems/group-anagrams/

/**
1. Assumptions
    1. Specific range of characters?
        Lowercase English, therefore a bucket's key is the String representation of the counts of the 26 lowercase characters in the individual String
        If can be any character, 

2. Input validation
    - typing
        - strs instanceof Array === true
    - length
        - if strs.length === 0: reutnr []
    - content
        - each String in Array strs has only lowercase English characters. regex = /^[a-z]*$/

3. time/space constraints
    BTTC: O(n * m)  // n = strs.length, m = average length of a String in the Array
    Space: O(n * m) // The data structure to hold the buckets and the Strings that are anagrams of eachother

4. edge cases and some test cases
    edge cases
    1. if strs.length === 0: return []
    test cases
    1. single String
        input
            strs = ["apple"]

        output
            expected = [["apple"]]
    2. multiple Strings but none are anagrams of eachother
        input
            strs = ["apple", "sauce", "complete"]

        output
            expected = [["apple"], ["sauce"], ["complete"]]
    3. Some Strings are anagrams of eachother
        input
            strs = ["apple", "sauce", "bat", "tab"]

        output
            expected = [["apple"], ["sauce"], ["bat", "tab"]]

5. visualize by drawing and manually solve
6. break into subproblems
    To group the anagrams of the Strings together, must setup a common key/bucket that can be derived from each String to compare to.
    Since lowercase English characters, for each String create an freq Array of length 26 (26 lowercase chars) and increment the occurance of the character in the String.
    At the end convert the freq Array into a String so it can be used as the bucket's key in a Map. If does not exists in the Map, insert: key, new Array(). If exists, then add to the anagram Array that is the value accessed by the key.

7. algo
    - linear iteration
    - hashing the String into a key/bucket

8. data structure
    - Arrays
    - Strings
    - Map (Hash table)

9. Complexity
    Time: O(n * m)  // n = strs.length, m = average length of a String in the Array
    Space: O(n * m) // The data structure to hold the buckets and the Strings that are anagrams of eachother

 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    if (strs.length === 0) {
        return []
    }

    const n = strs.length
    const anagramMap = new Map()
    for (let i = 0; i < n; i ++) {
        const bucket = new Array(26).fill(0)
        const s = strs[i]
        for (let j = 0; j < s.length; j ++) {
            const ord = s.charCodeAt(j) - 'a'.charCodeAt(0)
            bucket[ord] += 1
        }
        const key = bucket.join(",")
        if (!anagramMap.has(key)) {
            anagramMap.set(key, new Array())
        }
        anagramMap.get(key).push(s)
    }

    const res = new Array()
    for (let [k, v] of anagramMap) {
        res.push(v)
    }

    return res
};