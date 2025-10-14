// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
1. Assumptions
    - s can have any characters

2. input validation
    - s instanceof Array
    - length
        - if s.length === 0: return 0
    - content
        s can have contain any characters

3. time/space constraints
    BTTC: O(n)  // one pass
    Space: O(m) // window character Map

4. some test cases and edge cases
    edge cases
    1. if s.length === 0: return 0
    test cases
    1. s = ''   // expected = 0
    2. s = 'abc'    // expected = 3
    3. s = 'abacda' // expected = 3

5. visualize by drawing and manually solve
6. break into subproblems
    - create a Map to track the characters' occurances within the current window. Could use a Set since once a repeated is found, it is handled so Map count doesn't need to go above 1. A Map would be used if it allowed k max repeat of a character.
    - maintain max window with no repeating
    l = 0
    iterate r = l to r < s.length
        if char in Map count === 1
            // since freq increment will put over 1
            counter += 1

        increment char count in Map

        while (l <= r && count > 0) {
            // the window is invalid, need to move left of window until valid again
            decrement char count in Map
            if (char in Map count === 1) {
                // since now char freq is 1
                counter -= 1
            }
            l += 1
        }

        update max substring length

7. algo
    - sliding window for substring

8. data structure
    - Input Array
    - Map for window chars

9. Complexity
    - Time: O(n)
    - Space: O(m)

 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length === 0) {
        return 0
    }

    const windMap = new Map()
    const maxSubstr = [0, 0]
    let counter = 0
    let l = 0
    for (let r = l; r < s.length; r ++) {
        if (!windMap.has(s[r])) {
            windMap.set(s[r], 0)
        }

        if (windMap.get(s[r]) === 1) {
            counter += 1
        }
        windMap.set(s[r], windMap.get(s[r]) + 1)

        while (l <= r && counter > 0) {
            windMap.set(s[l], windMap.get(s[l]) - 1)
            if (windMap.get(s[l]) === 1) {
                counter -= 1
            }
            l += 1
        }

        if (r - l > maxSubstr[1] - maxSubstr [0]) {
            maxSubstr[0] = l
            maxSubstr[1] = r
        }
    }

    console.log(s.slice(maxSubstr[0], maxSubstr[1] + 1))
    return maxSubstr[1] - maxSubstr[0] + 1
};