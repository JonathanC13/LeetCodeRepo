// https://leetcode.com/problems/valid-palindrome/description/

/**
1. Assumptions
    - None

2. validate inputs
    ...

3. time/space constraints
    - BTTC: O(n)    // n/2
    - Space: O(1)

4. some test cases and edge cases
    edge cases
    1. if s.length === 0: return true
    test cases
    1. s = ' $!'    // expected = true
    2. s = 'ra5cec5ar'    // expected = true
    3. s = 'r ac!^eca[r'    // expected = true
    4. s = 'abca'   // expected = false

5. visualize by drawing and manually sove
6. break into subproblems
    - create function to check if character is alphanumeric
    - two pointer solution:
        1. left start at 0
        2. right start at n - 1

        while (l < r)
            while (l < r && isAlphanum(s[l]) === false) {
                // need to move until valid char to compare
                l += 1
            }
            while (l < r && isAlphanum(s[r]) === false) {
                r -= 1
            }

            // at this point either l != r and have a valid char or l === r
            if (s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false
            }
            l += 1
            r -= 1
        return true // got to end, therefore all match

7. algorithm
    - two pointer

8. data structure
    - String

9. Complexity
    - Time: O(n)
    - Space: O(1)
 */

const isAlphanum = function(c) {
    const regex = /[a-z0-9]/  // a to z or 0 to 9. exactly 1 character
    return regex.test(c.toLowerCase())
}

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let l = 0
    let r = s.length - 1
    while (l < r) {
        while (l < r && isAlphanum(s[l]) === false) {
            l += 1
        }
        while (l < r && isAlphanum(s[r]) === false) {
            r -= 1
        }

        if (s[l].toLowerCase() !== s[r].toLowerCase()) {
            return false
        }
        l += 1
        r -= 1
    }

    return true
};