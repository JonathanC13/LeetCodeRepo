// https://leetcode.com/problems/minimum-window-substring/description/

/**
1. Assumptions: None

2. Validate inputs:
    - Length: 
        1. if (s.length === 0): return ""
        2. if t.length > s.length: return ""
    - Content: Check if both s and t are only uppercase and lowercase English characters.
        Can use regex
            const regex = /^[\x41-\x5A\x61-\x7A]*$/  // x41-x5A is hex for Uppercase eng. x61-x7A for Lowercase eng.
            //const regex = /^[A-Za-z]*$/;

3. Constraints?
    - Time: O(m + n)    // m = s.length, n = t.length

4. Determine the algorithm
    Since require the minimum window, use Sliding window.
    Record the characters and frequencies in a Map
    Maintain the current window's characters and frequencies in another Map

5. Data structures
    1. Iterate the String s
    2. 2 Maps

6. Edges cases
    N/A

7. some test cases
    1. s = ""
    2. s = "a", t = "aa"
    3. s = "ABC", t = ""
    4. s = "ABBC", t = "ABC"

8. Complexity
    - Time: O(m + n)    // n to iterate String t to record chars and freq, + m to iterate the window.
    - Space: O(m + n)
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (s.length === 0) {
        return ""
    }
    const regex = /^[A-Za-z]*$/;
    if (regex.test(s) === false || regex.test(t) === false) {
        return ""
    }
    
    const needMap = new Map()
    const haveMap = new Map()
    
    for (let i = 0; i < t.length; i ++) {
        if (!needMap.has(t[i])) {
            needMap.set(t[i], 0)
        }
        needMap.set(t[i], needMap.get(t[i]) + 1)
    }

    const need = needMap.size
    let have = 0

    let minWindow = [0, Number.POSITIVE_INFINITY]

    // window
    let l = 0
    for (let r = l; r < s.length; r ++) {
        if (!haveMap.has(s[r])) {
            haveMap.set(s[r], 0)
        }

        haveMap.set(s[r], haveMap.get(s[r]) + 1)
        if (needMap.has(s[r]) && haveMap.get(s[r]) === needMap.get(s[r])) {
            // meets requirement
            have += 1
        }

        while (l <= r && have === need) {
            // update min if still valid substring
            if (r - l < minWindow[1] - minWindow[0]) {
                minWindow = [l, r]
            }

            if (needMap.has(s[l]) && haveMap.get(s[l]) === needMap.get(s[l])) {
                // before update, if at requirement then have -= 1 since the window will move forward decrementing this char.
                have -= 1
            }
            haveMap.set(s[l], haveMap.get(s[l]) - 1)
            l += 1
        }
    }

    return minWindow[1] === Number.POSITIVE_INFINITY ? "" : s.slice(minWindow[0], minWindow[1] + 1)
};