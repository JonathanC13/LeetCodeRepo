/*
https://leetcode.ca/all/159.html
Given a string s, find the length of the longest substring t that contains at most 2 distinct characters.

Approach
1. Draw
2. Solve manaully by hand
3. Break into smaller problems
    - Need to maintain window for the valid substring that has at most 2 distinct chars
    - When the substring becomes invalid, reduce the window from the left until valid again
4. Some example test cases
    1. s = ""
    2. s = "abbaa"
    3. s = "aaaa"

5. Determine algorithm and data structures.
    - algo
        - Since need to determine the longest substring, use sliding window to define the substring while iterating String s
    - data structures
        - The input Array to iterate
        - A Map for the current characters in the window's substring

Techniques to solve.
1. Assumptions:
    - Only uppercase and lowercase English characters and case sensative

2. Input validation.
    - Length:
        if (s.length === 0):
            return 0

    - Content. Regex for the String chars
        regex = /^[A-Za-z]*&/

3. Constraints:
    - Best theoretical time complexity: Time: O(n)  // one pass
    - Space: O(n)   // potential the window can have all the characters

4. Determine the algorithm
    Since need to determine the longest substring, use sliding window to define the substring while iterating String s

5. Data structures
    - The input Array to iterate
    - A Map for the current characters in the window's substring

6. Edges cases
    N/A

7. some test cases
    1. s = ""
    2. s = "abbaa"
    3. s = "aaaa"

8. Complexity
    - Time: O(n)    // n to iterate String t to record chars and freq
    - Space: O(n)

*/

const longestSubstring = function(s, maxDistinct = 2) {
    if (s.length === 0) {
        return 0
    }

    const have = new Map()
    let currDistinct = 0
    let l = 0
    const maxLen = [0, 0]

    for (let r = l; r < s.length; r ++) {
        if (!have.has(s[r])) {
            have.set(s[r], 0)
        }

        // check if new distinct in window before adding so the increment happens once.
        if (have.get(s[r]) === 0) {
            currDistinct += 1
        }
        // increment freq
        have.set(s[r], have.get(s[r]) + 1)

        while (l <= r && currDistinct > maxDistinct) {
            // once invalid window, reduce window until valid again
            // if the character freq about to be decremented will cause it to no longer be in the window, the currDistinct is decremented.
            if (have.get(s[l]) === 1) {
                currDistinct -= 1
            }
            have.set(s[l], have.get(s[l]) - 1)
            l += 1
        }

        // only update maxLen if the window is valid
        if (r - l > maxLen[1] - maxLen[0]) {
            maxLen[0] = l
            maxLen[1] = r 
        }
    }
    console.log(s.slice(maxLen[0], maxLen[1] + 1))
    return maxLen[1] - maxLen[0] + 1
}

console.log(longestSubstring(''))
console.log(longestSubstring('abbaa'))
console.log(longestSubstring('eceba'))
console.log(longestSubstring('ccaabbb'))