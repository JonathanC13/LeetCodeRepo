// https://leetcode.com/problems/ransom-note/description/

/**
1. Assumptions
    - What is the range of characters? 
        Lowercase English, so can use an Array of length 26 for the frequency buckets. Space: O(1)
        Else if any character, use a Map, space: O(n)

2. input validation
    - ransomNote instanceof String, magazine instance of String
    - length
        if ransomNote.length > magazine.length: return false    // since not enough characters
    - content
        English lowercase
        regex = /^[a-z]*$/

3. time/space constraints
    BTTC: O(n + m)  // n = magazine.length, m = ransomNote.length
    Space: O(1) // since only lowercase English characters, O(1) is achievable with Array of 26

4. edge cases and some test cases
    edge cases
    1. if ransomNote.length > magazine.length: return false
    test cases
    1. case 1: magazine has all the characters in ransomNote but lacking quantity
        Input
            ransomNote = 'apples'
            magazine = 'aplless'
        Output
            expected = false
    2. case 2: magazine does not have all ransomNote characters
        Input
            ransomNote = 'apples'
            magazine = 'appppple'
        Output
            expected = false
    3. case 3: valid
        Input
            ransomNote = 'apples'
            magazine = 'sauceapples'
        Output
            expected = true

5. visualize by drawing and manually solve
6. break into subproblems
    since need to determine if 'magazine' has all the characters needed for ransomNote, iterate the magazine's characters to record the frequency of each character. freq = Array(26) and index determine by = magazine.charCodeAt(i) - 'a'.charCodeAt(0)
    Then iterate the ransomNote and if the current 'inventory' of the current character in ransomNote in the freq Array is 0, return false since either never appeared in magazine of ran out.

7. algo
    - counting frequency into hash table

8. data structures
    - Hash table

9. Complexity
    - Time: O(n + m)
    - Space: O(1)

 */

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if (ransomNote.length > magazine.length) {
        return false
    }

    const freqs = new Array(26).fill(0)
    for (let i = 0; i < magazine.length; i ++) {
        const ord = magazine.charCodeAt(i) - 'a'.charCodeAt(0)
        freqs[ord] += 1 // add to char's freq
    }

    for (let i = 0; i < ransomNote.length; i ++) {
        const ord = ransomNote.charCodeAt(i) - 'a'.charCodeAt(0)
        if (freqs[ord] === 0) {
            return false
        }
        freqs[ord] -= 1  // used
    }
    // if arrived after loop, it means magazine had all characters in ransomNote
    return true
};