// https://leetcode.com/problems/group-anagrams/description/

/**
create a Map for the buckets for the String anagrams
    key: bucket where the key is String representation the char frequencies
    Value: Array of the anagrams

iterate i in the strs
    create new bucket of length 26, fill with 0

    iterate j in the chars in the strs[i]
        ord = strs[i].charCodeAt(j) - 'a'.charCodeAt(0)
        bucket[ord] += 1    // increment the frequency

    convert the bucket into a String representation where each value is seperated by ',' since a frequency can be > 9.
    This String representation is used for the key in the anagramMap

    if (!anagramMap.has(bucketStr)) {
        anagramMap.set(bucketStr, new Array())
    }
    anagramMap.get(bucketStr).push(strs[i])

extract the anagram Arrays from the anagram map
res = []
for (let [k, v] of anagramMap) {
    res.push(v)
}

return res

- Time: O(n * m)    // n = strs.length, m = avg str length
- Space: O(n)

 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const anagramMap = new Map()

    for (let i = 0; i < strs.length; i ++) {
        const bucket = new Array(26).fill(0)
        for (let j = 0; j < strs[i].length; j ++) {
            const ord = strs[i].charCodeAt(j) - 'a'.charCodeAt(0)
            bucket[ord] += 1
        }

        const bucketStr = bucket.join(',')
        if (!anagramMap.has(bucketStr)) {
            anagramMap.set(bucketStr, new Array())
        }
        anagramMap.get(bucketStr).push(strs[i])
    }

    const res = new Array()
    for (let [k, v] of anagramMap) {
        res.push(v)
    }

    return res
};