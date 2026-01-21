// https://neetcode.io/problems/anagram-groups/question

/**
 * 1. Assumptions
 *  1. Characters are lowercase English characters. Important since can create a static Array of 26 for the hashing.
 *      If include uppercase, can create Array of 52 and offset 'A' to start at index 51.
 *      If can include all characters, use a Map, convert to 2D Array of [char, freq], then sort by char ascending, convert to String representation, and finally compare to other hashes.
 * 
 * 2. input validation
 *  1. strs
 *      1. strs instanceof Array
 *      2. strs.length >= 0
 *      3. each str only contains lowercase English characters
 *          regex = '/^[a-z]*$/'
 *          regex.test(str)
 * 
 * 3. time and space constraint
 *  BTTC: O(n * m)  // n = strs.length, m = longest string length
 *  Space: O(n) // use n extra space so that each string does not need to compare to every other. Time O(n^2)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if strs.length === 0: return []
 *  2. if strs.length === 1: [strs]
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  create a Map where: k = bucket for string freq, v = Array of anagrams
 *  
 *  For each str in strs
 *      create an Array of length 26 to store the frequency of each character
 *      convert the Array into a String to represent the bucket
 *      if bucket does not exist in Map
 *          create
 *      add to bucket's Array
 * 
 * 7. algos
 *  - Hashing
 * 
 * 8. data structures
 *  - Arrays
 *  - Hash table
 * 
 * 9. complexity    
 *  Time: O(n * m)
 *  Space: O(n)
 *      
 *      
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

        const mapAna = new Map()
        for (let i = 0; i < strs.length; i ++) {
            const arrBucket = new Array(26).fill(0)

            for (let j = 0; j < strs[i].length; j ++) {
                const ord = strs[i].charCodeAt(j) - 'a'.charCodeAt(0)
                arrBucket[ord] += 1
            }

            const strBucket = arrBucket.join(',')   // need divide with ',' due to > 1 digit frequencies

            if (!mapAna.has(strBucket)) {
                mapAna.set(strBucket, new Array())
            }
            mapAna.get(strBucket).push(strs[i])
        }

        const res = new Array()
        for (let [_, v] of mapAna) {
            res.push(v)
        }

        return res
    }
}
